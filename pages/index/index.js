// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    open: true,
    // mark 是指原点x轴坐标
    mark: 0,
    // newmark 是指移动的最新点的x轴坐标 
    newmark: 0,
    istoright: true,
    //下面为swiper数据
    background: [],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    nextMargin: 0
  },

  // 点击左上角小图标事件
  tap_ch: function(e) {
      if (this.data.open) {
          this.setData({
              open: false
          });
      } else {
          this.setData({
              open: true
          });
      }
  },
  // 事件处理函数
  bindViewTap() {
    
  },
  onLoad() {
    
  },
  getUserProfile(e) {
    
  },
  getUserInfo(e) {
   
  },
  tapName: function(){
    
  }
})
