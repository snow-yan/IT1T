//index.js
//获取应用实例
var util = require('../../utils/util.js')
var app = getApp()
var page=0;
var size=10;
var types ="first";
var id=1;
var GetList = function (that) {
  var pmap = {};
  pmap.id = id;
  pmap.page = page;
  pmap.size = size;
  var url = getApp().globalData.http_url + "aboutapp.php?act=caseinfos";
  util.PostAll(url, pmap, function (res) {
    console.log(res)
    if (res.data.code == 1) {
      if (types =='first')
      {
        that.setData({
          case_list: res.data.info,
        });
      }else
      {
        that.setData({
          case_list: that.data.case_list.concat(res.data.info),
        });
      }
    } else {
      util.toast(res.data.msg);
    }
  });
}
Page({
  data: {
    case_list:[],
    scrollTop: 0, 
    scrollHeight: 0 
  },
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({ 
      success: function (res) { 
        that.setData({ 
          scrollHeight: res.windowHeight 
        }); 
      }
    });
    id = options.id;
    GetList(that);
  },
  /*
  scroll: function (event) { 
    this.setData({ 
      scrollTop: event.detail.scrollTop 
      }); 
      }, 
  */
  //下拉刷新
  refresh: function () {
    var that = this;
    page = 0;
    types = "first";
    GetList(that);
  },
  loadMore: function () {
    var that = this;
    types="next";
    page=page+1;
    GetList(that);
  },
})
