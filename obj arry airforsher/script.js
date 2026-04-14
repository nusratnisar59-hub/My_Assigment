// // q 1//object
// let name =prompt('enter name')
// let grade =prompt('enter class')
// let sub1 =Number('enter name')
// let sub2 =Number('enter name')
// let sub3 =Number('enter name')
// let obtained= (sub1+sub2+sub3);
// let persentage=Number((obtained*100)/300)


// // let students = {
//      name: name,
//      grade: grade,
//      obtained: obtained,
//      sub1: sub1,
//      sub2: sub2,
//      sub3: sub3,
//      percentage: percentage,
// }
// console.log(students)

// if (percentage===90){
//     console.log('A')
// }
// else if (percentage===70){
//     console.log('grade b')
// }
// else {
//     console.log('fail')
// }




//q 2  arry

// var cart = [1400,1300,1200,3000]
// var total= 0;
// for(var i=0; i<cart.length; i++){
//     total+=cart[i]
// }
// console.log(total)


// var cart=[1200,4600,349]
// var total=0;
// for(var i=0; i<cart.length; i++)
//     console.log(total)


//q 2
// 1. Items ki prices ka Array
const cartPrices = [500, 1200, 350, 2100, 150];

// 2. Total bill ko shuru mein 0 rakha
let totalBill = 0;

// 3. For Loop ka istemal sab prices ko jama karne ke liye
for (let i = 0; i < cartPrices.length; i++) {
    totalBill = totalBill + cartPrices[i];
}

// 4. Console par total bill dikhana
console.log("Cart Items: " + cartPrices.length);
console.log("Aapka Total Bill hai: Rs. " + totalBill);


// discount price
if (totalBill > 3000) {
    let discount = totalBill * 0.10;
    totalBill = totalBill - discount;
    console.log("Mubarak ho! 10% Discount ke baad bill: Rs. " + totalBill);
}

// //q3 form

// function log(){
//     var email=document.getElementById(email),value
//     var pass=document.getElementById("pass"),value
//     if(email=="abc@gmail"||pass=="123"){
//         console.log("you are in")
//     }
//     else{
//         console.log("ypu are cont login")
//     }
// }
// console.log(log)


//q4  product cheaker

// let name =prompt('enter name')
// let grade =prompt('enter class')
// let sub1 =Number('enter name')
// let sub2 =Number('enter name')
// let sub3 =Number('enter name')
// let obtained= (sub1+sub2+sub3);
// let persentage=Number((obtained*100)/300)

// let student={
//     name: name,
//     grade: grade,
//     obtained: obtained,
//     sub1: sub1,
//     sub2: sub2,
//     sub3: sub3,
//     percentage: percentage
// }
// console.log(students)
// if (product==90){
//     console.log('grade A')
// }
//      else if (percentage==70){
//          console.log('grade B')
//      }
//      else{
//         console.log('fail')
//      }


     //q 4
     // 1. Student Object Create Karna
// const student = {
//     name: "Ali Ahmed",
//     rollNo: 109,
//     marks: 457 // Aap yahan marks change karke test kar sakte hain
// };

// // 2. Pass/Fail Check Karne ka Function
function checkResult(studentMarks) {
    const passingMarks = 400; // Pass hone ke liye minimum marks

    if (studentMarks >= passingMarks) {
        return "Pass";
    } else {
        return "Fail";
    }
}

// 3. Result Output
const result = checkResult(student.marks);

console.log("Student Name: " + student.name);
console.log("Total Marks: " + student.marks);
console.log("Status: " + result);


//q 5
let users = ["Ahmed", "Sara", "Zain", "Dua"];
let searchName = "Sara";

if (users.includes(searchName)) {
    console.log(searchName + " found in list!");
} else {
    console.log("User not found.");
}
 


//q 6
let bill = 1000;
let isMember = true;

if (isMember) {
    bill = bill - (bill * 0.10); // 10% discount
    console.log("Discount Applied! New Total: " + bill);
} else {
    console.log("Total Bill: " + bill);
}

//q 7
function User(name, age) {
    this.name = name;
    this.age = age;
}

let user1 = new User("Bilal", 20);
let user2 = new User("Sana", 22);
console.log(user1, user2);


// q 8
function Account(owner, balance) {
    this.owner = owner;
    this.balance = balance;
    this.deposit = function(amount) {
        this.balance += amount;
    };
    this.withdraw = function(amount) {
        if(amount <= this.balance) this.balance -= amount;
        else console.log("Incomplete Balance");
    };
}

let myAcc = new Account("Ali", 1000);
myAcc.deposit(500);
console.log(myAcc.balance); // 1500

//q 9
let cars = [
    { model: "Civic", isAvailable: true },
    { model: "Corolla", isAvailable: false }
];

let availableCars = cars.filter(car => car.isAvailable === true);
console.log(availableCars);


// q 10
let doll = { name: "Barbie", dress: "Pink Dress" };

function changeDress(newDress) {
    doll.dress = newDress;
    console.log("Doll is now wearing: " + doll.dress);
}

changeDress("Blue Gown");


//q 11
let tasks = ["Reading", "Coding"];

tasks.push("Exercise"); // Add
tasks.splice(0, 1);    // Delete 1st task

console.log(tasks);


// q 12
let students = [
    { name: "Asad", marks: 90 },
    { name: "Hina", marks: 30 },
    { name: "Umer", marks: 85 }
];

let failList = students.filter(s => s.marks < 40);
let topper = students.reduce((prev, curr) => (prev.marks > curr.marks) ? prev : curr);

console.log("Topper:", topper.name);
console.log("Fails:", failList);


//q 13
let cart = [
    { item: "Phone", price: 20000, qty: 1 },
    { item: "Cover", price: 500, qty: 2 }
];

let grandTotal = cart.reduce((total, prod) => total + (prod.price * prod.qty), 0);
console.log("Total Shopping Bill: " + grandTotal);


//q 14

let movies = [
    { title: "Movie A", rating: 4.5 },
    { title: "Movie B", rating: 2.1 },
    { title: "Movie C", rating: 3.8 }
];

let recommended = movies.filter(m => m.rating > 3);
console.log(recommended);


//q 15
let attendance = ["P", "A", "P", "P", "A", "P"];

let presentCount = attendance.filter(status => status === "P").length;
console.log("Total Students Present: " + presentCount);