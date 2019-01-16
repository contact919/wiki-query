 Page({

  data: {
    sub:"",
    inputVal: "",
    inputShowed: false,
  },
  inputTyping:function(e){
    var val=e.detail.value;
    var that = this;
    wx.request({
      url: 'https://douban.uieee.com/movie/search?q='+val,
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        var data = res.data;
        console.log(data);
        that.setData({
          inputVal: val,
          sub: data.subjects,
        })
      }
    });
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      sub: "",
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      sub: "",
      inputVal: ""
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
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

  },
  myFun: function () {
    var that=this;
    wx.request({
      url: 'http://127.0.0.1/test.php', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        that.setData({list:res.data})
      }
    })
  }
})