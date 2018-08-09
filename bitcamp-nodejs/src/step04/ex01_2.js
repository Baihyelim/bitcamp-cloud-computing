//주제 : express 사용하기 - 서버 실행하기 II

//=> express 모듈 로딩과 웹 서버 객체 준비를 한번에 하기
const express = require('express')

app.get('/test01', (req,res) => {
    res.writeHead(200, {'Content-Type':'text/plain;charset=UTF-8'});
    res.write('test01 ....ok');
    res.end();
});

//=> 서버 실행하기
app.listen(8000, () => {
    console.log('서버 실행중...')
})