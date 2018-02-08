//index.js
var appFunc = require('../../functions.js')

Page({
  data: {
    name: 'World',
		map: {
			markers: [{
				latitude: 30.2741,
				longitude: 120.1551
			}]
		}
  },
	onShow: function () {
		appFunc.globalFunc()  // 运行全局逻辑
	},
	changeName: function (e) {
		this.setData({
			name: "Cola"
		})
	},
	moveMarker: function (e) {
		this.setData({
			map: {
				markers: [{
					latitude: this.data.map.markers[0].latitude + 0.0002,
					longitude: 120.1551
				}]
			}
		})
	},
	scanQr: function (e) {
		wx.scanCode({
			success: (res) => {
				console.log(res), //debug
				wx.showToast({
					title: res.result,
					icon: "success"
				})
			},
			fail: function (res) {
				console.log(res), //debug
				wx.showToast({
					title: res.result
				})
			}
		})
	},
	onShareAppMessage: function () {
		return {
			title: '转发标题',
			path: '/page/index/index'
		}
	}
})
