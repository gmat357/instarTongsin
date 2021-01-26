function delete_confirm(url){
    var ISBULL = confirm("삭제하시겠습니까?");
    if(ISBULL){
        var RISBULL = confirm("정말로 삭제하시겠습니까?");
        if(RISBULL){
            location.href=url;
        }else{
           alert("취소되었습니다."); 
        }
    }else{
        alert("취소되었습니다.");
    }
}
