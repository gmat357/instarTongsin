$(function(){
    var left_board_list = $(".left_board > table > tbody");

    window.setInterval(function(){
        left_board_list.animate({
            "margin-top":-45+"px",
        },"slow",function(){
            left_board_list.children("tr:first").appendTo($(this));
            left_board_list.removeAttr("style");
        })
    },2000);

    var right_board_list = $(".right_board > table > tbody");

        window.setInterval(function(){
            right_board_list.animate({
                "margin-top":-45+"px",
            },"slow",function(){
                right_board_list.children("tr:first").appendTo($(this));
                right_board_list.removeAttr("style");
            })
        },2300);
});