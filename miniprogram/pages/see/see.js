// pages/see/see.js
const db = wx.cloud.database()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    movieid: '',
    value: '',
    comment: ''
  },
  onChange(event) {
    this.setData({
      value: event.detail
    })
  },
  changeContext: function (event) {
    this.setData({
      comment: event.detail.value
    })
  },
  submit: function () {
    db.collection('comment').add({
      data: {
        movieid: this.data.movieid,
        rate: this.data.value,
        comment: this.data.comment
      }
    }).then(res => {
      wx.showToast({
        title: '评论成功'
      })
      wx.navigateTo({
        url: `../detail/detail?movieid=${this.data.movieid}`,
      })
    }).catch(err => {
      console.log(err)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      movieid: options.movieid
    })
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