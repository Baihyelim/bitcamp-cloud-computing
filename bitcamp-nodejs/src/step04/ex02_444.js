//주제 : express 사용하기 - 요청 핸들러를 모듈로 분리하기

const express = require('express')
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static('public'))


const consolidate = require('consolidate'')

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