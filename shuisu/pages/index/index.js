//index.js
//获取应用实例
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data:{
    num:6,
    scrollTop: 0,
    floorstatus: false,
     urL: app.globalData.http_url
  },
  goTop: function (e) {
    this.setData({
      scrollTop: 0
    })
  },
  scroll: function (e) {
    if (e.detail.scrollTop > 500) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },
  getMore:function(){
    console.log(1)
  },
  onLoad: function (res) {
    var that = this;
    wx.setNavigationBarTitle({
      title: '水素网络科技有限公司',
      success: function (res) {
        // success
      }
    })
    var pmap = {};
    var url = getApp().globalData.http_url +"app.php?act=banner";
    wx.request({
      url: url,
      success:function(res){
        console.log(res)
        if (res.data.code == 1) {
          that.setData({
            banner_list: res.data.info,
          });
        } else {
          util.toast('没有数据了');
        }
      }
    })
    var case_url = getApp().globalData.http_url + "app.php?act=case";
    wx.request({
      url: case_url,
      success:function(res){
        console.log(res)
           if (res.data.code == 1) {
              that.setData({
                case_list: res.data.info,

              });
           
            } else {
                
            }
      }
    })
    var news_url = getApp().globalData.http_url +"app.php?act=news";
    wx.request({
      url: case_url,
      success: function (res) {
        console.log(res)
        if (res.data.code == 1) {
          that.setData({
            news_list: res.data.info,
          });
        } else {
            
        }
      }
    })  
  },
  

})
