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
    
    var email= 'user001@test.com';
    var mid = 'user001';
    var pwd = '1111';
    
    
    con.query(
            `insert into pms2_member(email,mid,pwd)' +
              value('${email}', '${mid}','${pwd}'))`+
                function(err, results){
                    if (err) throw err;
                    console.log(result);
              }
        
    });
    con.end(function (err) {
        if (err) throw err;
        console.log('연결을 끊었습니다!')
    });
});



console.log('select 실행!');










