// pages/xiangqing/xiangqing.js
Page({
  data:{
    open: true,
    // mark 是指原点x轴坐标
    mark: 0,
    // newmark 是指移动的最新点的x轴坐标 
    newmark: 0,
    istoright: true,
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
  }
})