// $(".slider-image-overlay-left").click(function(){
//     $("slider-caption").animate({
//         opacity: 1,
//     }, 500 );
// });

// $(function() {
//     $('.slider-image-overlay-left')
//         .on('click', function() {
//             $('.slider-image-overlay-left').addClass('open');
//         })
//         .on('click', function() {
//             $('.slider-image-overlay-left').removeClass('open');
//         });
//     // $('.button')
//     //     .on('click', function(e) {
//     //         // return false;
//     //         e.preventDefault();
//     //         $('.tip').addClass('open');
//     //     });
// });

// $(document).ready(function(){
//
//     $(".slider-image-overlay-left").on('click',function(){
//         $(this).parents(".slider-caption").animate({ opacity: "1" }, "slow");
//     });
//
// });


// $(document).ready(function(){
//
//     $('.slider-image-overlay-left').click(function(){
//
//         $(".slider-caption").css({display:'block'}).animate({opacity:'1'}, 1000).delay(2000).animate({opacity:'0'}, 1000})
//
//
// });



// $('.slider-image-overlay-left').click(function() {
//     $( ".slider-caption" ).show("slow");
// });


// $(document).ready(function(){
//     $.fn.animate_Text = function() {
//         var string = this.text();
//         return this.each(function(){
//             var $this = $(this);
//             $this.html(string.replace(/./g, '<span class="new">$&</span>'));
//             $this.find('span.new').each(function(i, el){
//                 setTimeout(function(){ $(el).addClass('div_opacity'); }, 20 * i);
//             });
//         });
//     };
//     $('#example').show();
//     $('#example').animate_Text();
// });