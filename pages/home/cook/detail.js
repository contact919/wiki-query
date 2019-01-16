// pages/log/cook/detail.js
Page({

  data: {
    title: "加载中...",
    sub: "",
    loading:1,
    list: [
      {
        id: 'form',
        name: '更多做法',
        open: false,
      }
    ],
    name:'',
    pages: [],  
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  //当页面加载好执行
  onLoad: function (event) {
    console.log(event);
    var that = this;
    wx.request({
      url: 'https://way.jd.com/jisuapi/detail?id='+event.id+'&appkey=6569d31133822d7387a608b0555ace54',
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 这个不是默认值
      },
      success: function (res) {
        var data = res.data;
        console.log(data);
        that.setData({
          loading: 0,
          title: data.title,
          sub: data.result.result,
          name: data.result.result.name,
        })
      }
    });
    wx.request({
      url: 'https://way.jd.com/jisuapi/search?keyword='+event.val+'&num=10&appkey=6569d31133822d7387a608b0555ace54',
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        var data = res.data;
        console.log(data);
        that.setData({
          pages: data.result.result.list,
        });
      }
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})