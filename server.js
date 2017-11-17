/**
 * 加载模块
 * @type {*|exports}
 */
var express = require('express');
var http = require('http');
var app = express();


/**
 *  加载ejs模块
 */
var ejs = require('ejs');



/**
 * 设置html模版
 */
app.engine('.html', ejs.__express);
app.set('view engine', 'html');


/**
 * 设置当前静态目录为网站根目录
 * */
app.use(express.static(__dirname));


/**
 * 启动网站，端口为3000的
 */
http.createServer(app).listen(3000);
