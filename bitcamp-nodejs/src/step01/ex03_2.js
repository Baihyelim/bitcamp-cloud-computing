//주제: 모듈을 정의하고 사용하기 II
//

//리턴 값 destructuring
//=>모듈의 경로는 현재 파일의 위치에 상대적이다
var obj = require('../src/step01/ex03_m.js');

console.log(obj.plus(10, 20));
console.log(obj.minus(10, 20));
console.log(obj.multiple(10, 20));
console.log(obj.divide(10, 20));
