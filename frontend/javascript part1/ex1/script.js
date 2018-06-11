// var name = prompt("What is your name?");
// var lastname = prompt("What is your last name?");
var age = prompt("How old are you?");
// console.log("Your name is "+name+" "+lastname+"\nYou are "+age+" years old");
if(age < 0){
    console.log("ERROR!");
}
else{
    if (age == 21){
        console.log("Happy 21st birthday!");
    }
    if (age % 2 != 0){
        console.log("Your age is odd!");
    }
    if (Number.isInteger(Math.sqrt(age))){
        console.log("Your age is a perfect square!");
    }
}
