var Person = require('./person')

class Teacher extends Person {

    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
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


}
module.exports = Teacher