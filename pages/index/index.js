// pages/index/index.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({
  data: {
    title: "",
    sub: "",
    now: "",
    next: "",
    navbar: ['正在热映', '即将上映', 'TOP100'],
    currentTab: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    loading:1,
  },
  navbarTap: function (e) {
    var that = this;
    console.log(e);
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      currentTab: e.currentTarget.id
    });
    if (that.data.currentTab == 2) {
      if(!that.data.sub){
        that.setData({
          loading: 1,
        })
      };      
      wx.request({
        url: 'https://douban.uieee.com/v2/movie/top250?start=0&count=100',
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
            sub: data.subjects,
          })
        }
      });
    };
    if (that.data.currentTab == 0) {
      if (!that.data.now) {
        that.setData({
          loading: 1,
        })
      }
      wx.request({
        url: 'https://douban.uieee.com/v2/movie/in_theaters',
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
            now: data.subjects,
          })
        }
      });
    };
    if (that.data.currentTab == 1) {
      if(!that.data.next){
        that.setData({
          loading: 1,
        })
      };
      wx.request({
        url: 'https://douban.uieee.com/v2/movie/coming_soon',
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
            next: data.subjects,
          })           
        }
      });
    }
  },
  //当页面加载好执行
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
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
          now: data.subjects,
        })
      }
    });
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.navbar.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.navbar.length * that.data.currentTab
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
