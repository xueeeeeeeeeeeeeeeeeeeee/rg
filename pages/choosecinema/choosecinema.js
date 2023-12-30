// pages/choosecinema/choosecinema.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: [],
    wanttosee: 0,
    allcinema:[{ title:"漫游未来影城（临平店）",
    price:"￥32.8起",
    address:"临平区东湖南路59号和合财富中心3层",
    distance:"1.1km",
    latest:"近期场次:23:40"
   }
 ,{ title:"完美世界影城杭州铂金店",
    price:"￥35.9起",
    address:"临平区河南球路108号临平新天地15号楼",
    distance:"1.2km",
    latest:"近期场次:13:40 15:10 17:50 18:40"
   }
 ,{ title:"博纳国际影城临平IMAX店",
    price:"￥50起",
    address:"临平区南菀街道世纪大道1号临平银泰城4层",
    distance:"1.7km",
    latest:"近期场次:15:55 18:00 18:25 20:15"
   }
 ,{ title:"博雅国际影城(万宝城店)",
    price:"￥39.9起",
    address:"临平区荷禹路105号万宝城A区6F",
    distance:"2.0km",
    latest:"近期场次:19:50 23:40"
   }
 ,{ title:"博雅国际影城(万宝城二店)",
    price:"￥49.9起",
    address:"临平区荷禹路105号万宝城A区7F",
    distance:"2.1km",
    latest:"近期场次:12:45 19:50 23:40"
   }
 ,{ title:"新博纳国际影城",
    price:"￥39.9起",
    address:"临平区南菀街道世纪大道1号临平银泰城4层",
    distance:"1.5km",
    latest:"近期场次:15:55 18:00 18:25"
   }
 ,{ title:"西瓜皮影城（临平店）",
    price:"￥28.8起",
    address:"临平区东湖南路59号和合财富中心7层",
    distance:"1.1km",
    latest:"近期场次:19:50 23:40"
   }
 ,{ title:"新世纪影城",
    price:"￥40.9起",
    address:"临平区河南球路108号临平新天地23号楼",
    distance:"1.7km",
    latest:"近期场次:13:40 18:40"
   }	
 ,{ title:"城中城影院",
    price:"￥45.9起",
    address:"临平区南菀街道世纪大道1号临平银泰城9层",
    distance:"1.4km",
    latest:"近期场次:17:50 18:40"
   }
 ,{ title:"新杭州影院",
    price:"￥28.8起",
    address:"临平区东湖南路59号和合财富中心3层",
    distance:"1.8km",
    latest:"近期场次:12:20 14:10"
   }]
  },
  onLoad() {
    this.getDateStr(null, 1);
    var x = Array();
    for (var i = 0; i < 8; i++) {
     var y= this.getDateStr(null, i).split("-");
     var z=y[1]+"月"+y[2]+"日";
     console.log(y);
      x.push(z)
    }

    this.setData({
      date: x
    })
  },
  clickwanttosee() {
    this.setData({
      wanttosee: 1
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
  gotochoosetime(e){
    console.log(e);
    wx.navigateTo({
      url: `/pages/choosetime/choosetime?title=${
        e.currentTarget.dataset.item.title
      }&address=${e.currentTarget.dataset.item.address}`
    });
  },

})