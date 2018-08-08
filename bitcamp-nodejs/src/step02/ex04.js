//주제 : 데이터베이스 프로그래밍 - select 실행


const mysql = require('mysql');

//1) DBMS와 연결을 수행할 객체를 준비한다.
var con = mysql.createConnection({
    host: '13.125.229.224' , 
    //port: '3306',
    database:'studydb',
    user:'study',
    password: '1111'
});


con.connect(function(err) {
  
    if (err) throw err; 

    console.log('연결 성공입니다.!');
});

//query(sql, 실행 후 호출될 함수);
//=>SQL을 바로 실행하는 것이 아니라 실행을 예약한다.
//=>DBMS와 연결되면 이렇게 예약한 SQL문을 실행할 것이다.
//=>문제는 연결오류에 상관없이 무조건 예약한다는 것이다.
//   connect()에 등록한 함수에서 예외를 던지지 않으면
//    이 SQL문을 실행한다.

con.query('select * from pms2_member', function(err, results) {
    if (err) throw err;
    
    //results파라미터에 결과가 들어있다.
    for (var row of results) {
        //
        console.log(row.email, row.mid, row.pwd);
    
    }
    
});


con.end(function (err) {
    if (err) throw err;
    console.log('연결을 끊었습니다!')
});

console.log('select 실행!');










