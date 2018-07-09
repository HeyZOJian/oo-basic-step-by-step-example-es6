var Person = require('./person')

class Teacher extends Person {

    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
        if (klasses) {
            for (const klass of klasses) {
                klass.registerJoinListener(this);
            }
            for (const klass of klasses) {
                klass.registerAssignLeaderListener(this);
            }
        }
        // subscribeKlassesHaveNewStudent(this.klasses);
        // subscribeKlassesHaveNewLeader(this.klasses);
    }

    introduce() {
        let introduceStr = super.introduce();
        if (this.klasses)
            introduceStr += ` I am a Teacher. I teach Class ${this.klasses.map((klass)=>klass.number).join(", ")}.`;
        else
            introduceStr += ` I am a Teacher. I teach No Class.`;
        return introduceStr;
    }

    introduceWith(student) {
        let introduceWithStr = super.introduce();
        introduceWithStr += ` I am a Teacher.`
        if (student.getKlassName() === this.klass.getDisplayName()) {
            introduceWithStr += ` I teach ${student.name}.`;
        } else {
            introduceWithStr += ` I don't teach ${student.name}.`
        }
        return introduceWithStr;
    }

    isTeaching(student) {
        for (const klass of this.klasses) {
            if (klass.isIn(student))
                return true
        }
        return false
    }

    subscribeKlassesHaveNewStudent(klasses) {
        for (const klass of klasses) {
            klass.registerJoinListener(this);
        }
    }
    subscribeKlassesHaveNewLeader(klasses) {
        for (const klass of klasses) {
            klass.registerAssignLeaderListener(this);
        }
    }

    klassHaveNewStudent(student, klass) {
        console.info(
         `I am ${this.name}. I know ${student.getName()} has joined ${klass.getDisplayName()}.`);
    }


    klassHaveNewLeader(student, klass) {
        console.info(
         `I am ${this.name}. I know ${student.getName()} become Leader of ${klass.getDisplayName()}.`);
    }


}
module.exports = Teacher