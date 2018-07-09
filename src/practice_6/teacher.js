var Person = require('./person')

class Teacher extends Person {

    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        const klassString = (this.klass === undefined) ? 'No Class' : `Class ${this.klass}`
        return `${super.introduce()} I am a Teacher. I teach ${klassString}.`;
    }
}
module.exports = Teacher