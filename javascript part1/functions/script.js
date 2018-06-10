function isEven(n) {
    var flag;
    if (n % 2 === 0) {
        flag = true;
    }else{
        flag = false;
    }
    return flag;
    
}

function factorial(n) {
    var fac = 1;
    if (n !== 0) {
        while(n !== 0){
            fac = fac * n;
            n--;
        }
    }

    return fac
    
}
var hola = "hola mundo";


function kebabToSnake(msj){
    var newmsj = msj.replace('-','_');
    return newmsj;
}