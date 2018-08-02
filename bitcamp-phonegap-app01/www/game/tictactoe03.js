$('.cell').click((e)) => {
    console.log($(e.target).attr('data-pos'));
    //속성값알아보기 위해서 Attribute쓰는 것
    //Attribute를 쓰고 나서 jQuery로 가공하는데 ($(e.target).attr('data-pos'));
});

$('#new-game').click((e) =>{
    console.log('new game!');
});