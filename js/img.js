document.getElementById(img)
$(document).ready(function() {
    $('.nav').hover(function() {
        $('a').addClass('add')
    }, function() {
        $('a').removeClass('add')
    });
});