// pages/Refund/Refund.js
Page({
  navigateToRefund: function() {
    wx.navigateTo({
      url: `/pages/Refund/Refund?order_info=${
        JSON.stringify(this.data.order_info)
      }`,
      fail:res=>{
        console.log(res);
      }
    });
  },
  redirectToindex: function() {
    wx.redirectTo({
      url: `/pages/index/index?order_info=${
        JSON.stringify(this.data.order_info)
      }`,
      fail:res=>{
        console.log(res);
      }
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    order_info:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options);
    const Obj = JSON.parse(options.order_info);
    console.log(Obj);
    this.setData({
      order_info:Obj,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})