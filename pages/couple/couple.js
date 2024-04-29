var app = getApp();
var name = "";
var calorie = "";
var probability ="";
var words = "";
Page({
  
  data: {
    motto: '单人检索',
    userInfo: {},
    images: {},
    info: "点击查看识别结果",
    names: "",
    calories: "",
    probabilitys:"",
    remark: ""
  },
  submitForm: function(e) {
    // 获取表单数据
    const formData = e.detail.value;
    // 发起网络请求，传递表单数据到后端
    wx.request({
      url: 'YOUR_BACKEND_API_URL', // 替换为你的后端API地址
      method: 'POST',
      data: formData,
      success: function(res) {
        // 请求成功处理
        console.log('提交成功', res.data);
      },
      fail: function(err) {
        // 请求失败处理
        console.log('提交失败', err);
      }
    });
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  uploads: function () {
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        //console.log( res )
        that.setData({
          img: res.tempFilePaths[0],
          names: '',
          scores: ''
        }),
          wx.showLoading({
            title: "努力分析中..."
          })
        }
    })
  },
  
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
});