///將圍棋程式翻譯成p5.js javaScript
/// pde2js.herokuapp.com 網站可以翻譯
function setup() {
    initializeFields();
    createCanvas(500, 500);
}
var N;// 一開始沒有棋子
var x;// /棋子的陣列
var y;
function draw() {
    background(color(0x79, 0xFF, 0xDC));
    for (var i = 0; i <= 10; i++) {
        line(i * 50, 0, i * 50, 500);
        line(0, i * 50, 500, i * 50);
    }
    // /畫棋盤
    for (var i = 0; i < N; i++) {
        if (i % 2 == 0) {
            fill(255, 255, 255);
            ellipse(x[i], y[i], 40, 40);
        } else {
            fill(0, 0, 0);
            ellipse(x[i], y[i], 40, 40);
        }
    }
// 手上的棋子
}
function mousePressed() {
    x[N] = mouseX;
    y[N] = mouseY;
    // /按一下換一顆棋子
    N++;
}
function initializeFields() {
    N = 0;
    x = new Array(100);
    y = new Array(100);
}
