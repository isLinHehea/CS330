Page({
  data: {
    routers: [
      {
        id: '0',
        name: '单人情侣检索模式',
        url: '../../pages/single/single',
        icon: '../../image/dishNine.png'
      },
      {
        id: '1',
        name: '情侣匹配程度计算模式',
        url: '../../pages/couple/couple',
        icon: '../../image/carNine.png'
      }
    ]
  },
  toPage: function (event) {
    console.info(event.currentTarget.id);
    var route = event.currentTarget.id;
    if (route == 0) {
      wx.navigateTo({
        url: '/pages/single/single',
      })
    } else if (route == 1) {
      wx.navigateTo({
        url: '/pages/couple/couple',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.info(options)
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
      return{
        title:'X-AI玩转图像、文字、人脸识别'
      }
  }
})