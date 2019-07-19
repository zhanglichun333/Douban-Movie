// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hit: [],
    new: [],
    top: [],
    movielist: []
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
        hit: JSON.parse(res.result).subjects,
      })
      this.data.movielist.push({
        title: "影院热映",
        arr: JSON.parse(res.result).subjects
      })
    }).catch(err => {
      console.log(err)
    })
  },
  new: function () {
    wx.cloud.callFunction({
      name: 'new',
      data: {
        start: this.data.new.length,
        conut: 18
      }
    }).then(res => {
      this.setData({
        new: JSON.parse(res.result).subjects,
      })
      this.data.movielist.push({
        title: "新片排行榜",
        arr: JSON.parse(res.result).subjects
      })
    }).catch(err => {
      console.log(err)
    })
  }, 
  top: function () {
    wx.cloud.callFunction({
      name: 'top',
      data: {
        start: this.data.top.length,
        count: 18
      }
    }).then(res => {
      this.setData({
        top: JSON.parse(res.result).subjects,
      })
      this.data.movielist.push({
        title: "Top250",
        arr: JSON.parse(res.result).subjects
      })
    }).catch(err => {
      console.log(err)
    })
  }, 
  hitmore: function () {
    wx.navigateTo({
      url: '../hit/hit'
    })
  },
  newmore: function () {
    wx.navigateTo({
      url: '../new/new'
    })
  },
  topmore: function () {
    wx.navigateTo({
      url: '../top/top'
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
    this.hit()
    this.new()
    this.top()
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