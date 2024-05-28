Page({
  data: {
    motto: '情侣模式结果',
    result:0,
    img1:'../../image/left.jpg',
    img2:'../../image/left.jpg',
    content: "",
  },
  onLoad: function (options) {
    console.info(options)
    this.setData({
      result: (parseFloat(options.result) * 100).toFixed(2),
      img1:options.picture1,
      img2:options.picture2,
      content: options.content,
    })
    console.log(this.data.result)
  },
  return: function(e) {
    wx.navigateBack({})
  },
});