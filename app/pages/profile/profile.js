// pages/profile/profile.js
var appFunc = require('../../functions.js')

Page({

	data: {
		focus1: false,
		focus2: false,
		focus3: false,
		confirmType1: 'next',
		confirmType2: 'next'
	},
	onUnload: function () {
		console.log('页面卸载，此时保存并提交表单')
	},
	onShow: function () {
		appFunc.globalFunc()  // 运行全局逻辑
	},
	// 输入框获得焦点，根据有无内容决定键盘右下角按钮文字
	focusSetting1: function (e) {
		if (e.detail.value.length <= 0) {
			this.setData({
				confirmType1: 'next'
			})
		}
		else {
			this.setData({
				confirmType1: 'done'
			})
		}
	},
	focusSetting2: function (e) {
		if (e.detail.value.length <= 0) {
			this.setData({
				confirmType2: 'next'
			})
		}
		else {
			this.setData({
				confirmType2: 'done'
			})
		}
	},
	// 点击键盘下一步，焦点移至下一个表单
	focusMove1: function (e) {
		if (this.data.confirmType1 == 'next') {
			this.setData({
				focus2: true
			})
		}
	},
	focusMove2: function (e) {
		if (this.data.confirmType2 == 'next') {
			this.setData({
				focus3: true
			})
		}
	}

})
