class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }

    set sFirstname(newFirstname) {
        this.firstname = newFirstname
    }

    set sLastname(newLastname) {
        this.lastname = newLastname
    }

    get fullName() {
        return this.firstname + " - " + this.lastname
    }
}

let per = new Person("Hoai", "Tam")
per.sFirstname = "May"
per.sLastname = "May"
console.log(per.fullName)
