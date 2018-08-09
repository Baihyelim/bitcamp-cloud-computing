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
    
    if(req.method !== 'POST'){
       res.end('GET 요청을 지원하지 않습니다.')
       return;
    }
    
    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=UTF-8'
    });
    
   
    res.write(req.method);
    res.end(req);
});

server.listen(8000, () => {
    console.log('서버가 시작됨!')
})