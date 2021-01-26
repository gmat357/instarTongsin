var express = require('express');
var router = express.Router();

var default_render = require('../function/default_render');

var db_setting = require('../mysql/index');
var db = db_setting.mysql();

router.get('/',(req,res)=>{
    db.query('select * from `newworld_inquiry_list`',(err, rows)=>{
        if(err) throw err;
        db.query('select * from `newworld_review_list`',(err2,rows2)=>{
            if(err2) throw err2;
            res.render('index',default_render.default_render("main","main",rows,rows2));
        });
    });
});

module.exports = router;
