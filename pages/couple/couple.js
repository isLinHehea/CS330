Page({
  data: {
    motto: '情侣模式',
    age1: "1",
    age2: "2",
    time: "3",
    times: "4",
    img1: "../../image/eye.png",
    img2: "../../image/eye.png",
  },
  onLoad: function (options) {
    console.info(options)
    this.setData({
      img1: data.img1,
      img2: data.img2,
    })
  },
  upload1: function () {
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        console.log( res )
        that.setData({
          img1: res.tempFilePaths[0],
          names: '',
          scores: ''
        })
        wx.getFileSystemManager().readFile({
          filePath:res.tempFilePaths[0],
          encoding:'base64',
          success:function(res){
            that.setData({
              picture1:res.data
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
        console.log( res )
        that.setData({
          img2: res.tempFilePaths[0],
          names: '',
          scores: ''
        })
        wx.getFileSystemManager().readFile({
          filePath:res.tempFilePaths[0],
          encoding:'base64',
          success:function(res){
            that.setData({
              picture2:res.data
            })
          }
        })
      }
    })
  },
  getAge1:function(e){
    this.data.age1 = e.detail.value;
  },
  getAge2:function(e){
    this.data.age2 = e.detail.value;
  },
  getTime:function(e){
    this.data.time = e.detail.value;
  },
  getTimes:function(e){
    this.data.times = e.detail.value;
  },
  submit: function(e) {
    console.log(this.data.age1);
    console.log(this.data.age2);
    console.log(this.data.time);
    console.log(this.data.times);
    console.log(this.data.picture1);
    console.log(this.data.picture2);
    wx.showLoading({
      title: "努力分析中..."
    });
    wx.request({
      url: 'http://localhost:8888/couple',
      method:'post',
      header:{
        'content-type':'application/json'
      },
      data:{
        "img_1":this.data.picture1,
        "img_2":this.data.picture2,
      },
      success: (res) => {
        console.log(res);
        this.setData({
          "result": res.data.result
        });
      },
      fail: (err) => {
        console.log('请求失败', err);
      },
    })
    setTimeout(function(){
      wx.hideLoading({});
      wx.navigateTo({
        url: '/pages/coupleRe/coupleRe',
      })
    },2000)
    // // 获取表单数据
    // const formData = e.detail.value;
    // // 发起网络请求，传递表单数据到后端
    // wx.request({
    //   url: 'YOUR_BACKEND_API_URL', // 替换为你的后端API地址
    //   method: 'POST',
    //   data: formData,
    //   success: function(res) {
    //     const data = JSON.parse(res.data)
    //     // 请求成功处理
    //     console.log('提交成功', data);
    //     // 更新页面数据，显示后端返回结果
    //     this.setData({
    //       nemes: data.name,
    //       age: data.age,
    //       possibility: data.possibility,
    //       img: data.img,
    //       info: "匹配结果"
    //     })
    //   },
    //   fail: function(err) {
    //     // 请求失败处理
    //     console.log('提交失败', eprr);
    //   }
    // });
  },
  onShow: function () {
    wx.showTabBar();
  },
});