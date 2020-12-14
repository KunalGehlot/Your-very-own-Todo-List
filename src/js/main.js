$("ul").on("click", "li", function () {
    $(this).toggleClass("marked");
});

$("ul").on("click", "span", function (e) {
    $(this).parent().fadeOut(250, function () {
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type = 'text']").keypress(function (e) {
    if (e.which == 13) {
        var todo = $(this).val();
        $(this).val("");
        console.log(todo);

        if (todo) {
            $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todo + "</li>");
        }
    }
});

$(".fa-plus").on("click", function () {
    $("input[type = 'text']").fadeToggle();
});