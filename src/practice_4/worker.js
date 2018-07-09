var Person = require('./person')

class Worker extends Person {
    constructor(name, age) {
        super(name, age)
    }

    introduce() {
        let introduceStr = super.introduce()
        introduceStr += " I am a Worker. I have a job."
        return introduceStr;
    }
}

module.exports = Worker