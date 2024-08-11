const fs = require('fs');
const path = require('path');

const utilsPath = path.join(__dirname, '../src/utils');
const indexFilePath = path.join(__dirname, '../src/utils/index.js');

function getListOfFunctions(functions) {
  return functions.split(',').map((functionName) => functionName.trim());
}

describe('function decomposition', () => {
  it('the utils folder should be created', () => {
    expect(fs.existsSync(utilsPath)).toBe(true);
  });

  describe('moving functions to separate independent modules', () => {
    ['findMax', 'getPower', 'capitalize'].forEach((functionName) => {
      it(`the function ${functionName}() should exist in the folder utils`, () => {
        const files = fs.readdirSync(utilsPath);
        const fileWithFunction = files.find((file) => {
          const contents = fs.readFileSync(path.join(utilsPath, file), 'utf8');
          return contents.includes(`function ${functionName}(`);
        });

        expect(fileWithFunction).toBeDefined();
      });
    });
  });

  describe('index.js module', () => {
    test('modules should be joined in the index.js module and exported from the utils folder', () => {
      const indexFile = fs.readFileSync(indexFilePath, 'utf8');
      const exportRegex = /module.exports\s*=\s*{\s*([\w\s,]+)\s*}/;
      const match = indexFile.match(exportRegex);
      const functionList = getListOfFunctions(match[1]);
      const hasAllFunctions = ['findMax', 'getPower', 'capitalize'].every((functionName) => {
        return functionList.includes(functionName);
      });

      expect(hasAllFunctions).toBe(true);
    });
  });
});
