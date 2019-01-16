// pages/home/robot/robot.js
var app = getApp();
var chatListData = [];
Page({
  /**
   * 页面的初始数据
   */
  data: {
    text: '',
    textcop: '',
    chatList:'',
    userInfo: {}  
  },
  sendChat:function(e){
    var that = this;
    console.log(e);
    let word = e.detail.value.ask_word ? e.detail.value.ask_word : e.detail.value;//支持两种提交方式
    that.addChat(word, 'r','');
      if (word.hi) {
        wx.request({
          url: 'https://way.jd.com/turing/turing?info=' + word.hi + '&loc=北京市海淀区&userid=2227&appkey=6569d31133822d7387a608b0555ace54',
          data: {},
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 这个不是默认值
          },
          success: function (res) {
            var data = res.data;
            console.log(data);
            that.addChat(data.result.text, 'l', data.result.url);
            that.setData({
              text: "",
            })
          }
        });
      } else {
        that.openAlert();
      }
  },
  openAlert: function () {
    wx.showModal({
      content: '输入内容不能为空!',
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    });
  },
  //新增聊天列表
  addChat: function (word, orientation,url) {
    var that = this;
    let ch = { 'text': word, 'time': new Date().getTime(), 'orientation': orientation, 'url': url };
    chatListData.push(ch);
    that.setData({
      chatList: chatListData
    });
    console.log(that.data.chatList);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据  
    app.getUserInfo(function (userInfo) {
      //更新数据  
      that.setData({
        userInfo: userInfo
      })
    })  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
      //问候语
      setTimeout(function () {
        that.addChat('你好啊,朋友！', 'l');
      }, 1000);
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