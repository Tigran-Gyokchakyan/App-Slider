window.addEventListener('load', function(){
    $('main').show();
});
var isPlaying = false;

function togglePlay() {
	if (isPlaying) {
		myAudio.pause()
	} else {
		myAudio.play();
	}
};
window.addEventListener('load', function(){
 $('#mus').click(function () {
	$('.musciicon').toggleClass("fa-volume-mute");
});
myAudio.onplaying = function () {
	isPlaying = true;
};
myAudio.onpause = function () {
	isPlaying = false;
};
	const leafshoes = document.querySelector('.leafshoes');
	const logoshows = document.querySelector('.logoshows');

	const leaf = document.querySelector('.leaf');
	const camleon = document.querySelector('.camleon');
	const leafslider = document.querySelector('.leafslider');
	const kkl_logo = document.querySelector('.kkl_logo');
	const game_logo = document.querySelector('.game_logo');
	const info3 = document.querySelector('.info');
	const infowin = document.querySelector('.infowin');
	const infowintext = document.querySelector('.infowintext');
	const winpic = document.querySelector('.winpic');
	const butterfly = document.querySelector('#butterfly');
	const upd = document.querySelector('.upd');

	let delayValue = 0.5;

	var tlleafshoes = new TimelineMax()
	  .to(leafshoes, 0.5, { opacity:0})
	  .to(leafshoes, 0.5, { opacity:1})
	var tllogoshows = new TimelineMax()
	  .to(logoshows, 0.5, { opacity:0})
	  .to(logoshows, 0.5, { opacity:1})
	var tlupd = new TimelineMax()
	  .to(upd, 0.5, { opacity:0})
	  .to(upd, 0.5, { opacity:1})

	TweenLite.from(leaf, 1, { x:-500, opacity:0, rotation:-20, delay:delayValue } );
	TweenLite.from(camleon, 1, { y:500, delay:(delayValue+=1) } );
	TweenLite.from(leafslider, 1, { x:500, rotation:-20, delay:(delayValue+=1) } );
	TweenLite.from(kkl_logo, 1, {opacity:0, scale:0.5, delay:(delayValue+=1) } );
	TweenLite.from(game_logo, 1, {opacity:0, scale:0.5, delay:(delayValue+=0.5) } );

  	var tlbutterfly = new TimelineMax({ repeat: 10, delay:(delayValue+=0.5) })
	  .to(butterfly, 3, { opacity:1, scale: 0.3, x:400, y:200, rotation:-50})
	  .to(butterfly, 3, { opacity:1, scale: 0.5, x:-100, y:-50, rotation:-80})
	  .to(butterfly, 3, { scale: 0.3, x:-400, y:-200, rotation:-20})
	  .to(butterfly, 3, { scale: 0.2, x:-1200, y:50, rotation:-120})
	  .to(butterfly, 2, { scale: 0.2, x:-1200, y:50, rotation:120})
	  .to(butterfly, 3, { scale: 0.3, x:300, y:20, rotation:80})
	  .to(butterfly, 3, { scale: 0.5, x:600, y:-150, rotation:50})
	  .to(butterfly, 3, { opacity:0,scale: 0.3, x:400, y:200, rotation:-50})
	 .repeat(-1);

	TweenLite.from(info3, 1, {opacity:0, scale:0.5, delay:(delayValue+=0.5) } );
	TweenLite.from(infowin, 1, {opacity:0, scale: 0.5, delay:(delayValue+=0.5) } );
	TweenLite.from(infowintext, 1, {opacity:0, scale: 0.5, delay:(delayValue+=0.5) } );
	TweenLite.from(winpic, 1, {opacity:0, scale: 0.5, delay:(delayValue+=0.2) } );



	var tlleaf = new TimelineMax({ repeat: 10, delay:(delayValue+=1) })
	  .to(leaf, 1, { rotation: 0, x:0, transformOrigin:"left top" })
	  .to(leaf, 1, { rotation: 5, x:-10})
	  .to(leaf, 1, { rotation: 0, x:0})
	  .repeat(-1);

	var tlinfo3 = new TimelineMax({ repeat: 10, delay:(delayValue+=0.5) })
	  .to(info3, 0.5, { scale: 1, opacity:1})
	  .to(info3, 1, { scale: 1.2, opacity:0.9})
	  .to(info3, 1.5, { scale: 1, opacity:1, ease: Bounce.easeOut})
	  .repeat(-1);

	var tlleafslider = new TimelineMax({ repeat: 10, delay:(delayValue+=1) })
	  .to(leafslider, 1, { rotation: 0, x:0, transformOrigin:"right top" })
	  .to(leafslider, 1, { rotation: 10, x:50})
	  .to(leafslider, 1, { rotation: 0, x:0})
	  .repeat(-1);

	var tlcamleon = new TimelineMax({ repeat: 10, delay:(delayValue+=1) })
	  .to(camleon, 1, { rotation: 0, y:0, transformOrigin:"right bottom" })
	  .to(camleon, 1, { rotation: 10, y:50})
	  .to(camleon, 1, { rotation: 0, y:0})
	  .repeat(-1);



  	var animation = bodymovin.loadAnimation({
	  container: document.getElementById('butterfly'),
	  path: 'json/butterfly.json',
	  renderer: 'svg/canvas/html',
	  loop: true,
	});

}, false);
$( "#main3" ).click(function() {
	$('.music2').css("display","flex");
	$('#downloadbg').css("display","flex");
	$('.mob').css("display","flex");
});
function togglePlay2() {
	if (isPlaying) {
		myAudio.pause();
	} else {
		myAudio.play();
	}
}
 $('#mus2').click(function () {
	$('.musciicon2').toggleClass("fa-volume-up");
	$('.musciicon2').toggleClass("fa-volume-mute");
});
myAudio.onplaying = function () {
	isPlaying = true;
};
myAudio.onpause = function () {
	isPlaying = false;
};
document.getElementById("main3").addEventListener('click', function(){
$('.music').fadeOut("slow");
const main3 = document.querySelector('#main3');
let delayValue = 0.5;
TweenLite.to(main3, 0.5, {css:{zIndex:0, opacity:0, display: 'none'}, delay:delayValue } );


$('.reload').hide();
$('.reload').click(function () {
	location.reload();
});

var sliderwrapper = document.querySelector('.slider-wrapper');
var $slider = $('.slider');
var $slickTrack = $('.slick-track');
var $slickCurrent = $('.slick-current');
var slideDuration = 900;

$slider.slick({
	speed: slideDuration,
	dots: false,
	waitForAnimate: true,
	useTransform: true,
	autoplay: true,
    fade: true,
	autoplaySpeed: 2500,
	pauseOnFocus: false, 
    pauseOnHover: false,
	cssEase: 'cubic-bezier(0.455, 0.030, 0.130, 1.000)'
});

$('#mus').click(function () {
	$('.musciicon').toggleClass("fa-volume-up");
	$('.musciicon').toggleClass("fa-volume-mute");
});

	    
var animation = bodymovin.loadAnimation({
  container: document.getElementById('airplane'),
  path: 'json/airplane.json',
  renderer: 'svg/canvas/html',
  loop: true,
  autoplay: true
});


var animationtwo = bodymovin.loadAnimation({
  container: document.getElementById('arrows'),
  path: 'json/arrows.json',
  renderer: 'svg/canvas/html',
  loop: true,
  autoplay: false
});


var animationtree = bodymovin.loadAnimation({
  container: document.getElementById('circle'),
  path: 'json/circle.json',
  renderer: 'svg/canvas/html',
  loop: true,
  autoplay: false
});

var animationfr = bodymovin.loadAnimation({
  container: document.getElementById('doodles'),
  path: 'json/doodles.json',
  renderer: 'svg/canvas/html',
  loop: true,
  autoplay: false
});

var animationff = bodymovin.loadAnimation({
  container: document.getElementById('stars'),
  path: 'json/stars.json',
  renderer: 'svg/canvas/html',
  loop: true,
  autoplay: false
});

var animationut = bodymovin.loadAnimation({
  container: document.getElementById('thumbs'),
  path: 'json/thumbs.json',
  renderer: 'svg/canvas/html',
  loop: true,
  autoplay: false
});

var ladybird = bodymovin.loadAnimation({
  container: document.getElementById('ladybird'),
  path: 'json/ladybird.json',
  renderer: 'svg/canvas/html',
  loop: true,
  autoplay: false
});

$slider.on('init', function (slick) {
	TweenMax.to($('.slick-track'), 0.9, {
		marginLeft: 0
	});
	TweenMax.to($('.slick-active'), 0.9, {
		zIndex: 2
	});
	var img = document.querySelector('.slick-active .myslide');
	var style = img.currentStyle || window.getComputedStyle(img, false);
	var bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
	$('#link').attr("href", bi);
});

$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {

	TweenMax.to($('.slick-track'), 0.9, {
		marginLeft: 0
	});
	var img = document.querySelector('.slick-active  .myslide'),
		style = img.currentStyle || window.getComputedStyle(img, false),
		bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
	$('#link').attr("href", bi);
});

$slider.on('afterChange', function (event, slick, currentSlide) {
	TweenMax.to($('.slick-track'), 0.9, {
		marginLeft: 0
	});
	$('.slick-slide').css('z-index', '1');
	TweenMax.to($('.slick-active'), 0.9, {
		zIndex: 2
	});
	var img = document.querySelector('.slick-active  .myslide'),
		style = img.currentStyle || window.getComputedStyle(img, false),
		bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
	$('#link').attr("href", bi);


    if(currentSlide === 0) {
		animation.play();
    }else if (currentSlide === 1) {
		animationtwo.play();
    }else if (currentSlide === 2) {
		animationtree.play();
    }else if (currentSlide === 3) {
		animationfr.play();
    }else if (currentSlide === 4) {
		animationff.play();
    }else if (currentSlide === 5) {
		animationut.play();
	$('.shobox').each(function(i) {
	    $(this).hide().delay(i * 500).fadeIn(1500);
	});
    }else if (currentSlide === 6) {
		ladybird.play();
    }
});
}, false);

