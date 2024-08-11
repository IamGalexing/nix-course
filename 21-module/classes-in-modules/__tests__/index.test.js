const fs = require('fs');
const path = require('path');

const scriptFilePath = path.join(__dirname, '../src/script.js');
const sharedFolderPath = path.join(__dirname, '../src/shared');
const indexFilePath = path.join(sharedFolderPath, '/index.js');

const { Transport, Airplane, Car } = require('../src/shared');

function getListOfClasses(classes) {
  return classes.split(',').map((className) => className.trim());
}

describe('classes in modules', () => {
  describe('shared folder', () => {
    it('the shared folder should be created', () => {
      expect(fs.existsSync(sharedFolderPath)).toBe(true);
    });

    [
      { name: 'transport', ClassBuilder: Transport, fields: ['maxSpeed'] },
      { name: 'airplane', ClassBuilder: Airplane, fields: ['maxSpeed', 'model'] },
      { name: 'car', ClassBuilder: Car, fields: ['maxSpeed', 'brand', 'model'] },
    ].forEach(({ name, ClassBuilder, fields }) => {
      const fileName = `${name}.js`;

      describe(`${fileName} module`, () => {
        const className = `${name[0].toUpperCase()}${name.slice(1)}`;
        const filePath = path.join(sharedFolderPath, fileName);

        it(`the module should be created`, () => {
          expect(fs.existsSync(filePath)).toBe(true);
        });

        it(`class ${className} should be created and exported`, () => {
          const classFile = fs.readFileSync(filePath, 'utf8');

          expect(classFile.includes(`class ${className}`)).toBe(true);
          expect(classFile.includes(`module.exports`)).toBe(true);
        });

        it(`class ${className} has fields: ${fields.join(', ')}`, () => {
          const instance = new ClassBuilder();

          fields.forEach((field) => {
            expect(instance).toHaveProperty(field);
          });
        });
      });
    });

    describe('index.js module', () => {
      test('the module should be created', () => {
        expect(fs.existsSync(indexFilePath)).toBe(true);
      });

      test('modules should be joined in the index.js module and exported from the shared folder', () => {
        const indexFile = fs.readFileSync(indexFilePath, 'utf8');
        const exportRegex = /module.exports\s*=\s*{\s*([\w\s,]+)\s*}/;
        const match = indexFile.match(exportRegex);
        const classList = getListOfClasses(match[1]);
        const hasAllClasses = ['Transport', 'Airplane', 'Car'].every((className) => {
          return classList.includes(className);
        });

        expect(hasAllClasses).toBe(true);
      });
    });
  });

  describe('script.js module', () => {
    const scriptFile = fs.readFileSync(scriptFilePath, 'utf8');

    test('imports of modules should be grouped into one in the script.js module', () => {
      const importRegex = /require\('\.\/shared'\);/g;
      const matches = scriptFile.match(importRegex);

      expect(matches && matches.length === 1).toBe(true);
    });

    ['Transport', 'Airplane', 'Car'].forEach((className) => {
      test(`instance of the class ${className} should be created`, () => {
        expect(scriptFile.includes(`new ${className}`));
      });
    });
  });
});
