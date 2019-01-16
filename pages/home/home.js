// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic: [
      { url: '/pages/image/sw03.png'},
      { url: '/pages/image/sw00.png'},
      { url: '/pages/image/sw04.png'},
      { url: '/pages/image/sw01.png'},
      { url: '/pages/image/sw02.png'},
    ] 
  },
  openAlert: function () {
    wx.showModal({
      content: 'Hi,Iam LiXiang. Email:contact919@163.com',
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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