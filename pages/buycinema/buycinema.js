// pages/buycinema/buycinema.js
Page({
  navigateToOrder: function() {
    wx.navigateTo({
      url: `/pages/Order/Order`,
      fail:res=>{
        console.log(res);
      }
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    cinematitle:"",
    title:"",
    src: "",
    allnum: 0,
    seatstate: [],
    date: "",
    end_time: "",
    screen_method: "",
    start_time: "",
    num:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      cinematitle:wx.getStorageSync('cinematitle')
    })
    var x;
    if(options.title=="人民万岁"){
x="../../static/movie1.jpg";
    }else if(options.title=="教父"){
      x="../../static/movie2.jpg";
    }else if(options.title=="银河护卫队"){
      x="../../static/movie3.jpg";
    }else if(options.title=="扫黑英雄"){
      x="../../static/movie4.jpg";
    }
    this.setData({
      src:x,
      date: options.date,
      end_time: options.end_time,
      screen_method: options.screen_method,
      start_time: options.start_time,
      title: options.title,
      num:options.num
    })
    console.log(options);
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