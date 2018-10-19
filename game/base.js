// 全局舞台s 画布c 变量i 横向格子数x 纵向格子数y
let c, s, i, c_width, x, y
const PER_CELL_SIZE = 50

// 初始化
function init () {
	c = document.querySelector('#c')
	c_width = c.width
	x = y = c_width / PER_CELL_SIZE
	s = new createjs.Stage(c)
	createjs.Ticker.on('tick', s)
}
// 创造地图
function createMap (color, w, size) {
	let m = new createjs.Shape(), m_g = m.graphics
	m_g.beginStroke(color)
	for (i = 0; i < w; i += size) {
		m_g.moveTo(i, 0)
		m_g.lineTo(i, w)
		m_g.moveTo(0, i)
		m_g.lineTo(w, i)
	}
	s.addChild(m)
}
// 创造图片
function createImage (u, x, y) {
	let o = new createjs.Bitmap(u)
	o.x = x + 1
	o.y = y + 1
	s.addChild(o)
}
// 产生母块
function createMotherBlock (x, y) {
	let mk = new createjs.Shape(), mk_g = mk.graphics
	mk_g.beginFill("#a07bd4")
	mk_g.drawRect(x || 10, y || 10, 30, 30)
	s.addChild(mk)
}
// 随机产生一个格子里的坐标
function randomIn (img) {
	let _x = Math.floor(Math.random() * 10)
	let _y = Math.floor(Math.random() * 10)
	createImage(img, _x * 50, _y * 50)
	createMotherBlock(_x * 50 + 10, _y * 50 + 10)
	return { x: _x, y: _y, }
}
// 随机产生一个交叉线上的坐标
function randomBorder () {

}
// 初始化
init()
// 创建一个正方形网格地图图形
createMap('#fff', c_width, PER_CELL_SIZE)
// 创建母块
createMotherBlock()
// 空圈: 消去任意一个子母
let emptyCircles = {
	red: './images/circle-red.png',
	yellow: './images/circle-yellow.png',
	black: './images/circle-black.png',
}
// 实圈: 抵消复制母
const fillCircles = {
	red: './images/circle-sred.png',
	yellow: './images/circle-syellow.png',
	black: './images/circle-sblack.png',
}
// 禁跨块
const emptyBlocks = {
	red: './images/square-sred.png',
	yellow: './images/square-syellow.png',
	black: './images/square-sblack.png',
}
// 禁跨块
const fillBlocks = {
	red: './images/square-red.png',
	yellow: './images/square-yellow.png',
	black: './images/square-black.png',
}

console.log(randomIn(emptyCircles.red))
console.log(randomIn(emptyCircles.red))
console.log(randomIn(emptyCircles.red))
console.log(randomIn(emptyCircles.red))
console.log(randomIn(emptyCircles.yellow))
console.log(randomIn(emptyCircles.yellow))
console.log(randomIn(emptyCircles.yellow))
console.log(randomIn(emptyCircles.yellow))
console.log(randomIn(emptyCircles.black))
console.log(randomIn(emptyCircles.black))
console.log(randomIn(emptyCircles.black))
console.log(randomIn(emptyCircles.black))














// createImage('./images/star-black.png', 0, 100)
// createImage('./images/star-red.png', 50, 100)
// createImage('./images/star-yellow.png', 100, 100)
// createImage('./images/star-sblack.png', 150, 100)
// createImage('./images/star-sred.png', 200, 100)
// createImage('./images/star-syellow.png', 250, 100)
// createImage('./images/triangle-black.png', 0, 150)
// createImage('./images/triangle-red.png', 50, 150)
// createImage('./images/triangle-yellow.png', 100, 150)
// createImage('./images/triangle-sblack.png', 150, 150)
// createImage('./images/triangle-sred.png', 200, 150)
// createImage('./images/triangle-syellow.png', 250, 150)
// createImage('./images/tian-square-black.png', 0, 200)
// createImage('./images/tian-square-red.png', 50, 200)
// createImage('./images/tian-square-yellow.png', 100, 200)