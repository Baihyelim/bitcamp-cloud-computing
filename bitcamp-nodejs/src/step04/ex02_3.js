//주제 : express 사용하기 - 템플릿 엔진 지정하기

const express = require('express')
const app = express();

//POST 요청 데이터 처리
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

//정적 HTML 파일 처리
app.use(express.static('public'))


// 통합 템플릿 엔진 관리자 모듈 로딩
//=> 템플릿 엔진이 아니라 템플릿 엔진을 중간에서 관리해 주는 역할을 수행한다.
const consolidate = require('consolidate'')

//Express에 템플릿 엔진을 등록한다.
//=> consolidate에 대해 handlebars를 찾아 리턴한다.
//=> Express에 여러 개의 엔진을 등록할 수 잇다.
app.engine('html', consolidate.handlebars)

app.get('/test01', (req,res) => {
    res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
    res.write(`name = ${req.query.name}\n`);
    res.write(`age = ${req.query.age}\n`);
    res.end();
});

app.post('/test02', (req,res) => {
    res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
    res.write(`name = ${req.query.name}\n`);
    res.write(`age = ${req.query.age}\n`);
    res.end();
});

app.post('/test02', (req,res) => {
    res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
    res.write(`name = ${req.query.name}\n`);
    res.write(`age = ${req.query.age}\n`);
    res.end();
});

app.get('/test03, (req,res) => {
    res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
    res.write(`name = ${req.query.name}\n`);
    res.write(`age = ${req.query.age}\n`);
    res.end();
});

app.get('test03', (req,res => {
    
})


app.listen(8000, () => {
    console.log('서버 실행중...')
})