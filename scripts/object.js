const input = document.querySelector('input');
const btn = document.querySelector('button');
const para = document.querySelector('p');

btn.onclick = function () {
    const code = input.value;
    para.textContent = eval(code);
}

//在构造器中定义对象，在对象原型上定义函数(假如把函数定义在构造器中，每次实例化一个对象都要声明一下函数，这样很消耗)
function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
};

Person.prototype.bio = function () {
    // First define a string, and make it equal to the part of
    // the bio that we know will always be the same.
    let string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
    // define a variable that will contain the pronoun part of
    // the second sentence
    let pronoun;

    // check what the value of gender is, and set pronoun
    // to an appropriate value in each case
    if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
        pronoun = 'He likes ';
    } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
        pronoun = 'She likes ';
    } else {
        pronoun = 'They like ';
    }

    // add the pronoun string on to the end of the main string
    string += pronoun;

    // use another conditional to structure the last part of the
    // second sentence depending on whether the number of interests
    // is 1, 2, or 3
    if (this.interests.length === 1) {
        string += this.interests[0] + '.';
    } else if (this.interests.length === 2) {
        string += this.interests[0] + ' and ' + this.interests[1] + '.';
    } else {
        // if there are more than 2 interests, we loop through them
        // all, adding each one to the main string followed by a comma,
        // except for the last one, which needs an and & a full stop
        for (let i = 0; i < this.interests.length; i++) {
            if (i === this.interests.length - 1) {
                string += 'and ' + this.interests[i] + '.';
            } else {
                string += this.interests[i] + ', ';
            }
        }
    }

    // finally, with the string built, we alert() it
    alert(string);
};

Person.prototype.greeting = function () {
    alert('Hi! I\'m ' + this.name.first + '.');
};

Person.prototype.farewell = function () {
    alert(this.name.first + ' has left the building. Bye for now!');
}

let person1 = new Person('Tammi', 'Smith', 17, 'female', ['music', 'skiing', 'kickboxing']);

//新建一个对象Teacher继承Person
function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);   //.call继承Person的属性。假如没有传参进去，只需要this
    this.subject = subject;
};
//teacher继承person原型的属性与方法
Teacher.prototype = Object.create(Person.prototype);
//这个时候Teacher.prototype  Teacher.prototype.constructor 都是指向Person的
//这可能会成为问题，所以将原型构造器指向Teacher
Teacher.prototype.constructor = Teacher;
//构造新的原型函数greeting
Teacher.prototype.greeting = function () {
    var prefix;
    if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
        prefix = 'Mr.';
    } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
        prefix = 'Mrs.';
    } else {
        prefix = 'Mx.';
    }
    alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};

let teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');