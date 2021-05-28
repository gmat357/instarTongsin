var express = require('express');
var app = express();
var path = require('path');

var indexRouter = require('./routers/index');
var inquiryRouter = require('./routers/inquiry');
var reviewRouter = require('./routers/review');
var subpageRouter = require('./routers/subpage');

app.use('/public',express.static(path.join(__dirname,"public")));

app.set('views',path.join(__dirname,"views"));
app.set('view engine', 'ejs');

//  route
app.use('/',indexRouter);
app.get('/inquiry',inquiryRouter);
app.get('/inquiry_write',inquiryRouter);
app.post('/inquiry_writeAction',inquiryRouter);
app.get('/inquiry_view/:page',inquiryRouter);
app.get('/inquiry_update/:page',inquiryRouter);
app.post('/inquiry_updateAction/:page',inquiryRouter);
app.get('/inquiry_deleteAction/:page',inquiryRouter);

app.get('/review',reviewRouter);
app.get('/review_write',reviewRouter);
app.post('/review_writeAction',reviewRouter);
app.get('/review_view/:page',reviewRouter);
app.get('/review_update/:page',reviewRouter);
app.post('/review_updateAction/:page',reviewRouter);
app.get('/review_deleteAction/:page',reviewRouter);

app.get('/subpage/:id',subpageRouter);

//  ajax
app.get('/inquiry_list',inquiryRouter);
app.get('/inquiry_psw/:page',inquiryRouter);
app.get('/review_list',reviewRouter);
app.get('/review_psw/:page',reviewRouter);
app.get('/robots.txt',(req,res)=>{
    res.sendFile(path.join(__dirname,"/robots.txt"));
})

const port = 8002;

app.use(function(req,res){
    res.status(500).send('Not page 500 Error ! <a href="/">BACK</a>');
});

app.listen(port,()=>{console.log(port+" newworld server on")});

