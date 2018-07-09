var Person = require('./person')

class Teacher extends Person {

    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        const klassString = (this.klass === undefined) ?
            'No Class' :
            `${this.klass.getDisplayName()}`
        return `${super.introduce()} I am a Teacher. I teach ${klassString}.`;
    }

    introduceWith(student) {
        const studentString = (student.getKlassName() === this.klass.getDisplayName()) ?
            ` I teach ${student.name}` :
            ` I don't teach ${student.name}`
        return `${super.introduce()} I am a Teacher.${studentString}.`;
    }
}
module.exports = Teacher