Page({
  data: {
    motto: '情侣模式结果',
    age: "",
    gender: "",
    probability: "",
    words: "",
    img: "../../image/eye.png"
  },
  onLoad: function (options) {
    console.info(options)
    this.setData({
      img: data.img,
    })
  },
  return: function(e) {
    wx.navigateBack({})
  },
});