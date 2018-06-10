/**
 * @author Marcos J. Peña Pollastri
 * @email marcos.p.pollastri@gmail.com
 * @create date 2018-06-09 11:56:59
 * @modify date 2018-06-09 11:56:59
 * @desc [description]
*/


$("#addTodo").on("click", function(){
    var input = $("#input").val();
    var newTodo = "<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+input+"</li>";
    $("ul").append(newTodo);
    $("#input").val("");
    
});

$("#input").keypress(function(event){
    if (event.which === 13){
        var input = $("#input").val();
        var newTodo = "<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+input+"</li>";
        $("ul").append(newTodo);
        $("#input").val("");
    }
});

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});
