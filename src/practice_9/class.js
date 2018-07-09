class Class {
    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return 'Class ' + this.number;
    }

    appendMember(student){
        student.klass = this
    }

    assignLeader(student) {
        if (student.getKlassNumber() === this.number)
            this.leader = student;
        else{
            console.log("It is not one of us.");
        }
    }

    getLeaderName() {
        if (this.leader)
            return this.leader.name;
        else
            return null
    }

   
}

module.exports = Class