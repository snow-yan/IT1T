// pages/zixunShow/zixunShow.js
var util = require('../../utils/util.js')
var WxParse = require('../../wxParse/wxParse.js');
var app = getApp();

Page({

  data: {
  
  },

  onLoad: function (options) {
    var self=this;
    console.log(options.id)
    var url = app.globalData.http_url +'aboutapp.php?act=newsdetail'
    util.PostAll(url,options,function(res){
      console.log(res)
      self.setData({
        content: WxParse.wxParse('content', 'html', res.data, self, 5)          
      })
    })
  },

})