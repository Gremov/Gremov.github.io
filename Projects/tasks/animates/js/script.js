var buttonImgLeft = document.getElementsByClassName('slider-image-overlay-left');
var buttonImgRight = document.getElementsByClassName('slider-image-overlay-right');
var images = document.getElementsByClassName('slider-image');
var caption = document.getElementsByClassName('slider-caption');
var active = 0;

for(var i = 0; i < images.length; i++) {
    if(i != active){
        images[i].style.display = "none";
        // caption[i].style.opacity = "0";

    }
}

var changeImageRight = function() {
    images[active].style.display = "none";
    // caption[active].style.opacity = "0";
    active++;
    if (active < images.length){
        images[active].style.display = "blocks";
        // caption[active].style.opacity = "1";
        // caption[active].style.transitionDelay = "3s";
    } else{
        active = 0;
        images[active].style.display = "blocks";
        // caption[active].style.opacity = "1";
        // caption[active].style.opacity = "1";
        // caption[active].style.transitionDelay = "3s";
    }
};

var changeImageLeft = function() {
    images[active].style.display = "none";
    // caption[active].style.opacity = "0";
    active--;
    if (active >= 0){
        images[active].style.display = "blocks";
        // caption[active].opacity = "1";
        // caption[active].style.opacity = "1";
        // caption[active].style.transitionDelay = "3s";
    } else{
        active = images.length - 1;
        images[active].style.display = "blocks";
        // caption[active].opacity = "1";
        // caption[active].style.opacity = "1";
        // caption[active].style.transitionDelay = "3s";
    }
};

for(var i=0;i<buttonImgRight.length;i++){
    buttonImgRight[i].addEventListener('click', changeImageRight, false);
}

for(var i=0;i<buttonImgLeft.length;i++){
    buttonImgLeft[i].addEventListener('click', changeImageLeft, false);
}

// $(".slider-image-overlay-left").click(function(){
//     $("slider-caption").animate({
//         // width: "70%",
//         opacity: 1,
//         // marginLeft: "0.6in",
//         // fontSize: "3em",
//         // borderWidth: "10px"
//     }, 500 );
// });

// $(".slider-image-overlay-left").click(function () {
//
//     $(".slider-caption").show("slow");
//
// });