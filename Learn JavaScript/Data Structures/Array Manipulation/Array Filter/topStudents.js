function topStudents(array) {
    return array.filter((el) => {
        return el.grade >= 90;
    });
}

module.exports = topStudents;
