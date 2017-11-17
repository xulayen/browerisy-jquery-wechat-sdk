var unique = require('uniq');

var _w = require('jquery_wechat_sdk');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));

var wechatMgr=_w.WeChart({
    appId: 'your appid',
    timestamp: 'your timestamp',
    nonceStr: 'your nonceStr',
    signature: 'your signature ',
    access_token:'your access_token',
    debug:true
});

wechatMgr.InitWeChat();