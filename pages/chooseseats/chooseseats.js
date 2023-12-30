// pages/chooseseats/chooseseats.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnstate: "请先选座",
    allnum: 0,
    seatstate: [],
    date: "",
    end_time: "",
    screen_method: "",
    start_time: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options);
    this.setData({
      date: options.date,
      end_time: options.end_time.slice(0, -2),
      screen_method: options.screen_method,
      start_time: options.start_time,
      title: options.title,
    })
    var x = [];
    for (var i = 0; i < 80; i++) {
      x.push("normal");
    }
    for (var i = 0; i < 70; i++) {
      x.push("glod");
    }
    for (var i = 0; i < 10; i++) {
      x.push("unchoose");
    }
    this.setData({
      seatstate: x
    })
  },
  chooseseat(e) {
    let that = this;
    console.log(e.currentTarget.dataset.index);

    var x = this.data.seatstate;
    if (x[e.currentTarget.dataset.index].slice(-7) != " choose" && x[e.currentTarget.dataset.index] != "unchoose") {
      if (this.data.allnum < 6) {
        console.log(this.data.allnum);
        x[e.currentTarget.dataset.index] = x[e.currentTarget.dataset.index] + " choose"
        this.setData({
          allnum: that.data.allnum + 1,
        })
      } else {
        wx.showToast({
          title: '只能选6个座位',
          icon: 'none',
          duration: 2000
        })
      }

    } else if (x[e.currentTarget.dataset.index] != "unchoose") {
      this.setData({
        allnum: that.data.allnum - 1,
      })
      x[e.currentTarget.dataset.index] = x[e.currentTarget.dataset.index].slice(0, -7);
    }
    this.setData({

      seatstate: x
    })
    if (this.data.allnum == 0) {
      this.setData({
        btnstate: "请先选座"
      })
    } else {
      this.setData({
        btnstate: "确认订单"
      })
    }


  },
  gotobuy() {
    if (this.data.btnstate == "确认订单") {
      wx.navigateTo({
        url: `/pages/buycinema/buycinema?start_time=${
        this.data.start_time
        }&end_time=${this.data.end_time}&screen_method=${
          this.data.screen_method
        }&date=${ this.data.date}&title=${this.data.title}&num=${this.data.allnum}`
      });
    }

  },
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