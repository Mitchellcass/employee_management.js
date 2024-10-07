// Task 1: Create an employee class
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    getDetails() {
        return `${this.name}, ${this.position}, ${this.department}, ${this.salary}`;
    }
}

// will study more, took too long looking over notes