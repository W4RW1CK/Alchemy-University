function sortStudents(students) {
    students.sort((a, b) =>{
        if(a.graduated && !b.graduated) {
            return -1;
        }
        else if(b.graduated && !a.graduated) {
            return 1;
        }
        return b.grade - a.grade;
    })
}

module.exports = sortStudents;
