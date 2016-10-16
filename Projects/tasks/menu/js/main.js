$(document).ready(function(){
    // var lanRus = $('.langs-item-rus');
    //     lanUkr = $('.langs-item-ukr');
    //     lanEng = $('.langs-item-eng');
    var menuOverlay = $('.nav-bar');
        langsOpen = $('.lan');
        langsMain = $('.lan-wrap');
        textMenu = $('.hamburger-open');
        textClose = $('.hamburger-close');
        content = $('.content');
        menu = $('.hamburger');
        main = $('.menu-item:first-child');
        portfolio = $('.menu-item:nth-child(2)');
        about = $('.menu-item:nth-child(3)');
        services = $('.menu-item:nth-child(4)');
        pressa = $('.menu-item:nth-child(5)');
        contacts = $('.menu-item:last-child');
        socmedia = $('.network-list');

    $('.hamburger-icon').click(function(){
        // $(".hamburger-icon").find('.icon-inner').unbind("mouseenter mouseleave");
        $(this).toggleClass('open');

    });

    // menu.click(function() {
    //     $( ".hamburger span" ).toggle();
    // });

    // menu.click(function() {
    //     $( ".hamburger span" ).toggle();
    //     // $( ".langs-wrap" ).css("display", "none");
    // });

    var tl = new TimelineMax({paused:true, reversed:true});
    // tl.to([lanRus, lanUkr, lanEng], 1,  {left: 0, opacity: 1});
    tl.to(textMenu, 0.1, {opacity: 0, ease:Back.easeInOut});
    tl.to(textClose, 0.1, {opacity: 1, ease:Back.easeInOut});
    tl.to(menuOverlay, 0.75, {left: 0, opacity: 1, ease:Power2.easeInOut});
    tl.to(langsMain, 1, {autoAlpha: 0, display: 'none', left: 0, ease:Back.easeInOut}, '-=0.9');
    tl.to(content, 1, {autoAlpha: 0, display: 'none', left: 0, ease:Back.easeInOut}, '-=1.2');
    tl.to(langsOpen, 0.25, {left: 0, opacity: 1, ease:Power2.easeInOut});
    tl.to(main, 1.5, {top: 50, opacity: 1, ease:Power2.easeInOut}, 0.5);
    tl.to(portfolio, 1.5, {top: 50, opacity: 1, ease:Power2.easeInOut}, 0.75);
    tl.to(about, 1.5, {top: 50, opacity: 1, ease:Power2.easeInOut}, 1);
    tl.to(services, 1.5, {top: 50, opacity: 1, ease:Power2.easeInOut}, 1.25);
    tl.to(pressa, 1.5, {top: 50, opacity: 1, ease:Power2.easeInOut}, 1.5);
    tl.to(contacts, 1.5, {top: 50, opacity: 1, ease:Power2.easeInOut}, 2.5, 'menu');
    // tl.to(logo, 1, {left: 0, opacity: 1, ease:Power2.easeInOut}, 1.5);
    tl.to(socmedia, 0.25, {left: -15, opacity: 1, ease:Power2.easeInOut});


    $('.hamburger-icon').click(function () {
        tl.reversed() ? tl.play() : tl.reverse();
    });
    // tl.to(socmedia, 0.5, {left: 0, opacity: 1}, '+=1.2');
    // tl.to([main, portfolio, about, services, pressa, contacts], 3, {top: 100, opacity: 1}, 1);

    // tl.addCallBack(function() {
    //     tl.to(socmedia, 1, {left: 100, opacity: 1});
    // }, 'menu');



});
