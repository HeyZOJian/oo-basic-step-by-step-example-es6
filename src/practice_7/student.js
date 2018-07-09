var Person = require('./person')
class Student extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        let introduceStr = super.introduce()
        introduceStr += ` I am a Student. I am at ${this.klass.getDisplayName()}.`
        return introduceStr;
    }

    getKlassName(){
        return this.klass.getDisplayName();
    }
}

module.exports = Student