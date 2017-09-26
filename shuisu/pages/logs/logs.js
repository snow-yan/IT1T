//logs.js
var util = require('../../utils/util.js')
var app = getApp()

Page({
  data: {
    list:1,
    sortIndex:1,
    sortfilter:1,
    logs: [],
    urL: app.globalData.http_url

  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  click_cx:function(e){
    var v=this.data;
    var id=e.currentTarget.dataset.id;
    this.setData({
      sortIndex:id
    })
    console.log(v.sortIndex,id)
    console.log(e)
    if (v.sortfilter==id){
      this.setData({  
        sortfilter: 1
      })
    }else{
      this.setData({
        sortfilter: id
      })
    }
   

  },
 
  
})
