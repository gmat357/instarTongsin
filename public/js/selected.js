$(function(){
    var select_list = $(".select_list");
    var select_option = $(".select_list > option");
    for(var i = 0; i < select_option.length; i++){
        if(select_option.eq(i).attr('value') == select_list.attr('value')){
            select_option.eq(i).prop("selected",true);
        }else{
            continue;
        }
    }
});