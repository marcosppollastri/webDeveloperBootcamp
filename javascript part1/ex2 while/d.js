//print all numbers divisible by 5 AND 3 between 5 and 50

var n = 5;
while (n <= 50){
    if(n%5 === 0 && n%3 ===0){
        console.log(n);
    }
    n++;
}