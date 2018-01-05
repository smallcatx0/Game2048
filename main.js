
var table = new Array();
var score = 0;

// 等待程序加载完成再渲染js
$(document).ready(function(){
	// 开始新游戏
	NewGame();
	// 鼠标悬停改变图片颜色
	hoverChangeColor();
	// 绑定单击事件，游戏交互。
	$("#GameControl").click(function (ev){
		// window.console.log(ev);
		var  moveDirection =ev.target.id;
		// window.console.log(moveDirection);
		// 根据单击事件处理游戏数据
		GameControl(moveDirection,table);
	});
});


function NewGame(){
	// 初始化棋盘
	init();
	// 随机生成两个
	randOneNum();
	randOneNum();
	//updatatableView(table);


}

// 初始化函数
function init(){

	for (var i = 0; i < 4 ; i++) {
		for (var j = 0; j < 4; j++) {
			// 获取每个格子的id 并计算其宽高写入css样式
			var cell = $("#cell-"+ i + "-" + j);
			cell.css({'top':20 +i*120,
				'left':20 +j*120});
		}
	}
	// 初始化地图数据
	for (var i = 0; i < 4 ;i++) {
		table[i] = new Array();
		for (var j = 0; j <4 ; j++) {
			table[i][j] = 0;
		}
	}
	updataTableView(table);		// 将数据数组中的数据显示在前端

}

// 随机在一个可用格子产生2或4
function randOneNum()
{
	if( voidCell = onemoreSpace(table))
	{
		// 在可用空间中随机选一个
		var randWhere = Math.floor(Math.random() * voidCell.length);

	 	// 随机生成2或4
	 	var randNum   = Math.random() < 0.5? 2 : 4;

	 	var x = parseInt(voidCell[randWhere]/4);
	 	var y = voidCell[randWhere]%4;
	 	table [x][y] = randNum;
	 	// 显示动画
	 	showNumberWithAnimation(x,y,randNum);

	}
}

function GameControl(moveDirection,table){
	var tempbord;
	//如果能够移动一次就移动直到不能移动为止
	while( false !== (tempbord = canMoveOnece(moveDirection,table)))
	{
		table = tempbord;
	}
	// 移动完成后显示
	updataTableView(table);
	// 在随机产生2或4
	randOneNum();
}