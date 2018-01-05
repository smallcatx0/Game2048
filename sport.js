//根据不同数返回不同的背景色
function getNumBgclolor(num)
{
	switch(num){
		case 2:return "#eee4da";break;
        case 4:return "#ede0c8";break;
        case 8:return "#f2b179";break;
        case 16:return "#f59563";break;
        case 32:return "#f67c5f";break;
        case 64:return "#f65e3b";break;
        case 128:return "#edcf72";break;
        case 256:return "#edcc61";break;
        case 512:return "#9c0";break;
        case 1024:return "#33b5e5";break;
        case 2048:return "#09c";break;
        case 4096:return "#a6c";break;
        default :return "black";
	}
}

// 根据不同数字返回不同前景色
function getNumColor(num)
{
	if( num <= 4 )
        return "#776e65";

    return "white";
}

// 遍历所有没有数的空间并返回
function onemoreSpace(table)
{
    var spaceCell = new Array();
    var k = 0;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j <4 ; j++) {
            if (0==table[i][j]) {
                spaceCell[k++] = i*4+j;
            }
        }
    }

    return 0!=spaceCell.length ? spaceCell : false;
}
// 判断能否移动一次（能移动就移动并返回移动一次后的数据，不能移动则返回false）
function canMoveOnece(moveDirection,table)
{
    var i0 = 0 ;
    var j0 = 0 ;
    var iMax = 4;
    var jmax = 4;
    var di = 0 ;
    var dj = 0 ;
    switch(moveDirection)
    {
        case "moveUp" : i0 = 1; di = -1; break;
        case "moveRight" : jMax = 3 ; dj = 1; break;
        case "moveLeft" : j0 = 1; dj = -1 ;break;
        case "moveDown" : iMax =3; di = 1;  ;break;
        default : break;
    }
     // 如果某数的前/(后)一排/(列)有空位或者相同的数，可以向移动。
    for (var i = i0; i <iMax ; i++) {
            for (var j = j0; j < jmax; j++){ 
                if ( 0 != table[i][j] ) {
                    if ( 0 == table[i+di][j+dj]){
                        var Ctamp = table[i+di][j+dj];
                        table[i+di][j+dj] =  table[i][j];
                        table[i][j] = Ctamp;
                        return table;
                    }
                    else if(table[i+di][j+dj] == table[i][j]){
                        table[i+di][j+dj] += table[i][j];
                        table[i][j] = 0;
                        return table;
                    }
                }
            }
        }
        return false;
}