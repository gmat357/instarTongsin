exports.nav = ()=>{
    var template = `
    <nav class="nav_container">
        <div class="nav_box">
            <ul class="left_menu">
                <li><a href="/subpage/sk">SK 인터넷</a></li>
                <li><a href="/subpage/kt">KT 인터넷</a></li>
                <li><a href="/subpage/lg">LG 인터넷</a></li>
            </ul>
            <ul class="right_menu">
                <li><a href="/inquiry">문의게시판</a></li>
                <li><a href="/review">후기게시판</a></li>
            </ul>
        </div>
    </nav>
    `
    return template;
}