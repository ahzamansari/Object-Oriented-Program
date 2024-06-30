import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue("\n\tWelcome To Ahzam - Object Oriented Program"));
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class person {
    student = [];
    static student;
    static addStudent;
    addstudent(obj) {
        this.student.push(obj);
    }
}
const persons = new person();
const programStart = async (persons) => {
    do {
        console.log("\nWelcome!");
        const ans = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: "Whom would you like to interact with?",
                choices: ["Staff", "Student", "Exit"]
            }
        ]);
        if (ans.select == "Staff") {
            console.log(chalk.yellow("You approch the staff room, Please free to ask any class room\n"));
        }
        else if (ans.select == "Student") {
            const ans = await inquirer.prompt([
                {
                    name: "student2",
                    type: "input",
                    message: "Enter the Student's name you wish to engage with",
                }
            ]);
            const students = persons.student.find((val) => val.name == ans.student2);
            if (!students) {
                const name = new Student(ans.student2);
                persons.addstudent(name);
                console.log(`\nHello I am ${name.name}, Nice to meet You!`);
                console.log(chalk.green("New Student added\n"));
                console.log("Current Student List");
                console.log(persons.student);
            }
            else {
                console.log(`\nHello I am ${students.name}. Nice to see you again!`);
                console.log(chalk.red("Existing Student list\n"));
                console.log(persons.student);
            }
        }
        else if (ans.select == "Exit") {
            console.log(chalk.red("Exiting the Program"));
            process.exit();
        }
    } while (true);
};
programStart(persons);
