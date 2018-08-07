//모듈 정의 II
//- 존재하는 module.exports객체를 사용하는 대신에
//  새 객체를 만들어 리턴할 수 있다.

module.exports = {
        //{}에서 함수를 정의하는 방법 1
        plus: function (a, b) {return a + b},
        minus: function(a, b) {return a - b},
        
        //{}에서 함수를 정의하는 방법2
        multiple: function(a, b) {return a * b},
        divide: function(a, b) {return a / b}
        
};

