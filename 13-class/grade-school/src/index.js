/* eslint class-methods-use-this: 0 */

class GradeSchool {
  #db = [];

  add(name, grade) {
    const findStudentIndex = this.#db.findIndex((student) => student.name === name);
    if (findStudentIndex === -1) {
      this.#db.push({ name, grade });
    } else {
      this.#db.splice(findStudentIndex, 1, { name, grade });
    }
  }

  grade(grade) {
    const students = this.#db
      .reduce((acc, student) => (student.grade === grade ? acc.concat([student.name]) : acc), [])
      .sort();
    return students;
  }

  roster() {
    const sortedData = {};

    this.#db.forEach((student) => {
      if (!sortedData[student.grade]) {
        sortedData[student.grade] = [];
      }
      sortedData[student.grade].push(student.name);
    });

    Object.values(sortedData).forEach((students) => {
      students.sort();
    });

    return sortedData;
  }
}

module.exports = GradeSchool;
