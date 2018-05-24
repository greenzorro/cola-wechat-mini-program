// pages/profile/profile.js
var appFunc = require('../../functions.js')

Page({

	data: {
    focusStatus: [true, false, false, false, false, false, false],
		confirmType: ['next', 'next', 'next', 'next', 'next', 'next', 'done'],
    pickerArray: ['test1', 'test2', 'test3'],
    pickerValue: 0,
    region: ['浙江省', '杭州市', '西湖区'],
    buttonState: false,
    buttonLoading: false
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
		if (e.detail.value.length <= 0 && thisSequency < typeArray.length - 1) {  // 输入框内容为空，且不是表单最后一项
			typeArray[thisSequency] = 'next'
		}
		else {
			typeArray[thisSequency] = 'done'
		}
		this.setData({
			confirmType: typeArray
		})
	},
	// 点击键盘下一步，焦点移至下一个表单
	focusMove: function (e) {
		var i, len, thisSequency = parseInt(e.target.dataset.focusSequency) || 0,
			typeArray = this.data.confirmType,
			statusArray = this.data.focusStatus
		for (i = 0, len = statusArray.length; i < len; i++) {
			statusArray[i] = false  // 将所有表单项取消焦点
			if (typeArray[thisSequency] == 'next') {  // 当前项的按钮是“下一项”
        statusArray[thisSequency + 1] = true  // 下一项获得焦点
			}
		}
		this.setData({  // 将表单项的焦点状态更新到页面
			focusStatus: statusArray
		})
	},
  // 更新普通选择器
  bindPickerChange: function (e) {
    this.setData({
      pickerValue: e.detail.value
    })
  },
  // 更新地区选择器
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  // 依据勾选框改变按钮状态
  checkboxChange: function (e) {
    if (e.detail.value[0]) {  // 取消勾选，按钮变为禁用状态
      this.setData({
        buttonState: false
      })
    }
    else {
      this.setData({
        buttonState: true
      })
    }
  }

})
