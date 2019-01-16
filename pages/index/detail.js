// pages/index/detail.js
Page({
  data: {
    title: "加载中...",
    sub: "",
    loading: 1,
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
      url: 'https://douban.uieee.com/v2/movie/subject/' + event.id,
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        var data = res.data;
        console.log(data);
        that.setData({
          loading: 0,
          title: data.title,
          sub: data,
        })
      }
    });
  },
})
