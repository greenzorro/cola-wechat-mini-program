// pages/profile/profile.js
var appFunc = require('../../functions.js')

Page({

	data: {
		focusStatus: [true, false, false, false, false, false],
		confirmType: ['next', 'next', 'next', 'next', 'next', 'done']
	},
	onUnload: function () {
		console.log('页面卸载，此时保存并提交表单')
	},
	onShow: function () {
		appFunc.globalFunc()  // 运行全局逻辑
	},
	// 根据有无内容决定键盘右下角按钮文字
	inputSetting: function (e) {
		var thisSequency = parseInt(e.target.dataset.focusSequency) || 0,
			typeArray = this.data.confirmType
		if (e.detail.value.length <= 0 && thisSequency < typeArray.length - 1) {
			typeArray[thisSequency] = 'next'
		}
		else {
			typeArray[thisSequency] = 'done'
		}
		this.setData({
			confirmType: typeArray
		})
		console.log(typeArray)  //debug
	},
	// 点击键盘下一步，焦点移至下一个表单
	focusMove: function (e) {
		var i, len, thisSequency = parseInt(e.target.dataset.focusSequency) || 0,
			typeArray = this.data.confirmType,
			statusArray = this.data.focusStatus
		for (i = 0, len = statusArray.length; i < len; i++) {
			statusArray[i] = false
			if (i == thisSequency + 1 && typeArray[thisSequency] == 'next') {
				statusArray[i] = true
			}
		}
		this.setData({
			focusStatus: statusArray
		})
		console.log(statusArray)  //debug
	}

})
