var Person = require('./person')

class Teacher extends Person {

    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    introduce() {
        let introduceStr = super.introduce();
        if (this.klass)
            introduceStr += ` I am a Teacher. I teach ${this.klass.getDisplayName()}.`;
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
}
module.exports = Teacher