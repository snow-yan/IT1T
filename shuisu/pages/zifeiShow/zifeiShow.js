// pages/zifeiShow/zifeiShow.js
var util = require('../../utils/util.js')
var WxParse = require('../../wxParse/wxParse.js');

var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var self=this;
    var uid = options.id;
    var obj = {};
    obj.id = uid;
    var zifei_url = app.globalData.http_url + 'aboutapp.php?act=saleinfo';
    util.PostAll(zifei_url, obj, function (res) {
      if (res.data.code == 200) {
        self.setData({
          title: res.data.info.title,

          content: WxParse.wxParse('content', 'html', res.data.info.content, self, 5)
        });
      
      }
    })
    // wx.request({
    //   url:zifei_url,
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})