const run = require('../src');

describe('#run', () => {
  const users = [
    { name: 'John', age: 20, surname: 'Doe' },
    { name: 'Pete', age: 18, surname: 'Star' },
    { name: 'Jennie', age: 19, surname: 'Nichols' },
  ];

  it('sorts users by name', () => {
    const nameSortedKey = [
      { name: 'Jennie', age: 19, surname: 'Nichols' },
      { name: 'John', age: 20, surname: 'Doe' },
      { name: 'Pete', age: 18, surname: 'Star' },
    ];
    const nameSortedAnswer = users.sort(run('name'));
    expect(nameSortedAnswer).toEqual(nameSortedKey);
  });

  it('sorts users by age', () => {
    const ageSortedKey = [
      { name: 'Pete', age: 18, surname: 'Star' },
      { name: 'Jennie', age: 19, surname: 'Nichols' },
      { name: 'John', age: 20, surname: 'Doe' },
    ];
    const ageSortedAnswer = users.sort(run('age'));
    expect(ageSortedAnswer).toEqual(ageSortedKey);
  });

  it('sorts users by surname', () => {
    const surnameSortedKey = [
      { name: 'John', age: 20, surname: 'Doe' },
      { name: 'Jennie', age: 19, surname: 'Nichols' },
      { name: 'Pete', age: 18, surname: 'Star' },
    ];
    const surnameSortedAnswer = users.sort(run('surname'));
    expect(surnameSortedAnswer).toEqual(surnameSortedKey);
  });
});
