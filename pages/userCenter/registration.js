// registration.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userName:'',
      userPassword:"",
      passwordCheck:""
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

  userNameInput:function(e){
    this.setData({
      userName : e.detail.value
    })
  },

  userPasswordInput:function(e){
    this.setData({
      userPassword : e.detail.value
    })
  },

  passwordCheckInput:function(e){
    this.setData({
      passwordCheck : e.detail.value
    })
  },

  checkPasswordSame: function () {
    console.log("chekcing password same");
    if (this.data.userPassword == this.data.passwordCheck){
      return true;
    }
    else{
      return false;
    }
  },

  bind_register_submission: function () {
    console.log("user register");

    //check for validity of the userName
    if (this.data.userName.length < 5) {
      wx.showToast({
        title: 'Username too short',
        icon: "successss"
      })
    }

    //check if the two passwords entered are the same
    var same = this.checkPasswordSame();
    console.log(same);
    if (!same){
      wx.showToast({
        title: 'Password does not match',
        icon:"success"
      })
    }

    //check for validity of password
    if (this.data.userPassword.length < 6){
      wx.showToast({
        title: 'User password too short',
        icon: "success"
      })
    }

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