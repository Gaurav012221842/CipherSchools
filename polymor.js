class Person {
    // Constructor to initialize name and id
    constructor(name, id) {
        this._name = name; // Using underscores to denote private properties
        this._id = id;
        this._address = ""; // Initially address is empty
    }

    // Method to add an address
    addAddress(address) {
        this._address = address;
    }

    // Method to get details of the person
    getDetails() {
        return `Name: ${this._name}\nID: ${this._id}\nAddress: ${this._address}`;
    }
}

// Subclass of Person
class Employee extends Person {
    // Constructor to initialize name, id, and employee-specific properties
    constructor(name, id, jobTitle, salary) {
        super(name, id); // Call the parent class constructor
        this._jobTitle = jobTitle;
        this._salary = salary;
    }

    // Method to get details of the employee (overrides Person's getDetails)
    getDetails() {
        const personDetails = super.getDetails(); // Call the parent class getDetails method
        return `${personDetails}\nJob Title: ${this._jobTitle}\nSalary: ${this._salary}`;
    }
}

// Example usage:
let person1 = new Person("John Doe", "12345"); // Creating an instance of Person
person1.addAddress("123 Main St, Anytown, USA"); // Adding an address

let employee1 = new Employee("Jane Smith", "67890", "Software Engineer", "$100,000"); // Creating an instance of Employee
employee1.addAddress("456 Elm St, Othertown, USA"); // Adding an address

// Storing and printing details of the Person instance
let personDetails = person1.getDetails();
console.log("Person Details:");
console.log(personDetails);

// Storing and printing details of the Employee instance
let employeeDetails = employee1.getDetails();
console.log("\nEmployee Details:");
console.log(employeeDetails);
