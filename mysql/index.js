exports.mysql = ()=>{
    var mysql = require('mysql');
    var db = mysql.createConnection({
        host:"woojinapp.cafe24app.com",
        user:"gmas357",
        password:"skdlwlfldk357",
        database:"gmas357"
    });

    return db;
}