// pages/new/new.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    new: []
  },
  new: function () {
    wx.cloud.callFunction({
      name: 'new',
      data: {
        start: this.data.new.length,
        count: 12
      }
    }).then(res => {
      this.setData({
        new: this.data.new.concat(JSON.parse(res.result).subjects)
      })
    }).catch(err => {
      console.log(err)
    })
  },
  detail: function (event) {
    wx.navigateTo({
      url: `../detail/detail?movieid=${event.currentTarget.dataset.movieid}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.new()
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