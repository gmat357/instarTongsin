exports.content = (rows,rows2)=>{

    var template = `
    <main class="main_container">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../public/img/slide/sk_banner.png" alt="슬라이드 이미지"/></div>
                <div class="swiper-slide"><img src="../public/img/slide/kt_banner.png" alt="슬라이드 이미지"/></div>
                <div class="swiper-slide"><img src="../public/img/slide/lg_banner.png" alt="슬라이드 이미지"/></div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.js"></script>
        <script src="../public/js/slide.js"></script>
        <div class="three_price_box">
            <ul>
                <li>
                    <div class="top_title">
                        <img src="../public/img/main/lg_logo.png" alt="로고">
                    </div>
                    <div class="left_text">
                        <h4>인터넷 가입시<br>최대 사은품 혜택</h4>
                    </div>
                    <div class="right_text"><h3><b>최대</b>지원</h3></div>
                    <div class="price_btn_box">
                        <a href="/subpage/lg">상세요금 보기</a>
                    </div>
                </li>
                <li>
                    <div class="top_title">
                        <img src="../public/img/main/sk_logo.png" alt="로고">
                    </div>
                    <div class="left_text">
                        <h4>인터넷 가입시<br>최대 사은품 혜택</h4>
                    </div>
                    <div class="right_text"><h3><b>최대</b>지원</h3></div>
                    <div class="price_btn_box">
                        <a href="/subpage/sk">상세요금 보기</a>
                    </div>
                </li>
                <li>
                    <div class="top_title">
                        <img src="../public/img/main/kt_logo.png" alt="로고">
                    </div>
                    <div class="left_text">
                        <h4>인터넷 가입시<br>최대 사은품 혜택</h4>
                    </div>
                    <div class="right_text"><h3><b>최대</b>지원</h3></div>
                    <div class="price_btn_box">
                        <a href="/subpage/kt">상세요금 보기</a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="board_sum_box">
            <div class="left_board">
                <div class="board_title">
                    <h3>실시간 현황</h3>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>상태</td>
                            <td>고객명</td>
                            <td>신청상품</td>
                            <td>접수일</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>신청중</td>
                            <td>김○진</td>
                            <td>SK</td>
                            <td>2020-12-25</td>
                        </tr>
                        <tr>
                            <td>상담중</td>
                            <td>김○슬</td>
                            <td>lg</td>
                            <td>2020-12-28</td>
                        </tr>
                        <tr>
                            <td>개통</td>
                            <td>권○식</td>
                            <td>kt</td>
                            <td>2020-12-29</td>
                        </tr>
                        <tr>
                            <td>상담중</td>
                            <td>최○민</td>
                            <td>SK</td>
                            <td>2021-01-05</td>
                        </tr>
                        <tr>
                            <td>신청중</td>
                            <td>김○혁</td>
                            <td>lg</td>
                            <td>2021-01-06</td>
                        </tr>
                        <tr>
                            <td>개통</td>
                            <td>박○영</td>
                            <td>kt</td>
                            <td>2021-01-12</td>
                        </tr>
                        <tr>
                            <td>개통</td>
                            <td>김우진</td>
                            <td>SK</td>
                            <td>2021-01-20</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="right_board">
                <div class="board_title">
                    <h3>사은품 후기</h3>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>고객명</td>
                            <td>사은품 후기</td>
                            <td>접수일</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>신○만</td>
                            <td><p>원하는 날짜에 잘받았습니다.</p></td>
                            <td>2020-12-20</td>
                        </tr>
                        <tr>
                            <td>권○훈</td>
                            <td><p>친절한 상담과 사은품 감사합니다!!!</p></td>
                            <td>2020-12-23</td>
                        </tr>
                        <tr>
                            <td>남궁○극</td>
                            <td><p>제 상황에 맞는 상품을 찾아주셔서 감사합니다 ㅎㅎ</p></td>
                            <td>2020-12-25</td>
                        </tr>
                        <tr>
                            <td>민○슬</td>
                            <td><p>빠른설치 ~~ 굿.</p></td>
                            <td>2020-12-26</td>
                        </tr>
                        <tr>
                            <td>이○호</td>
                            <td><p>가입 잘했습니다^^</p></td>
                            <td>2021-01-02</td>
                        </tr>
                        <tr>
                            <td>이○희</td>
                            <td><p>오늘 TV설치 받기로 했습니다~ 드디어 티비가 생기네요 ㅎㅎ</p></td>
                            <td>2021-01-05</td>
                        </tr>
                        <tr>
                            <td>홍○영</td>
                            <td><p>설치 빠르고 상담원 친절합니다.</p></td>
                            <td>2021-01-10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <script src="../public/js/main.js"></script>
    </main>
    `
    return template;
}