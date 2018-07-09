var Person = require('./person')

class Teacher extends Person {

    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        let introduceStr = super.introduce();
        if (!this.klass) {
            this.klass = 'No Class'
        } else {
            this.klass = 'Class ' + this.klass
        }
        introduceStr += ` I am a Teacher. I teach ${this.klass}.`;
        return introduceStr;
    }
}
module.exports = Teacher