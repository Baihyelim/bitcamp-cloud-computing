//주제 : 데이터베이스 프로그래밍 -delete


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
    
    
    
    
var mid ="user002";
//var mid ="user002' or 1= 1 or ''=' '';

//SQL문을 만들 때 변수의 값을 직접 넣어서 만드는 경우
//해커의 공격에 노출 될 수 있다.
//위에 주석을 막은 mid 변수의 값 처럼 외부 사용자가 값을 입력한다면
//조건이 무조건 참이 되기 때문에
//
    
    con.query(
            `delete pms2_member emai='user002@test.comxxx'
            where mid = '${mid}';`
                function(err, results){
                    if (err) throw err;
                    console.log('삭제 성공!');
    });
    
    
    con.end(function (err) {
        if (err) throw err;
        console.log('연결을 끊었습니다!')
    });
});



console.log('select 실행!');










