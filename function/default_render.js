exports.default_render = (content_name,css_name,rows,rows2)=>{
    var header = require('../layout/header');
    var nav = require('../layout/nav');
    var content = require(`../layout/${content_name}`);
    var footer = require('../layout/footer');

    var render = {
        header:header.header(),
        nav:nav.nav(),
        content:content.content(rows,rows2),
        footer:footer.footer(),
        css:css_name
    }
    return render;
}