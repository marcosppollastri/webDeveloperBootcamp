
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
