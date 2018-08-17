var serverApiAddr = "http://localhost:8080/bitcamp-assignment-04";



/*$(document.body).ready(() => {
    console.log('ready()....')
})

$(() => {
    console.log('1111')
});

window.onload=() => {
    console.log('onload()....')
}*/

$(() => {
    $('footer').load('${serverApiAddr}/html/footer.html')
});