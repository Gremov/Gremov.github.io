
$('.slider-image-overlay-left').click(function() {
    $( ".slider-caption" ).animate({
        opacity: 1,
        duration: "4000",
    });


});

$('.slider-image-overlay-right').click(function() {
    $( ".slider-caption" ).animate({
        opacity: 1,
        duration: "4000",
    });

//     $(".slider-image-overlay-right").toggle(function() {
//             // Отображаем скрытый блок
//             $(".slider-captionbox").fadeIn(); // fadeIn - плавное появление
//             return false; // не производить переход по ссылке
//         },
//         function() {
//             // Скрываем блок
//             $(".slider-caption").fadeOut(); // fadeOut - плавное исчезновение
//             return false; // не производить переход по ссылке
//         }); // end of toggle()
// }); // end of ready()
});