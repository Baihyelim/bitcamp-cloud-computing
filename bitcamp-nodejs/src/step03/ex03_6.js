// 주제: 요청 정보 다루기 - POST 요청 다루기
// 

const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    var urlInfo = url.parse(req.url, true);
    console.log('요청 받았음!')
    
    console.log(req.url + '\n'); // => /aaa/bbb/ccc?name=hong&age=20
    
    if (urlInfo.pathname !== "/") {
        res.end();
        return;
    }
    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=UTF-8'
    });
    
    // 파라미터 값을 꺼낼 때는 그냥
    // "query.파라미터명"으로 지정하면 된다.
    res.write(`name= ${urlInfo.query.name}\n`)
    res.write(`age= ${urlInfo.query.age}\n`)
    res.end();
});

server.listen(8000, () => {
    console.log('서버가 시작됨!')
})