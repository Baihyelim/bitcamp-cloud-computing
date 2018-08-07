//주제 : 데이터베이스 프로그래밍 -delete


const mysql = require('mysql');

//1) DBMS와 연결을 수행할 객체를 준비한다.
var con = mysql.createConnection({
    host: '13.125.229.224' , 
   
    database:'studydb',
    user:'study',
    password: '1111',
});


con.connect(function(err) {
  
    if (err) throw err; 

    console.log('연결 성공입니다.!');
    
    
    
    
var mid ="user01";
var mid ="user002' or 1= 1 or ''=' '';

//in-parameter 사용하기
//=>
    con.query(
            `delete pms2_member 
            where mid=?`,
            [mid], //?(인 파라미터) 개수 만큼 배열에 값을 담아 놓으면 된다.
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










