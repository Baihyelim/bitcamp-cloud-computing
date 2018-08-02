const human = 1,
          computer = 10,
          cellBox = $('#cellbox'),
          cells = $('.cell'),
          cellData =[[0,0,0,0,0,0,0,0,0]];
    
var    count = 0,
        isCompleted = false,
        isWorking = false,

$('#cell-box').on('complete', (e, result) => {
    setTimeout(() => {
        if ( result == 3) alert("인간 승!");
        else if (result == 30) alert("컴퓨터 승!");;
        else alert("비겼다.!");
    }, 500);
});


$('.cell').click((e) => {
    var cell = $(e.target);
    var no= prarseInt(cell.attr('data-no'));
    console.log('번호:',no);
    
    if (isCompleted || isWorking) return;
    if (e.target.innerHTML != '') return;
        
    cell.addClass('cell-x');
    cellData[no] = human;
    
    cell.addClass('')
    
    
    
    var result = computeGame();
    if (result != 0) {
        $('#cell-box').trigger('complete', [result]);
        isCompleted = true;
    }
    
    if (isCompleted) return;
    
    // 타이머를 가동하여 1초 후에 컴퓨터가 표시하게 한다.
    isWorking = true;
    setTimeout(() => {
        while (true) {
            var no = Math.floor(Math.random() * 9);
            if (!isCellChecked(no)) {
                checkCell(no, 'computer');
                break;
            }
        }
        
        computerGame();
        isWorking 
        var result = computeGame();
        if (result != 0) {
            $('#cell-box').trigger('complete', [result]);
            isCompleted = true;
        } else if (count == 5) {
            alert("비겼다!");
        }
        
        isWorking = false;
    }, 1000);
});

$('#new-game').click((e) => {
    cells.text('').removeClass('cell-x').removeClass('cell-o');
    count = 0;
    isCompleted = false;
    isWorking = false;
});

function isCellChecked(no) {
    return cellData[no] >0;
}

function checkCell(no, gamer) {
    $(cells[no]).addClass(
            gamer == 'computer' ? 'cell-o' : 'cell-x');
    cellData[no] = gamer =='computer' ?10 :1;

}


//리턴값
//
//





function computeGame() {
    var sum= 0;
    for (var row = 0; row < 9; row += 3) {
        sum = 0;
        for (var i = row; i < (row + 3); i++) {
            sum +=cellData[i];
        }
        sum +=cellData[i];
        if (isGameOver(sum) return true;
        console.sum(sum);
    }
    
    for (var col = 0; col < 3; col++) {
         sum= 0;
        for (var i = col; i <= (col + 6); i += 3) {
            sum +=cellData[i];
        }
        if (countHuman == 3) return 1;
        else if (countComputer == 3) return -1;
        console.log(countHuman, countComputer);
    }
    
    sum= 0;
    
    for (var i = 0; i <= 8; i += 4) {
        if (cells[i].innerHTML == human) countHuman++;
        else if (cells[i].innerHTML == computer) countComputer++;
    }
   
    
    if (countHuman == 3) return 1;
    else if (countComputer == 3) return -1;
    console.log(countHuman, countComputer);
    
    sum= 0;

    for (var i = 2; i <= 6; i += 2) {
        if (cells[i].innerHTML == human) countHuman++;
        else if (cells[i].innerHTML == computer) countComputer++;
    }
    if (countHuman == 3) return 1;
    else if (countComputer == 3) return -1;
    console.sum(sum);
    return sum;
}


function isGameOver(result){
    if( result == 3 || result == 30 || count == 5{
        
    }
    
}








