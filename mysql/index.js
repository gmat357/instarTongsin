exports.mysql = ()=>{
    var mysql = require('mysql');
    var db = mysql.createConnection({
        host:"instar.cafe24app.com",
        user:"speed7223",
        password:"aq1sw2de3*",
        database:"speed7223"
    });

    return db;
}