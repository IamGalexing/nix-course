const { run, createAddUsersAgeCallback, createFilterUsersCallback, createSortUsersCallback } = require('../src');
const { users, sortedByName, sortedByPhoneNumber, handledUsers } = require('../src/users_api');

describe('TESTS: ', () => {
  [run, createFilterUsersCallback, createSortUsersCallback, createAddUsersAgeCallback].forEach((method) => {
    test(`${method.name} should be defined`, () => {
      expect(method).toBeDefined();
    });
  });

  [createFilterUsersCallback, createSortUsersCallback, createAddUsersAgeCallback].forEach((method) => {
    test(`${method.name} should return a Function entity`, () => {
      expect(method()).toEqual(expect.any(Function));
    });
  });

  describe('createFilterUsersCallback method', () => {
    const conditions = [(user) => user.id <= 5, (user) => user.phone.toString().includes('7')];

    conditions.forEach((condition, i) => {
      test(`should return a callback, that filters data. Condition № ${i + 1}`, () => {
        const expectation = users.filter(condition);
        const result = createFilterUsersCallback(condition)(users);

        expect(result).toEqual(expectation);
      });
    });
  });

  describe('createAddUsersAgeCallback method', () => {
    test('should add an "Age" property to each user object, and generate a random value with type of "number"', () => {
      const result = createAddUsersAgeCallback()(users);

      result.forEach((user) => {
        expect(user).toHaveProperty('age', expect.any(Number));
      });
    });

    test('should add an "Age" property. Value should be is integer number from 1 to 10', () => {
      const result = createAddUsersAgeCallback()(users);

      result.forEach(({ age }) => {
        expect(Number.isInteger(age)).toBeTruthy();
        expect(age).toBeGreaterThanOrEqual(1);
        expect(age).toBeLessThanOrEqual(10);
      });
    });
  });

  describe('createSortUsersCallback method', () => {
    test('should sort data depends on passed key and typeof value. CASE: typeof value is "string"', () => {
      const result = createSortUsersCallback('name')(users.slice(0, 5));

      expect(result).toEqual(sortedByName);
    });

    test('should sort data depends on passed key and typeof value. CASE: typeof value is "number"', () => {
      const result = createSortUsersCallback('phone')(users.slice(0, 5));

      expect(result).toEqual(sortedByPhoneNumber);
    });
  });

  describe('run method: ', () => {
    test('should return a Promise', () => {
      const expectation = run(createFilterUsersCallback, createSortUsersCallback, createAddUsersAgeCallback);

      expect(expectation instanceof Promise).toBeTruthy();
    });

    test('should return users data', async () => {
      const result = await run(...new Array(3).fill((data) => data));

      expect(result).toEqual(users);
    });

    test('should return handled users data by callbacks', async () => {
      const filterCallback = createFilterUsersCallback((user) => user.phone.toString().includes('7'));
      const sortCallback = createSortUsersCallback('name');
      const addAgeCallback = (data) => data;
      const result = await run(filterCallback, sortCallback, addAgeCallback);

      expect(result).toEqual(handledUsers);
    });

    describe.skip('should throw an error when no callback is passed. CASE: ', () => {
      [
        { name: 'filterCallback', clb: (data) => data },
        { name: 'sortCallback', clb: (data) => data },
        { name: 'addAgeCallback', clb: (data) => data },
      ].forEach((callback, i, arr) => {
        const expectation = `${callback.name} not defined`;
        test(`${callback.name} function should returns error with message - "${expectation}"`, async () => {
          const handledArgs = arr.map((obj) => obj.clb);
          handledArgs.splice(i, 1, null);
          const result = await run(...handledArgs);

          expect(result instanceof Error).toBeTruthy();
          expect(result.message).toBe(expectation);
        });
      });
    });
  });
});
