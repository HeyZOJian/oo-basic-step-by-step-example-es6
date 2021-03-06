var Person = require('./person')
class Student extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        let introduceStr = super.introduce()
        introduceStr += ` I am a Student. I am at Class ${this.klass}.`
        return introduceStr;
    }
}

module.exports = Student