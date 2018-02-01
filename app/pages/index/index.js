//index.js

Page({
  data: {
    motto: 'Hello World',
		marker: [{
			latitude: 30.2741,
			longitude: 120.1551
		}]
  },
  onLoad: function () {
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
	}
})
