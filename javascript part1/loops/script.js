/* <li>Print all numbers between -10 and 19</li>
<li>Print all even numbers between 10 and 40</li>
<li>Print all odd numbers between 300 and 333</li>
<li>Print all numbers divisible by 5 and 3 between 5 and 50</li> */

console.log("All numbers between -10 and 19");
for (var i = -10; i < 20; i++) {
    console.log(i);
}

console.log("Print all even numbers between 10 and 40");
for(var i = 10; i <= 40 ; i+=2){

        console.log(i);

}

console.log("Print all odd numbers between 300 and 333");
for(var i = 301; i<=333 ; i+=2){
    console.log(i);
}

console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
for(var i = 5; i <=50; i++){
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}

