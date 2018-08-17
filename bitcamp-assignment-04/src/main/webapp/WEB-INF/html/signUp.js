/*${'#addBtn'}.click() => {
    console.log('======>')
};*/


${'#addBtn'}.click() => {
   $.post('${serverApiAddr}/json/member/signUp', {
       'email': $('#fEmail').val(),
       'name': $('#fName').val(),
       'password': $('#fpassword').val(),
   }. (result) => {
       console.log(result);
       
   } ,'json')
   .fail(() => {
       console.log('회원가입 중 오류발생!')
   });
    
});

console.log('===========>');

