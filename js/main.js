var $btnShow = $('.btn-show-hide');
var $btnMove = $('.btn-move');
var $btnCollapse = $('.btn-collapse-expand');
var $btnBounce = $('.btn-bounce');
var $btnAppend = $('.btn-append');


$btnShow.on ('click', function (e) {
$('.box').toggleClass('is-clicked');
});

$btnMove.on ('click', function (e) {
$('.diamond').toggleClass('is-clicked2');
});

$btnCollapse.on ('click', function (e) {
$('.panel').toggleClass('is-clicked3');
});

$btnBounce.on ('click', function (e) {
$('.circle').addClass('is-clicked4');
});

$('circle').on ('animationend', function (e) {
$('.circle').removeClass('is-clicked4');
});

$btnAppend.on ('click', function (e) {
$('.list').append('<li>New list</li>');
});
