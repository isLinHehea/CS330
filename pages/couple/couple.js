Page({
  data: {
    motto: '情侣模式',
    age1: "20",
    age2: "20",
    time: "None",
    times: "None",
    img1: "../../image/eye.png",
    img2: "../../image/eye.png",
  },
  upload1: function () {
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        console.log(res)
        that.setData({
          img1: res.tempFilePaths[0],
          names: '',
          scores: ''
        })
        wx.getFileSystemManager().readFile({
          filePath: res.tempFilePaths[0],
          encoding: 'base64',
          success: function (res) {
            that.setData({
              picture1: res.data
            })
          }
        })
      }
    })
  },
  upload2: function () {
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        console.log(res)
        that.setData({
          img2: res.tempFilePaths[0],
          names: '',
          scores: ''
        })
        wx.getFileSystemManager().readFile({
          filePath: res.tempFilePaths[0],
          encoding: 'base64',
          success: function (res) {
            that.setData({
              picture2: res.data
            })
          }
        })
      }
    })
  },
  getAge1: function (e) {
    this.data.age1 = e.detail.value;
  },
  getAge2: function (e) {
    this.data.age2 = e.detail.value;
  },
  getTime: function (e) {
    this.data.time = e.detail.value;
  },
  getTimes: function (e) {
    this.data.times = e.detail.value;
  },
  submit: function (e) {
    wx.showLoading({
      title: "努力分析中..."
    });
    setTimeout(function() {
      wx.hideLoading();
    }, 2000);
    wx.request({
      url: 'http://10.24.71.166:8888/couple',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        "img_1": this.data.picture1,
        "img_2": this.data.picture2,
      },
      success: (res) => {
        console.log(res.data.result);
        wx.navigateTo({
          url: '/pages/coupleRe/coupleRe?result=' + res.data.result+'&picture1='+this.data.img1+'&picture2='+this.data.img2+'&content='+res.data.content
        })
      },
      fail: (err) => {
        console.log('请求失败', err);
      },
    })

  },
  onShow: function () {
    wx.showTabBar();
  },
});