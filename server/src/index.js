var AK = 'PqLfYe68_HKhnCL0qszXD4xRFj57U8cnBASJN0x7'
var SK = 'KFjdvN4aOmqQG_lV2YViY7tHPZOKROA8cmK7J5CH'
var bucketname = 'no320'


var qiniu = require('qiniu');
var path = require('path');

qiniu.conf.ACCESS_KEY = AK
qiniu.conf.SECRET_KEY = SK



var assert = require("assert")


function uptoken(bucketname) {
  var putPolicy = new qiniu.rs.PutPolicy(bucketname);
  //putPolicy.callbackUrl = callbackUrl;
  //putPolicy.callbackBody = callbackBody;
  //putPolicy.returnUrl = returnUrl;
  //putPolicy.returnBody = returnBody;
  //putPolicy.asyncOps = asyncOps;
  //putPolicy.expires = expires;

  return putPolicy.token();
}


function uploadFile(localFile, key, uptoken) {
  var extra = new qiniu.io.PutExtra();
  //extra.params = params;
  //extra.mimeType = mimeType;
  //extra.crc32 = crc32;
  //extra.checkCrc = checkCrc;

  qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
    if(!err) {
      console.log('上传成功， 处理返回值');
      console.log(ret.key, ret.hash);
      // ret.key & ret.hash

    } else {
      console.log('上传失败， 处理返回代码');
      console.log(err);

      // http://developer.qiniu.com/docs/v6/api/reference/codes.html
    }
  });
}



var token = uptoken(bucketname);

var file = path.join(__dirname, 'index.js');

uploadFile(file,'sss/a/s/d/',token);
