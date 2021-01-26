var express = require('express');
var router = express.Router();

var default_render = require('../function/default_render');

router.get('/subpage/:query',(req,res)=>{
    var query = req.params.query;
    if(query == "sk" || query == "kt" || query == "lg"){
        res.render('index',default_render.default_render("subpage","subpage",query));
    }else{
        res.status(500).send('Not page 500 ERROR ! <a href="/">BACK</a>');
    }
})

module.exports = router;