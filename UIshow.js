// 将数据数组中的数据显示在前端
function updataTableView(table){
    // 清除上次显示的内容
    $(".num-cell").remove();
    // 循环遍历添加 一层div(class="num-cell")
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            $(".Gametable").append('<div class="num-cell" id="num-cell-'+i+'-'+j+'"></div>');
            var theNumCell = $("#num-cell-"+ i +"-"+j);
            // 根据不同的数字添加不同的显示效果
            if (0 == table[i][j]) {
                theNumCell.css({
                    'width':'0px',
                    'height':'0px',
                    'top':20 +i*120 + 50,
                    'left':20 +j*120 + 50
                });

            }else{
                theNumCell.css({
                    'width':'100px',
                    'height':'100px',
                    'top':20 +i*120,
                    'left':20 +j*120,
                    'background-color':getNumBgclolor(table[i][j]),
                    'color':getNumColor(table[i][j])
                });
                theNumCell.text(table[i][j]);
            }
        }
    }
}

// 
function showNumberWithAnimation( i , j , randNumber ){

    var numberCell = $("#num-cell-"+ i +"-"+j);

    numberCell.css('background-color',getNumBgclolor( randNumber ) );
    numberCell.css('color',getNumColor( randNumber ) );
    numberCell.text( randNumber );

    numberCell.animate({
        width:"100px",
        height:"100px",
        top:20 +i* 120,
        left:20 + j*120
    },100);
}

function showMoveAnimation( fromx , fromy , tox, toy ){

    var numberCell = $('#number-cell-' + fromx + '-' + fromy );
    numberCell.animate({
        top: 20+120*tox,
        left:20+120*toy
    },200);
}
// 鼠标悬停改变图片颜色
function hoverChangeColor()
{
    $("#moveUp").mouseover(function(){
        $("#moveUp").attr("src","./img/up_hover.png");
    }).mouseout(function (){
        $("#moveUp").attr("src","./img/up.png");
    });

    $("#moveRight").mouseover(function(){
        $("#moveRight").attr("src","./img/right_hover.png");
    }).mouseout(function (){
        $("#moveRight").attr("src","./img/right.png");
    });

    $("#moveLeft").mouseover(function(){
        $("#moveLeft").attr("src","./img/left_hover.png");
    }).mouseout(function (){
        $("#moveLeft").attr("src","./img/left.png");
    });

    $("#moveDown").mouseover(function(){
        $("#moveDown").attr("src","./img/down_hover.png");
    }).mouseout(function (){
        $("#moveDown").attr("src","./img/down.png");
    });
}   
