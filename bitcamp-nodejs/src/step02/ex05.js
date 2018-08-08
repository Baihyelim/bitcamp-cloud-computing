//주제 : 데이터베이스 프로그래밍 - select 실행 II


const mysql = require('mysql');

//1) DBMS와 연결을 수행할 객체를 준비한다.
var con = mysql.createConnection({
    host: '13.125.229.224' , 
    //port: '3306',
    database:'studydb',
    user:'study',
    password: '1111',
});


con.connect(function(err) {
  
    if (err) throw err; 

    console.log('연결 성공입니다.!');
    
    //연결에 성공했을 때만 SQL을 실행하라고 예약한다.
    con.query('select * from pms2_member', function(err, results) {
        if (err) throw err;
        
        //results파라미터에 결과가 들어있다.
        for (var row of results) {
            //
            console.log(row.email, row.mid, row.pwd);
            
        }
        
    });
    //이 예제에서는 연결 완료 후 END를 먼저 실행하라고 예약했기 때문에
    //connect()에 등록한 함수가 호출되어 SQL을 예약하더라더
    con.end(function (err) {
        if (err) throw err;
        console.log('연결을 끊었습니다!')
    });
});



console.log('select 실행!');










