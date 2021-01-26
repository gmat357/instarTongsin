exports.content = (img_name)=>{
    var template = `
        <article class="content_container">
            <img src="http://byheaven4you1.cdn3.cafe24.com/instar/${img_name}.png" alt="서브페이지 이미지" />
        </article>

    `
    return template;
}