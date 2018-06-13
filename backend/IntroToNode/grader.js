function average(grades){
    var promedio = 0;
    var acumulador = 0;
    for (var i = 0; i < grades.length; i++){
        acumulador = acumulador + grades[i];

    }
    // promedio = Number.parseInt(acumulador/ array.length);
    promedio= acumulador/ grades.length;
    promedio = Math.round(promedio);

    console.log(promedio);
    // return promedio;

}

var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

average(scores);
average(scores2);