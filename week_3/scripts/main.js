let firstName = "Ryan";
let lastName = "Price";
let iNumber = "123456789";

document.getElementById("output1").textContent = firstName + " " + lastName + " " + iNumber;
document.getElementById("output1a").textContent = "firstName + \" \" + lastName + \" \" + iNumber";

let student = {
    First: "Nichole",
    Last: "Price", 
    INum: "987654321",

    sayHello() {
        document.getElementById("output5").textContent = 'Hey, ' + this.First;
    }
};

document.getElementById("output2").textContent = student.First + " " + student.Last + " " + student.INum;
document.getElementById("output2a").textContent = "student.First + \" \" + student.Last + \" \" + student.INum";""

document.getElementById("output3").textContent = "student.sayHello()";
student.sayHello();

document.querySelector('#functional').addEventListener("click", function(){
    alert("You clicked on the heading!")
    });