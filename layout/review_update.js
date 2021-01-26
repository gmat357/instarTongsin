exports.content = (rows)=>{
    var template = `
        <article class="board_container">
            <div class="title_box">
                <h3>글 수정</h3>
                <p>합리적인 요금 및 고객상담 만족 1위 많은 문의 부탁드립니다.</p>
            </div>
            <div class="form_box">
            <form method="post" action="/review_updateAction/${rows[0].No}">
            <p>*문의 글을 남겨주시면 기재하신 연락처로 연락드리겠습니다.</p>
                <table>
                    <thead>
                        <tr>
                            <td>작성자</td>
                            <td><input type="text" name="name" value="${rows[0].name}"/></td>
                        </tr>
                        <tr>
                            <td>비밀번호</td>
                            <td><input type="password" name="psw" value="${rows[0].psw}"/></td>
                        </tr>
                        <tr>
                            <td>내용</td>
                            <td><textarea name="text">${rows[0].text}</textarea></td>
                        </tr>
                    </thead>
                </table>
                <div class="btn_box">
                    <input type="submit" value="작성" class="write_btn"/>
                    <a href="/review" class="cencel_btn">취소</a>
                </div>
            </form>
            </div>
        </article>
    `
    return template;
}