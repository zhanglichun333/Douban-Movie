// pages/hit/hit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hit: []
  },
  hit: function () {
    wx.cloud.callFunction({
      name: 'hit',
      data: {
        start: this.data.hit.length,
        conut: 18
      }
    }).then(res => {
      this.setData({
        hit: this.data.hit.concat(JSON.parse(res.result).subjects)
      })
    }).catch(err => {
      console.log(err)
    })
  },
  detail: function (event) {
    wx.redirectTo({
      url: `../detail/detail?movieid=${event.currentTarget.dataset.movieid}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.hit()
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
    this.hit()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})