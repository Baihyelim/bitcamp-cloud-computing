//주제 : SQL 연동요청 처리하기-회원삭제하기
// [실행 URL]
//=>http://localhost:8000/member/delect?id=user100
// [출력 결과]
//삭제 성공입니다.

const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    var urlInfo = url.parse(req.url, true);
    
    if(urlInfo.pathname ==='/favicon.ico') {
        res.end();
        return;
    }
    
    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=UTF-8'
    });
    
    
    if (urlInfo.pathname !== '/member/list') {
        res.write('해당 URL을 지원하지 않습니다.')
        return;
    }
    
    var pageNo = 1;
    var pageSize = 3;
    
    if(urlInfo.query.pageNo)
    var pageNo = parseInt(urlInfo.query.pageNo)
    var pageSize = parseInt(urlInfo.query.pageSize)
    var startIndex = (pageNo -1)* pageSize;
    
    pool.query('select * from pms2_member limit ?,?',
            [startIndex, pageSize],
            function(err, results) {
        if (err) {
            res.end('DB 조회중 예외 발생!')
            return;
        }
        
        for (var row of results) {
            res.write(`${row.email}, ${row.mid}\n`);
        }
    
        res.end()
    });
});
    
    
    

server.listen(8000, ()=>{
    console.log('서버가 시작됨')
})
