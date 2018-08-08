// 주제: 여러 개의 요청 처리하기 - 조건문을 없애고 URL과 함수를 자동연결하기
// => 요청 핸들러(요청이 들어왔을때)
// [출력 결과]
// 삭제 성공입니다.




const express = function() {
    var reqMap = {},
    add(url, handler) {
        this.reqMap[url] = handler;
    },
    getHandler(url){
        return this.reqMap[url];
    }
    
};

