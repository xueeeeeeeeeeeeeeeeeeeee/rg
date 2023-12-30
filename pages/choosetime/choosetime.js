// pages/choosetime/choosetime.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowdateindex: 0,
    datestyle: ["selectdate", "dateitem", "dateitem", "dateitem", "dateitem", "dateitem", "dateitem", "dateitem"],
    date: [],
    nowindex: 0,
    moviestyle: ["movieselect", "movieitem", "movieitem", "movieitem"],
    title: "",
    address: "",
    movies: [{
      src: "../../static/movie1.jpg",
      title: "人民万岁",
      grade: "10.0分",
      info: "107分钟|红色|毛泽东，邓小平"

    }, {
      src: "../../static/movie2.jpg",
      title: "教父",
      grade: "9.2分",
      info: "107分钟|黑帮|周俊杰，展博开"
    }, {
      src: "../../static/movie3.jpg",
      title: "银河护卫队",
      grade: "9.0分",
      info: "107分钟|黑帮|无垠杰，叶尘心"
    }, {
      src: "../../static/movie4.jpg",
      title: "扫黑英雄",
      grade: "9.6分",
      info: "107分钟|黑帮|无垠杰，掉"
    }],
    movietime: [{
        start_time: "11:20",

        end_time: "14:17散场",

        screen_method: "国语2D",

        hall_name: "6号杜比全景声厅",

        price: "35.9",

        button: "特惠"
      },
      {
        start_time: "13:00",

        end_time: "14.57散场",

        screen_method: "国语2D",

        hall_name: "6号杜比全景声厅",

        price: "35.9",

        button: "特惠"
      },
      {
        start_time: "15:10",

        end_time: "17.07散场",

        screen_method: "国语2D",

        hall_name: "6号杜比全景声厅",

        price: "35.9",

        button: "特惠"
      },
      {
        start_time: "17:50",

        end_time: "19.47散场",

        screen_method: "国语2D",

        hall_name: "2号激光厅",

        price: "25.8",

        button: "特惠"
      },
      {
        start_time: "18:40",

        end_time: "20.37散场",

        screen_method: "国语2D",

        hall_name: "3号 VIP尊享厅",

        price: "25.8",

        button: "特惠"
      },
      {
        start_time: "19:30",

        end_time: "21.27散场",

        screen_method: "国语2D",

        hall_name: "6号杜比全景声厅",

        price: "25.8",

        button: "特惠"
      },
      {
        start_time: "20:50",

        end_time: "21.27散场",

        screen_method: "国语2D",

        hall_name: "3号 VIP尊享厅",

        price: "25.8",

        button: "特惠"
      },
      {
        start_time: "23:00",

        end_time: "00.57散场",

        screen_method: "国语2D",

        hall_name: "3号 VIP尊享厅",

        price: "35.9",

        button: "特惠"
      }
    ],
    boxLeft: 40,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options);
    this.setData({
      title: options.title,
      address: options.address
    })
    this.getDateStr(null, 1);
    var x = Array();
    for (var i = 0; i < 8; i++) {
      var y = this.getDateStr(null, i).split("-");
      var z = y[1] + "月" + y[2] + "日";
      console.log(y);
      x.push(z)
    }

    this.setData({
      date: x
    })
  },
  gotoseats(e) {
    wx.setStorageSync('cinematitle', this.data.title)
    console.log(e.currentTarget.dataset.item);
    wx.navigateTo({
      url: `/pages/chooseseats/chooseseats?start_time=${
        e.currentTarget.dataset.item.start_time
      }&end_time=${e.currentTarget.dataset.item.end_time}&screen_method=${
        e.currentTarget.dataset.item.screen_method
      }&date=${this.data.date[this.data.nowdateindex]}&title=${ this.data.movies[this.data.nowindex].title}`
    });
  },
  moveBox(e) {
    console.log(e.currentTarget.dataset.index);
    let that = this;
    if (e.currentTarget.dataset.index > this.data.nowindex) {
      var x = e.detail.x;
      this.setData({
        boxLeft: that.data.boxLeft - 27,
      })
    } else if (e.currentTarget.dataset.index < this.data.nowindex) {
      var x = e.detail.x;
      this.setData({
        boxLeft: that.data.boxLeft + 27,
      })
    }
    this.setData({
      nowindex: e.currentTarget.dataset.index
    })
    var x = this.data.moviestyle;
    for (var i = 0; i < this.data.moviestyle.length; i++) {

      if (this.data.moviestyle[i] == "movieselect") {
        x[i] = "movieitem";
        x[e.currentTarget.dataset.index] = "movieselect";
        break;
      }
    }
    this.setData({
      moviestyle: x
    })
  },
  choosedate(e) {
    var x = this.data.datestyle;
    for (var i = 0; i < this.data.datestyle.length; i++) {

      if (this.data.datestyle[i] == "selectdate") {
        x[i] = "dateitem";
        x[e.currentTarget.dataset.index] = "selectdate";
        break;
      }
    }
    this.setData({
      datestyle: x,
      nowdateindex: e.currentTarget.dataset.index
    })
  },
  getDateStr: function (today, addDayCount) {
    let date;
    if (today) {
      date = new Date(today);
    } else {
      date = new Date();
    }
    date.setDate(date.getDate() + addDayCount); //获取AddDayCount天后的日期 
    let y = date.getFullYear();
    let m = date.getMonth() + 1; //获取当前月份的日期 
    let d = date.getDate();
    if (m < 10) {
      m = '0' + m;
    };
    if (d < 10) {
      d = '0' + d;
    };
    console.log(y + "-" + m + "-" + d)
    return y + "-" + m + "-" + d;
  },
})