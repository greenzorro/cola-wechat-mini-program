// 全局逻辑
module.exports.globalFunc = globalFunc
function globalFunc() {
	console.log(getCurrentPages())  //显示页面路由
}

// 点击键盘下一步，焦点移至下一个表单
module.exports.focusMove = focusMove
function focusMove(e) {
	// console.log(parseInt(e.currentTarget.dataset.moveSequency) + 1)
}
