window.onload = function () {
    // debugger;
  //ищем элемент по селектору
//   var a = document.querySelector('#ShowHide1');
    var parentElement = document.querySelector('.field-item');
  //вешаем на него события

    // parentElement.onmouseout = function(e) {
    //     // debugger
    //     // $(e.currentTarget).find('.field-link').children().css('display', 'blocks')
    //     // $(e.currentTarget).children().css('display', 'blocks')
    //     // document.getElementsByClassName( 'circle-base' )[0].style.display='blocks';
    //     // document.getElementsByClassName( 'field-link-pulse' )[0].style.display='blocks';
    // };
    
    parentElement.onmouseover = function(e) {
        $(e.currentTarget).find('.field-link').children().css('display', 'blocks')
        // var elem = e.currentTarget;
        // $(e.currentTarget).children().css('display', 'blocks')
        // document.getElementsByClassName( 'circle-base' )[0].style.display='blocks';
        // document.getElementsByClassName( 'field-link-pulse' )[0].style.display='blocks';
    };
    
    // $("#field-item-B").mouseover(function(){
    //     $('.circle-base-white').show();
    //     $('.field-link-pulse-white').show();
    // });
    
    // $("#field-item-B").mouseout(function(){
    //     $(this).show();
    //     $(this).show();
    // });

    // $('#field-link-B').hover(
    //     function() {
    //         $(this).children('.circle-base-white').stop().show();
    //     },
    //     function() {
    //         $(this).children('.circle-base-white').stop().show();
    //         console.log(this);
    // });
    var parentElementB = document.getElementById('field-item-B');
    // parentElementB.onmouseout = function(e) {
    //     document.getElementsByClassName( 'circle-base-white' )[0].style.display='blocks';
    //     document.getElementsByClassName( 'field-link-pulse-white' )[0].style.display='blocks';
    // };
    
    parentElementB.onmouseover = function(e) {
        document.getElementsByClassName( 'circle-base-white' )[0].style.display='blocks';
        document.getElementsByClassName( 'field-link-pulse-white' )[0].style.display='blocks';
    };
    
    var parentElementC = document.getElementById('field-item-C');
    // parentElementC.onmouseout = function(e) {
    //     document.getElementsByClassName( 'circle-base-white' )[1].style.display='blocks';
    //     document.getElementsByClassName( 'field-link-pulse-white' )[1].style.display='blocks';
    // };
    
    parentElementC.onmouseover = function(e) {
        document.getElementsByClassName( 'circle-base-white' )[1].style.display='blocks';
        document.getElementsByClassName( 'field-link-pulse-white' )[1].style.display='blocks';
    };
    
    var parentElementD = document.getElementById('field-item-D');
    // parentElementD.onmouseout = function(e) {
    //     document.getElementsByClassName( 'circle-base-white' )[2].style.display='blocks';
    //     document.getElementsByClassName( 'field-link-pulse-white' )[2].style.display='blocks';
    // };
    
    parentElementD.onmouseover = function(e) {
        document.getElementsByClassName( 'circle-base-white' )[2].style.display='blocks';
        document.getElementsByClassName( 'field-link-pulse-white' )[2].style.display='blocks';
    };

    document.getElementById("field-link").addEventListener("click", pulseDrop);
    function pulseDrop() {
        // debugger
        var listElement = document.getElementById("field-list");
        var itemElements = listElement.getElementsByClassName("circle-base");
        for (var i = 0; i < itemElements.length; i++) {
            itemElements[i].style.display='none';
        };
        
        var itemElements = listElement.getElementsByClassName("field-link-pulse");
        for (var i = 0; i < itemElements.length; i++) {
            itemElements[i].style.display='none';
        };

    };

};