class Class {
    constructor(number) {
        this.number = number;
        this.students = []
        this.teachersNewJoin = []
        this.teachersNewLeader = []
    }

    getDisplayName() {
        return 'Class ' + this.number;
    }

    isIn(student) {
        return this.students.filter((x) => {
            return x.id === student.id
        }).length > 0
    }

    assignLeader(student) {
        if (student.getKlassNumber() === this.number) {
            this.leader = student;
            this.noticeAllTeacherKlassHaveNewLeader(student)
        } else {
            console.log("It is not one of us.");
        }
    }

    getLeaderName() {
        if (this.leader)
            return this.leader.name;
        else
            return null
    }

    appendMember(student) {
        student.klass = this
        this.students.push(student)
        this.noticeAllTeacherKlassHaveNewStudent(student)
    }

    registerJoinListener(teacher) {
        this.teachersNewJoin.push(teacher)
    }

    noticeAllTeacherKlassHaveNewStudent(student) {
        for (const teacher of this.teachersNewJoin) {
            teacher.klassHaveNewStudent(student, this);
        }
    }

    registerAssignLeaderListener(teacher) {
        this.teachersNewLeader.push(teacher)
    }

    noticeAllTeacherKlassHaveNewLeader(student) {
        for (const teacher of this.teachersNewLeader) {
            teacher.klassHaveNewLeader(student, this);
        }
    }

}

module.exports = Class