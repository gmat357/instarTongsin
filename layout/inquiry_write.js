exports.content = ()=>{
    var template = `
        <article class="board_container">
            <div class="title_box">
                <h3>글 쓰기</h3>
                <p>합리적인 요금 및 고객상담 만족 1위 많은 문의 부탁드립니다.</p>
            </div>
            <div class="form_box">
            <form method="post" action="/inquiry_writeAction">
            <p>*문의 글을 남겨주시면 기재하신 연락처로 연락드리겠습니다.</p>
                <table>
                    <thead>
                        <tr>
                            <td>제목</td>
                            <td colspan="3"><input type="text" name="title"/></td>
                        </tr>
                        <tr>
                            <td>작성자</td>
                            <td><input type="text" name="name"/></td>
                            <td>비밀번호</td>
                            <td><input type="password" name="psw"/></td>
                        </tr>
                        <tr>
                            <td>전화번호</td>
                            <td><input type="text" name="phone"/></td>
                            <td>이메일</td>
                            <td><input type="email" name="email"/></td>
                        </tr>
                        <tr>
                            <td>상담분류</td>
                            <td colspan="3">
                                <select name="kinds">
                                    <option value="가입문의">가입문의</option>
                                    <option value="상담문의">상담문의</option>
                                    <option value="AS문의">AS문의</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>내용</td>
                            <td colspan="3"><textarea name="text"></textarea></td>
                        </tr>
                    </thead>
                </table>
                <div class="btn_box">
                    <input type="submit" value="작성" class="write_btn"/>
                    <a href="/inquiry" class="cencel_btn">취소</a>
                </div>
            </form>
            </div>
        </article>
    `
    return template;
}

{/* <script src="../public/js/inquiry.js" type="text/babel" data-presets="es2015,stage-2"></script> */}