// pages/Mine/Mine.js
Page({
  data: {
    
  },
  navigateToOrder: function() {
    wx.navigateTo({
      url: '../Order/Order',
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        console.log("success");
      },
      fail: function(res) {
        // 通过eventChannel向被打开页面传送数据
        console.log(res);
      }
    });
  },
  onLoad(options) {

  },
  onReady() {

  },
  onShow() {

  },
  onHide() {

  },
  onUnload() {

  },
  onPullDownRefresh() {

  },
  onReachBottom() {

  },
})