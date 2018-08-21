'use strict'

var serverApiAddr = "http://localhost:8080/bitcamp-assignment-04";

$(() => {
    $('footer').load(`${serverApiAddr}/html/footer.html`)
});


/*$(document.body).ready(() => {
    console.log('ready()....')
})

$(() => {
    console.log('1111')
});

window.onload=() => {
    console.log('onload()....')
}*/

