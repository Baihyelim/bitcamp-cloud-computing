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
    
    var email= 'user003@test.com';
    var mid = 'user003';
    var pwd = '1111';
    
    
    con.query(
            `update pms2_member emai='user002@test.comxxx'
            where mid = '${mid}';`,
            function (err, result){
                if(err) throw err;
                console.log('삭제 성공!');
            }
        
    });
    con.end(function (err) {
        if (err) throw err;
        console.log('연결을 끊었습니다!')
    });
});



console.log('select 실행!');










