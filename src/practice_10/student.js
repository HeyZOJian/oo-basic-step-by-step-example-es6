var Person = require('./person')
class Student extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    introduce() {
        let introduceStr = super.introduce()
        introduceStr += ` I am a Student.`
        if(this.klass.getLeaderName() === this.name){
            introduceStr += ` I am Leader of ${this.klass.getDisplayName()}.`;
        }
        else{
            introduceStr += ` I am at ${this.klass.getDisplayName()}.`;
        }
        return introduceStr;
    }
    getKlassNumber(){
        return this.klass.number;
    }
    getKlassName() {
        return this.klass.getDisplayName();
    }
}

module.exports = Student