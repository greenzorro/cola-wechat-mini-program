//logs.js
var appFunc = require('../../functions.js')

const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
	onShow: function () {
		appFunc.globalFunc()  // 运行全局逻辑
	},
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
