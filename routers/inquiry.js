var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var default_render = require('../function/default_render');
var date = require('../function/date');
var db_setting = require('../mysql/index');
var db = db_setting.mysql();

var board_name = "inquiry";
var sql_table_list = "newworld_inquiry_list";

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

router.get(`/${board_name}`,(req,res)=>{
    res.render('index',default_render.default_render(board_name,board_name));
});

router.get(`/${board_name}_list`,(req,res)=>{
    db.query(`select * from ${sql_table_list} order by no desc`,(err,rows)=>{
        if(err) throw err;
        res.json(rows);
    });
});

router.get(`/${board_name}_psw/:page`,(req,res)=>{
    var page = req.params.page;
    db.query(`select * from ${sql_table_list} where No = ?`,page,(err,rows)=>{
        if(err) throw err;
        res.json(rows);
    });
});

router.get(`/${board_name}_write`,(req,res)=>{
    res.render('index',default_render.default_render(`${board_name}_write`,`${board_name}_write`));
});

router.post(`/${board_name}_writeAction`,(req,res)=>{
    var body = req.body;
    var name = body.name;
    var psw = body.psw;
    var title = body.title;
    var phone = body.phone;
    var email = body.email;
    var kinds = body.kinds;
    var text = body.text;
    var insert_date = date.date();
    var sql = {
        name:name,
        psw:psw,
        title:title,
        phone:phone,
        email:email,
        kinds:kinds,
        text:text,
        insert_date:insert_date,
    }
    db.query(`alter table ${sql_table_list} auto_increment = 1`);
    db.query(`insert into ${sql_table_list} set ?`,sql,(err, rows)=>{
        if(err) throw err;
        res.redirect(`/${board_name}_view/${rows.insertId}`);
    });
});

router.get(`/${board_name}_view/:page`,(req,res)=>{
    var page = req.params.page;
    db.query(`select * from ${sql_table_list} where No = ?`,page,(err, rows)=>{
        if(err) throw err;
        res.render('index',default_render.default_render(`${board_name}_view`,`${board_name}_view`,rows));
    });
});

router.get(`/${board_name}_update/:page`,(req,res)=>{
    var page = req.params.page;
    db.query(`select * from ${sql_table_list} where No = ?`,page,(err, rows)=>{
        if(err) throw err;
        res.render('index',default_render.default_render(`${board_name}_update`,`${board_name}_update`,rows));
    });
});

router.post(`/${board_name}_updateAction/:page`,(req,res)=>{
    var page = req.params.page;
    var body = req.body;
    var name = body.name;
    var psw = body.psw;
    var title = body.title;
    var phone = body.phone;
    var email = body.email;
    var kinds = body.kinds;
    var text = body.text;
    var insert_date = date.date();
    var sql = {
        name:name,
        psw:psw,
        title:title,
        phone:phone,
        email:email,
        kinds:kinds,
        text:text,
        insert_date:insert_date,
    }
    db.query(`update ${sql_table_list} set ? where No = ?`,[sql,page],(err, rows)=>{
        if(err) throw err;
        res.send(`
            <script>
                alert("수정되었습니다.");
                location.href="/${board_name}_view/${page}";
            </script>
        `);
    });
});

router.get(`/${board_name}_deleteAction/:page`,(req,res)=>{
    var page = req.params.page;
    db.query(`delete from ${sql_table_list} where No = ?`,page,(err,rows)=>{
        if(err) throw err;
        res.send(`
            <script>
                alert("삭제되었습니다.");
                location.href="/${board_name}";
            </script>
        `)
    });
});

module.exports = router;