$('.slick-prev').on('mouseleave', function () {
	TweenMax.to($('.slick-track'), 0.4, {
		marginLeft: 0,
		ease: Sine.easeInOut
	});
	TweenMax.to($('.slick-current'), 0.4, {
		ease: Sine.easeInOut
	});
});

$('.slick-next').on('mouseleave', function () {
	TweenMax.to($('.slick-track'), 0.4, {
		marginLeft: 0,
		ease: Quad.easeInOut
	});
	TweenMax.to($('.slick-current'), 0.4, {
		ease: Quad.easeInOut
	});
});




$('.slider').on('afterChange', function (event, slick, currentSlide) {
    if(currentSlide === 6) {
        $('.slick-prev').fadeOut("slow");
        $('.slick-next').fadeOut("slow");
        $('.music').fadeOut("slow");
        $('.music2').fadeOut("slow");
        $('#downloadbg').fadeOut("slow");
        $('.mob').fadeOut("slow");
        $('.logoshows2').css("display","flex").show(1000);
        $('.reload').show("slow");
        $('.slider').slickPause();
    }
});

window.onresize = function(event) {
window.addEventListener('load', function(){
    $('main').show();
});
var isPlaying = false;

function togglePlay() {
	if (isPlaying) {
		myAudio.pause()
	} else {
		myAudio.play();
	}
};
window.addEventListener('load', function(){
 $('#mus').click(function () {
	$('.musciicon').toggleClass("fa-volume-mute");
});
myAudio.onplaying = function () {
	isPlaying = true;
};
myAudio.onpause = function () {
	isPlaying = false;
};
	const leafshoes = document.querySelector('.leafshoes');
	const logoshows = document.querySelector('.logoshows');

	const leaf = document.querySelector('.leaf');
	const camleon = document.querySelector('.camleon');
	const leafslider = document.querySelector('.leafslider');
	const kkl_logo = document.querySelector('.kkl_logo');
	const game_logo = document.querySelector('.game_logo');
	const info3 = document.querySelector('.info');
	const infowin = document.querySelector('.infowin');
	const infowintext = document.querySelector('.infowintext');
	const winpic = document.querySelector('.winpic');
	const butterfly = document.querySelector('#butterfly');
	const upd = document.querySelector('.upd');

	let delayValue = 0.5;

	var tlleafshoes = new TimelineMax()
	  .to(leafshoes, 0.5, { opacity:0})
	  .to(leafshoes, 0.5, { opacity:1})
	var tllogoshows = new TimelineMax()
	  .to(logoshows, 0.5, { opacity:0})
	  .to(logoshows, 0.5, { opacity:1})
	var tlupd = new TimelineMax()
	  .to(upd, 0.5, { opacity:0})
	  .to(upd, 0.5, { opacity:1})

	TweenLite.from(leaf, 1, { x:-500, opacity:0, rotation:-20, delay:delayValue } );
	TweenLite.from(camleon, 1, { y:500, delay:(delayValue+=1) } );
	TweenLite.from(leafslider, 1, { x:500, rotation:-20, delay:(delayValue+=1) } );
	TweenLite.from(kkl_logo, 1, {opacity:0, scale:0.5, delay:(delayValue+=1) } );
	TweenLite.from(game_logo, 1, {opacity:0, scale:0.5, delay:(delayValue+=0.5) } );

  	var tlbutterfly = new TimelineMax({ repeat: 10, delay:(delayValue+=0.5) })
	  .to(butterfly, 3, { opacity:1, scale: 0.3, x:400, y:200, rotation:-50})
	  .to(butterfly, 3, { opacity:1, scale: 0.5, x:-100, y:-50, rotation:-80})
	  .to(butterfly, 3, { scale: 0.3, x:-400, y:-200, rotation:-20})
	  .to(butterfly, 3, { scale: 0.2, x:-1200, y:50, rotation:-120})
	  .to(butterfly, 2, { scale: 0.2, x:-1200, y:50, rotation:120})
	  .to(butterfly, 3, { scale: 0.3, x:300, y:20, rotation:80})
	  .to(butterfly, 3, { scale: 0.5, x:600, y:-150, rotation:50})
	  .to(butterfly, 3, { opacity:0,scale: 0.3, x:400, y:200, rotation:-50})
	 .repeat(-1);

	TweenLite.from(info3, 1, {opacity:0, scale:0.5, delay:(delayValue+=0.5) } );
	TweenLite.from(infowin, 1, {opacity:0, scale: 0.5, delay:(delayValue+=0.5) } );
	TweenLite.from(infowintext, 1, {opacity:0, scale: 0.5, delay:(delayValue+=0.5) } );
	TweenLite.from(winpic, 1, {opacity:0, scale: 0.5, delay:(delayValue+=0.2) } );



	var tlleaf = new TimelineMax({ repeat: 10, delay:(delayValue+=1) })
	  .to(leaf, 1, { rotation: 0, x:0, transformOrigin:"left top" })
	  .to(leaf, 1, { rotation: 5, x:-10})
	  .to(leaf, 1, { rotation: 0, x:0})
	  .repeat(-1);

	var tlinfo3 = new TimelineMax({ repeat: 10, delay:(delayValue+=0.5) })
	  .to(info3, 0.5, { scale: 1, opacity:1})
	  .to(info3, 1, { scale: 1.2, opacity:0.9})
	  .to(info3, 1.5, { scale: 1, opacity:1, ease: Bounce.easeOut})
	  .repeat(-1);

	var tlleafslider = new TimelineMax({ repeat: 10, delay:(delayValue+=1) })
	  .to(leafslider, 1, { rotation: 0, x:0, transformOrigin:"right top" })
	  .to(leafslider, 1, { rotation: 10, x:50})
	  .to(leafslider, 1, { rotation: 0, x:0})
	  .repeat(-1);

	var tlcamleon = new TimelineMax({ repeat: 10, delay:(delayValue+=1) })
	  .to(camleon, 1, { rotation: 0, y:0, transformOrigin:"right bottom" })
	  .to(camleon, 1, { rotation: 10, y:50})
	  .to(camleon, 1, { rotation: 0, y:0})
	  .repeat(-1);



  	var animation = bodymovin.loadAnimation({
	  container: document.getElementById('butterfly'),
	  path: 'json/butterfly.json',
	  renderer: 'svg/canvas/html',
	  loop: true,
	});

}, false);
$( "#main3" ).click(function() {
	$('.music2').css("display","flex");
	$('#downloadbg').css("display","flex");
	$('.mob').css("display","flex");
});
function togglePlay2() {
	if (isPlaying) {
		myAudio.pause();
	} else {
		myAudio.play();
	}
}
 $('#mus2').click(function () {
	$('.musciicon2').toggleClass("fa-volume-up");
	$('.musciicon2').toggleClass("fa-volume-mute");
});
myAudio.onplaying = function () {
	isPlaying = true;
};
myAudio.onpause = function () {
	isPlaying = false;
};
document.getElementById("main3").addEventListener('click', function(){
$('.music').fadeOut("slow");
const main3 = document.querySelector('#main3');
let delayValue = 0.5;
TweenLite.to(main3, 0.5, {css:{zIndex:0, opacity:0, display: 'none'}, delay:delayValue } );


$('.reload').hide();
$('.reload').click(function () {
	location.reload();
});

var sliderwrapper = document.querySelector('.slider-wrapper');
var $slider = $('.slider');
var $slickTrack = $('.slick-track');
var $slickCurrent = $('.slick-current');
var slideDuration = 900;

$slider.slick({
	speed: slideDuration,
	dots: false,
	waitForAnimate: true,
	useTransform: true,
	autoplay: true,
    fade: true,
	autoplaySpeed: 2500,
	pauseOnFocus: false, 
    pauseOnHover: false,
	cssEase: 'cubic-bezier(0.455, 0.030, 0.130, 1.000)'
});

$('#mus').click(function () {
	$('.musciicon').toggleClass("fa-volume-up");
	$('.musciicon').toggleClass("fa-volume-mute");
});

	    
var animation = bodymovin.loadAnimation({
  container: document.getElementById('airplane'),
  path: 'json/airplane.json',
  renderer: 'svg/canvas/html',
  loop: true,
  autoplay: true
});


var animationtwo = bodymovin.loadAnimation({
  container: document.getElementById('arrows'),
  path: 'json/arrows.json',
  renderer: 'svg/canvas/html',
  loop: true,
  autoplay: false
});


var animationtree = bodymovin.loadAnimation({
  container: document.getElementById('circle'),
  path: 'json/circle.json',
  renderer: 'svg/canvas/html',
  loop: true,
  autoplay: false
});

var animationfr = bodymovin.loadAnimation({
  container: document.getElementById('doodles'),
  path: 'json/doodles.json',
  renderer: 'svg/canvas/html',
  loop: true,
  autoplay: false
});

var animationff = bodymovin.loadAnimation({
  container: document.getElementById('stars'),
  path: 'json/stars.json',
  renderer: 'svg/canvas/html',
  loop: true,
  autoplay: false
});

var animationut = bodymovin.loadAnimation({
  container: document.getElementById('thumbs'),
  path: 'json/thumbs.json',
  renderer: 'svg/canvas/html',
  loop: true,
  autoplay: false
});

var ladybird = bodymovin.loadAnimation({
  container: document.getElementById('ladybird'),
  path: 'json/ladybird.json',
  renderer: 'svg/canvas/html',
  loop: true,
  autoplay: false
});

$slider.on('init', function (slick) {
	TweenMax.to($('.slick-track'), 0.9, {
		marginLeft: 0
	});
	TweenMax.to($('.slick-active'), 0.9, {
		zIndex: 2
	});
	var img = document.querySelector('.slick-active .myslide');
	var style = img.currentStyle || window.getComputedStyle(img, false);
	var bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
	$('#link').attr("href", bi);
});

$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {

	TweenMax.to($('.slick-track'), 0.9, {
		marginLeft: 0
	});
	var img = document.querySelector('.slick-active  .myslide'),
		style = img.currentStyle || window.getComputedStyle(img, false),
		bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
	$('#link').attr("href", bi);
});

$slider.on('afterChange', function (event, slick, currentSlide) {
	TweenMax.to($('.slick-track'), 0.9, {
		marginLeft: 0
	});
	$('.slick-slide').css('z-index', '1');
	TweenMax.to($('.slick-active'), 0.9, {
		zIndex: 2
	});
	var img = document.querySelector('.slick-active  .myslide'),
		style = img.currentStyle || window.getComputedStyle(img, false),
		bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
	$('#link').attr("href", bi);


    if(currentSlide === 0) {
		animation.play();
    }else if (currentSlide === 1) {
		animationtwo.play();
    }else if (currentSlide === 2) {
		animationtree.play();
        $('.slider').slickPause();
    }else if (currentSlide === 3) {
		animationfr.play();
    }else if (currentSlide === 4) {
		animationff.play();
    }else if (currentSlide === 5) {
		animationut.play();
	$('.shobox').each(function(i) {
	    $(this).hide().delay(i * 500).fadeIn(1500);
	});
    }else if (currentSlide === 6) {
		ladybird.play();
    }
});
}, false);

$('.slick-prev').on('mouseleave', function () {
	TweenMax.to($('.slick-track'), 0.4, {
		marginLeft: 0,
		ease: Sine.easeInOut
	});
	TweenMax.to($('.slick-current'), 0.4, {
		ease: Sine.easeInOut
	});
});

$('.slick-next').on('mouseleave', function () {
	TweenMax.to($('.slick-track'), 0.4, {
		marginLeft: 0,
		ease: Quad.easeInOut
	});
	TweenMax.to($('.slick-current'), 0.4, {
		ease: Quad.easeInOut
	});
});




$('.slider').on('afterChange', function (event, slick, currentSlide) {
    if(currentSlide === 6) {
        $('.slick-prev').fadeOut("slow");
        $('.slick-next').fadeOut("slow");
        $('.music').fadeOut("slow");
        $('.music2').fadeOut("slow");
        $('#downloadbg').fadeOut("slow");
        $('.mob').fadeOut("slow");
        $('.logoshows2').css("display","flex").show(1000);
        $('.reload').show("slow");
        $('.slider').slickPause();
    }
});
};