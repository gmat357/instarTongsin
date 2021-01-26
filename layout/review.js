exports.content = ()=>{
    var template = `
        <article class="board_container">
            <div class="title_box">
                <h3>후기게시판</h3>
                <p>합리적인 요금 및 고객상담 만족 1위 많은 문의 부탁드립니다.</p>
            </div>
            <div class="table_box">
                <table>
                    <thead>
                        <tr>
                            <td>순번</td>
                            <td>제목</td>
                            <td>작성일</td>
                            <td>작성자</td>
                        </tr>
                    </thead>
                    <tbody class="list_data">
                    </tbody>
                </table>
            </div>
            <div class="paging_box">
                <span class="prev"><img src="../public/img/paging/paging_left.png" alt="왼쪽 화살표"></span>
                <span class="next"><img src="../public/img/paging/paging_right.png" alt="오른쪽 화살표"></span>
            </div>
            <script src="../public/js/browser.js"></script>
            <script src="../public/js/review_paging.js" type="text/babel" data-presets="es2015,stage-2"></script>

            <div class="btn_box">
                <a href="/review_write" class="write_btn">작성</a>
            </div>
        </article>
    `
    return template;
}