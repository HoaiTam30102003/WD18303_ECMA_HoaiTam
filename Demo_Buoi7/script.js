class UserInfo{
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login(){
        console.log(`${this.email} login success!`);
    }
}
student = new UserInfo("Tâm", "tamtnnhpc05664.fpt.edu.vn");
teacher = new UserInfo("Mây", "maytnnhpc05664.fpt.edu.vn");

student.learning = function(){
    console.log(`${this.name} is learning!`);
}

teacher.teaching = function(){
    console.log(`${this.name} is teaching!`);
}

student.login();
student.learning();

teacher.login();
teacher.teaching();