class Class {
    constructor(number) {
        this.number = number;
    }
    
    getDisplayName() {
        return 'Class ' + this.number;
    }

    assignLeader(student) {
        if (student.getKlassNumber() === this.number)
            this.leader = student;
    }

    getLeaderName() {
        if (this.leader)
            return this.leader.name;
        else
            return null
    }
}

module.exports = Class