'use strict'

var Koa = require('koa');
var wechat = require('./wechat/g');

var config = {
  wechat: {
    appId: 'sampleID',
    appSecret: 'sampleSecret',
    token: 'sampleToken'
  }
};

var app = new Koa();

app.use(wechat(config.wechat));

app.listen(3002);

console.log('Listening: 3002');
