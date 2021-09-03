// Basic Types
var id = 1;
var username = "John";
var registered = true;
var myVar; // Avoid this.
// Arrays
var lotteryNumbers = [1, 2, 3, 4];
// lotteryNumbers.push('test'); <- this won't work
lotteryNumbers.push(5);
// Tuples
var personTuple = [1, "Jack", true];
var employees = [
    [1, "Ivan"],
    [2, "George"],
    [3, "Dejan"],
];
// Union
var unionId = true;
// Enum
var Actions;
(function (Actions) {
    Actions["FORWARD"] = "W";
    Actions["BACKWARD"] = "S";
    Actions["LEFT"] = "A";
    Actions["RIGHT"] = "D";
})(Actions || (Actions = {}));
// By default, the values here are 0, 1, 2, 3 etc. But you can set them in the enum.
console.log(Actions.FORWARD);
console.log(Actions.LEFT);
var user = {
    id: 1,
    name: "John"
};
var user2 = {
    id: 2,
    name: "Brad"
};
// Type Assertion
var customerId = 1;
var cid = customerId;
var custId = customerId;
// Functions
function addNum(firstNum, secondNum) {
    if (secondNum === void 0) { secondNum = 0; }
    return firstNum + " + " + secondNum + " = " + (firstNum + secondNum);
}
function logger(message) {
    console.log(message);
}
addNum(2);
var quickMessage = {
    id: 1,
    text: "Lorem ipsum!"
};
var addTwoNumbers = function (firstNum, secondNum) { return firstNum + secondNum; };
var multTwoNumbers = function (first, second) {
    return first * second;
};
// Interface Example
function registerWithEmailAndPassword(creds) {
    var email = creds.email, password = creds.password; // Objects can be destructured easier with this.
}
// Classes
var Person = /** @class */ (function () {
    function Person(name, status) {
        this.id = 1;
        this.name = name;
        this.status = status;
    }
    Person.prototype.getPersonId = function () {
        return this.id;
    };
    return Person;
}());
var student = new Person("John", false);
console.log(student.getPersonId());
