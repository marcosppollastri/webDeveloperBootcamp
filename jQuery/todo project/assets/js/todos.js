/**
 * @author Marcos J. Peña Pollastri
 * @email marcos.p.pollastri@gmail.com
 * @create date 2018-06-09 11:56:59
 * @modify date 2018-06-09 11:56:59
 * @desc [description]
*/


$("#addTodo").on("click", function(){
    var input = $("#input").val();
    var newTodo = "<li><span>X</span> "+input+"</li>";
    $("ul").append(newTodo);
    $("#input").val("");
    
});

$("#input").keypress(function(event){
    if (event.which === 13){
        var input = $("#input").val();
        var newTodo = "<li><span>X</span> "+input+"</li>";
        $("ul").append(newTodo);
        $("#input").val("");
    }
});

$(document).on("click", "li", function(){
    $(this).toggleClass("completed");
});

$(document).on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});
