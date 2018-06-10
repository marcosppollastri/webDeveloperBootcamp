var test = [1,2,3,4,5,6,7];
var uniform = [1,1,1,1,1,1]
function printReverse(array) {
    for (var i = array.length-1; i > -1; i--) {
        console.log(array[i]);
        
    }
}

function isUniform(array) {
    var flag = true;
    var token = array[0];
    array.forEach(function(element, i){
        if (i === 0) {
            token = element;
        }else{
            if (element !== token) {
                flag = false;
            }
        }
    });
    return flag;
    
}

function sumArray(array) {
    var acum = 0; 
    array.forEach(function(number){
        acum+=number;
    });
    return acum;
    
}

function max(array) {
    var max;
    array.forEach(function(number, i){
        if (i === 0) {
            max = number;
        } else{
            if (number > max) {
                max = number;
            }
        }
    });
    return max;
    
}