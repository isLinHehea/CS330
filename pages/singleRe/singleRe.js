Page({
  data: {
    motto: '心动模式结果',
    name: "",
    gender: "",
    result: 0,
    img: "",
    content: "",
  },
  onLoad: function (options) {
    console.info(options)

    this.setData({
      result: (parseFloat(options.result) * 100).toFixed(2),
      name: options.name,
      img: 'data:image/png;base64,' + options.picture,
      content: options.content,
    })
  },
  return: function(e) {
    wx.navigateBack({})
  },
});