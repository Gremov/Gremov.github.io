!function(){function t(t){this.el=document.querySelector(t),this.init()}t.prototype={init:function(){this.wrapper=this.el.querySelector(".slider__list_wrap"),this.sliders=this.el.querySelectorAll(".slider__img"),this.buttonLeft=this.el.querySelector(".slider__controls_btn_left"),this.buttonRight=this.el.querySelector(".slider__controls_btn_right"),this.navLinks=this.el.querySelectorAll(".slider__buttons a"),this.index=0,this.total=this.sliders.length,this.setup(),this.actions()},slideTo:function(t){var i=this.sliders[t];i.style.opacity=1;for(var e=0;e<this.sliders.length;e++){var t=this.sliders[e];t!==i&&(t.style.opacity=0)}},highlightCurrentLink:function(t){for(var i=this,e=0;e<i.navLinks.length;++e){var n=i.navLinks[e];n.className=""}t.className="current"},setup:function(){for(var t=this,i=0;i<t.sliders.length;++i){var e=t.sliders[i],n=e.getAttribute("data-image");e.style.backgroundImage="url("+n+")"}for(var s=0;s<t.navLinks.length;++s){var l=t.navLinks[s];l.setAttribute("data-index",s)}},actions:function(){var t=this;t.buttonRight.addEventListener("click",function(){t.index++,t.buttonLeft.style.display="block",t.index==t.total&&(t.index=0),t.slideTo(t.index),t.highlightCurrentLink(t.navLinks[t.index])},!1),t.buttonLeft.addEventListener("click",function(){t.index--,t.buttonRight.style.display="block",t.index<0&&(t.index=t.total-1),t.slideTo(t.index),t.highlightCurrentLink(t.navLinks[t.index])},!1);for(var i=0;i<t.navLinks.length;++i){var e=t.navLinks[i];e.addEventListener("click",function(i){i.preventDefault();var e=parseInt(this.getAttribute("data-index"),10);t.index=e,0==t.index&&(t.index=0),t.index>0&&(t.buttonLeft.style.display="block"),t.index==t.total-1?t.index=t.total-1:t.buttonRight.style.display="block",t.slideTo(t.index),t.highlightCurrentLink(this)},!1)}}},document.addEventListener("DOMContentLoaded",function(){new t("#main__slider")})}();