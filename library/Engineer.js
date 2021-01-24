class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.github=gitHub;
    }
    getRole() {
        return "Engineer"
    }
}


module.exports =  Engineer;