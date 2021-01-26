exports.content = (rows)=>{
    var template = `
        <article class="board_container">
            <div class="title_box">
                <h3>글 보기</h3>
                <p>합리적인 요금 및 고객상담 만족 1위 많은 문의 부탁드립니다.</p>
            </div>
            <div class="form_box">
            <form>
            <p>*문의 글을 남겨주시면 기재하신 연락처로 연락드리겠습니다.</p>
                <table>
                    <thead>
                        <tr>
                            <td>작성자</td>
                            <td><input type="text" value="${rows[0].name}" readonly/></td>
                        </tr>
                        <tr>
                            <td>비밀번호</td>
                            <td><input type="password" value="${rows[0].psw}" readonly/></td>
                        </tr>
                        <tr>
                            <td>내용</td>
                            <td><textarea readonly>${rows[0].text}</textarea></td>
                        </tr>
                    </thead>
                </table>
                <div class="btn_box">
                    <a href="/review_update/${rows[0].No}" class="update_btn">수정</a>
                    <span class="delete_btn" onclick="delete_confirm('/review_deleteAction/${rows[0].No}')">삭제</span>
                    <a href="/review" class="cencel_btn">목록</a>
                </div>
                <script src="../public/js/review_view.js"></script>
            </form>
            </div>
        </article>
    `
    return template;
}