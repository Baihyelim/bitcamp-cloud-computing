//주제: /member/* 요청을 처리할 라우터 만들기

const express = require('express')
const router = express.Router();

//
router.get('/list', (req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain;charset=UTF-8'});
    res.write('회원 목록입니다. ');
    res.end();
});

//
router.get('/view', (req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain;charset=UTF-8'});
    res.write('회원 상세 정보입니다. ');
    res.end();
});

//module 생략하면 안된다.
module.exports = router;






