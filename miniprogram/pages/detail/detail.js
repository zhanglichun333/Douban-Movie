// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    reviews: [],
    comments: [],
    textFlag: true,
    commentFlag: true,
    id: ''
  },
  changeText: function () {
    this.setData({
      textFlag: !this.data.textFlag,
    })
  },
  changeComment: function (event) {
    this.setData({
      id: event.target.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.movieid)
    wx.cloud.callFunction({
      name: 'detail',
      data: {
        movieid: options.movieid
      }
    }).then(res => {
      this.setData({
        detail: JSON.parse(res.result)
      })
    }).catch(err => {
      console.error(err)
    })
    wx.cloud.callFunction({
      name: 'comments',
      data: {
        movieid: options.movieid
      }
    }).then(res => {
      this.setData({
        comments: JSON.parse(res.result).comments.map(item =>({
          avatar: item.author.avatar,
          name: item.author.name,
          star: item.rating.value,
          time: new Date(item.created_at).getMonth()+'月'+new Date(item.created_at).getDate()+'日',
          content: item.content,
          praise: item.useful_count
        }))
      })
      console.log(this.data.comments)
    }).catch(err => {
      console.error(err)
    })
    wx.cloud.callFunction({
      name: 'reviews',
      data: {
        movieid: options.movieid
      }
    }).then(res => {
      this.setData({
        reviews: JSON.parse(res.result).reviews
      })
    }).catch(err => {
      console.error(err)
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