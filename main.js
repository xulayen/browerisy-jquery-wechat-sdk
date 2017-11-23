var unique = require('uniq');
var _w = require('jquery_wechat_sdk');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

var http = require('http-browserify');

console.log(unique(data));

var wechatMgr=_w.WeChart({
    appId: 'your appid',
    timestamp: 'your timestamp',
    nonceStr: 'your nonceStr',
    signature: 'your signature ',
    access_token:'your access_token   12323',
    debug:true
});


http.get('http://www.baidu.com/', function (res) {
    var div = document.getElementById('result');
    div.innerHTML += 'GET /beep<br>';
 
    res.on('data', function (buf) {
        div.innerHTML += buf;
    });
 
    res.on('end', function () {
        div.innerHTML += '<br>__END__';
    });
})

wechatMgr.InitWeChat();