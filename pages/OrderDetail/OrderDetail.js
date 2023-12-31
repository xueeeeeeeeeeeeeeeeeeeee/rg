// pages/OrderDetail/OrderDetail.js
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
  /**
   * 页面的初始数据
   */
  data: {
    order_info:{
      cinema:"扬戈时代影城（三门店）",
      status:"待使用",
      name:"铃芽之旅",
      num:"2张",
      type:"国语2D",
      time:"04月08日 20:25",
      site:"7号厅 4排07座 4排08座",
      theater:"7号厅",
      isfinished:false,
      ischanged:true,
      price:"78元"
    },
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