Page({
  data: {
    motto: '心动模式',
    name: "",
    gender: "",
    img: "../../image/eye.png"
  },
  upload: function () {
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        console.log(res)
        that.setData({
          img: res.tempFilePaths[0],
          names: '',
          scores: ''
        })
        wx.getFileSystemManager().readFile({
          filePath: res.tempFilePaths[0],
          encoding: 'base64',
          success: function (res) {
            that.setData({
              picture: res.data
            })
          }
        })
      }
    })
  },

  getName: function (e) {
    this.data.name = e.detail.value;
  },
  getGender: function (e) {
    this.data.gender = e.detail.value  == "男"? "male" : "female";
  },

  submit: function(e) {
    wx.showLoading({
      title: "努力分析中..."
    });
    setTimeout(function() {
      wx.hideLoading();
    }, 2000);
    wx.request({
      url: 'http://10.24.71.166:8888/single',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        "img": this.data.picture,
        "name": this.data.name,
        "gender": this.data.gender
      },
      success: (res) => {
        console.log(res.data.result);
        wx.navigateTo({
          url: '/pages/singleRe/singleRe?result=' + res.data.result+'&picture='+res.data.img+'&name='+res.data.name+'&content='+res.data.content
        })
      },
      fail: (err) => {
        console.log('请求失败', err);
      },
    })
  },
});