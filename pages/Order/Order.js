// pages/Order/Order.js
Page({
  navigateToOrderDetail: function(e) {
    console.log(e);
    wx.navigateTo({
      url: `/pages/OrderDetail/OrderDetail?order_info=${
      JSON.stringify( e.currentTarget.dataset.item)
      }`,
      fail:res=>{
        console.log(res);
      }
    });
  },
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
  navigateTochoosecinema: function() {
    wx.navigateTo({
      url: `/pages/choosecinema/choosecinema`,
      fail:res=>{
        console.log(res);
      }
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    order_info:[{
      cinema:"扬戈时代影城（三门店）",
      status:"待使用",
      name:"铃芽之旅",
      num:"2张",
      type:"国语2D",
      time:"04月08日 20:25",
      site:"4排07座 4排08座",
      theater:"7号厅",
      iscanceled:false,
      isfinished:false,
      ischanged:true,
      price:"78元"
    },{
      cinema:"扬戈时代影城（三门店）",
      status:"已改签 退款成功",
      name:"铃芽之旅",
      num:"2张",
      type:"国语2D",
      time:"04月08日 19:20",
      site:"4排07座 4排08座",
      theater:"7号厅",
      iscanceled:true,
      isfinished:false,
      ischanged:false,
      price:"78元"
    },
    {
      cinema:"横店电影城(博雅城店)",
      status:"已完成",
      name:"航海王: 红发歌姬",
      num:"1张",
      type:"原版2D",
      time:"2022年12月02日 18:50",
      site:"8排9座",
      theater:"5号激光厅(行程卡带星不可进入)",
      iscanceled:false,
      isfinished:true,
      ischanged:false,
      price:"39元"
    },]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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