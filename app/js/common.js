$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


var theToggle = document.getElementById('toggle');
var menu = document.querySelector('nav');

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}
	$(theToggle).click(function() {
		$(".nav").slideToggle();
		return false;
	});
theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}	

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('header').addClass('fixed animated fadeInDown');
     	$('.logo img').attr('src', 'img/logo_fix.png');
    } else {
     	$('.logo img').attr('src', 'img/logo.png');
        $('header').removeClass('fixed animated fadeInDown');

    }
});
});
