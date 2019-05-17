$(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
        $('main .social-icon').css('display', 'none');
        $('footer section, footer button, footer aside, .email-button').css('opacity', '1');
        $('footer section, footer button, footer aside, .email-button').css('transition', '2s');
    }  if ($(this).scrollTop() < 800) {
        $('main .social-icon').css('display', 'flex');
    }  if ($(this).scrollTop() < 600) {
        $('footer section, footer button, footer aside, .email-button').css('opacity', '0');
        $('footer section, footer button, footer aside, .email-button').css('transition', '2s');
    }
});

function Movedown() {
    $("body, html").animate({"scrollTop": 1500}, 2000); 
};

function Moveup() {
    $("body, html").animate({"scrollTop": 0}, 2000); 
};

setTimeout(function () {
    $('.watches img').animate({opacity: 1}, 2000);
}, 1000);

setTimeout(function () {
    $('.watches .look-in-future, .movedown').animate({opacity: 1}, 2000);
}, 2000);


