// pages/profile/profile.js
var appFunc = require('../../functions.js')

Page({

	data: {
		focus1: true,
		focus2: false
	},
	onUnload: function () {
		console.log('页面卸载，此时保存并提交表单')
	},
	onShow: function () {
		appFunc.globalFunc()  // 运行全局逻辑
	},
	// 点击键盘下一步，焦点移至下一个表单
	focusMove: function (e) {
		// appFunc.focusMove(e)
		var self = "focus" + e.target.dataset.moveSequency
		var next = "focus" + (parseInt(e.target.dataset.moveSequency)+1)
		console.log(next)
		console.log(this.data[next])
		this.data[self] = false
		this.data[next] = true
		console.log(this.data[next])
	}

})
