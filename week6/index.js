const employees = [];

function Employee (name, jobTitle, salary, status = "fulltime")
{
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    // this.status = "fulltime";
    this.printEmployeeForm = function(){
        console.log(name,jobTitle, salary);
    }
         employees.push(this);
}

const employee1 = new Employee("jimmy","CEO", "100,000");
const employee2 = new Employee("carl","stocker", "35,000");
const employee3 = new Employee("sheen","cashier", "33,000");

employee1.printEmployeeForm();
employee2.printEmployeeForm();
employee3.printEmployeeForm();
console.log(employees);




