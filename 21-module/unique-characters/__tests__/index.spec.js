const fs = require('fs');
const path = require('path');

const getUniqueCharacters = require('../src/unique-characters');

const indexPath = path.join(__dirname, '../src/index.js');

describe('unique characters', () => {
  it('should return string with unique characters', () => {
    expect(getUniqueCharacters('abcacadb')).toBe('abcd');
  });

  describe('index.js module', () => {
    test('unique characters module should be used in the index.js module', () => {
      const indexFile = fs.readFileSync(indexPath, 'utf8');
      const importRegex = /require\('.*?'\);/g;
      const matches = indexFile.match(importRegex);

      expect(!!matches.length).toBe(true);
    });
  });
});
