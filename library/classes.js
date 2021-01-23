class Employee {
    constructor(name, id, email) {
        this.employeename=name
        this.employeeid=id
        this.employeeemail=email
    }
}

class Manager extends Employee {
    constructor(officeNumber) {
        this.manageroffice=officeNumber
    }
}

class Engineer extends Employee {
    constructor(github) {
        this.engineergithub=github
    }
}

class Intern extends Employee {
    constructor(school) {
        this.internschool=school
    }
}