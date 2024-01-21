class User {
    constructor(email, password, name) {
        this.email = email
        this.password = password
        this.name = name
    }
    login() {
        return 'Email: ' + this.email + '| Password: ' + this.password;
    }

}

class Student extends User{
    constructor(email, password, name, cource) {
        super(email, password, name);
        this.cource = cource
    }
    learning() {
        return this.name + ' is learning';
    }
    getinfo(){
        return 'Email: ' + this.email + '| Password: ' + this.password + '| Name: ' + this.name + '| Cource: ' + this.cource;
    }
}

class Teacher extends User {
    constructor(email, password, name, start_date) {
        super(email, password, name);
        this.start_date = start_date
    }
    teaching() {
        return this.name + ' is teaching';
    }

    getinfo(){
        return 'Email: ' + this.email + '| Password: ' + this.password + '| Name: ' + this.name + '| Start Date: ' + this.start_date;
    }
}

stu = new Student("tam@gmail.com", "hahaha", "Hoai Tam", "K18");
console.log(stu.learning())
console.log(stu.getinfo())
console.log(stu.login())

teach = new Teacher("tam2@gmail.com", "hihihi", "Hoai Tam 2", 2020);
console.log(teach.teaching())
console.log(teach.getinfo())
console.log(teach.login())