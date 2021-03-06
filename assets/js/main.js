function manageNav() {
	var csidepanel = document.getElementById("mySidepanel");
	var cbody = document.getElementById("bodyId");
	var cmain = document.getElementById ("mainId");
	var cnavbar = document.getElementById("navId");
	var exist = false;

	if (window.getComputedStyle(csidepanel).left === "0px") {
		exist = true;
	}
	if (!exist) {
		csidepanel.style.left = "0px";
		csidepanel.style.marginTop = "0px";
		csidepanel.style.transition = "all 300ms ease-in-out";
		
		cbody.style.backgroundColor = "black";
		// cbody.style.position = "fixed";

		cmain.style.opacity = "0.5";
		cmain.style.transition = "all 300ms ease-in-out";

		// cnavbar.style.opacity = "0.5";
		// cnavbar.style.transition = "all 300ms ease-in-out";
		
		exist = true;
		return 0;
	}
	if (exist) {
		csidepanel.style.left = "-1000px";
		csidepanel.style.transition = "all 300ms ease-in-out";

		cmain.style.backgroundColor = "#F9FAFC";
		cmain.style.transition = "all 300ms ease-in-out";
		cmain.style.opacity = "1";

		cnavbar.style.backgroundColor = "#3F51B5";
		cnavbar.style.transition = "all 300ms ease-in-out";
		cnavbar.style.opacity = "1";
		
		exist = false;
		return 0;
	}
}
// THERE IS HTML5 Form Validation
// function checkForm(form)
// {
	// var $form = $("#my-form"),
    // $errorMsg = $("<span class='error'>This field is required..!!</span>");

// }

$(() => {
	// ====== [BEGIN] floating-placeholder ======
    function initTricks() {
        var labels = $('.floating-placeholder label');
        labels.each(function(i) {
            var ph = $(labels[i])
                .siblings('input')
                .first()
                .attr('placeholder');
            $(labels[i]).html(ph);
        });
    }
    $('.floating-placeholder input').keyup(function() {
        var input = $(this).val(); 
        if(input) $(this).parent().addClass('float');
        else $(this).parent().removeClass('float');
    });
    $('#my-form').submit(function(e) {
        e.preventDefault();
	});
	
	initTricks();

	var $form = $("#my-form");
    
	$("#submit").on("click", function () {
		
		// If any field is blank, we don't submit the form
		var toReturn = true;
		$("input", $form).each(function () {
			// If our field is blank
			if ($(this).val() == "") {
				// Add an error message
				if (!$(this).data("error")) {
					var $errorMsg = $("<span class='error'>Please specify the " + this.id + "</span>");
					$(this).data("error", $errorMsg.clone().insertAfter($(this)));
				}
				toReturn = false;
			}
			// If the field is not blank
			else {
				// Remove the error message 
				if ($(this).data("error")) {
					$(this).data("error").remove();
					$(this).removeData("error");
				}
			}
		});
		return toReturn;
	});
   // ====== [END] floating-placeholder ======
		// function openNav() {
		// 	document.getElementById("mySidepanel").style.width = "300px";
		// }

		// function closeNav() {
		// 	document.getElementById("mySidepanel").style.width = "0";
		// }
	
	// ====== [BEGIN] Owl Carousel ======
	// $('#how-it-works .owl-carousel').owlCarousel({
	// 	nav: true,
	// 	loop: true,
	// 	navText: [
	// 		'<svg width="49" height="38" viewBox="0 0 49 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.23223 17.2322C0.255924 18.2085 0.255924 19.7915 1.23223 20.7678L17.1421 36.6777C18.1184 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53553 19L20.6777 4.85786C21.654 3.88155 21.654 2.29864 20.6777 1.32233C19.7014 0.34602 18.1184 0.34602 17.1421 1.32233L1.23223 17.2322ZM49 16.5L3 16.5V21.5L49 21.5V16.5Z" fill="#EBB268"/></svg>',
	// 		'<svg width="49" height="38" viewBox="0 0 49 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M47.7678 20.7678C48.7441 19.7915 48.7441 18.2085 47.7678 17.2322L31.8579 1.32233C30.8816 0.34602 29.2986 0.34602 28.3223 1.32233C27.346 2.29864 27.346 3.88155 28.3223 4.85786L42.4645 19L28.3223 33.1421C27.346 34.1184 27.346 35.7014 28.3223 36.6777C29.2986 37.654 30.8816 37.654 31.8579 36.6777L47.7678 20.7678ZM0 21.5L46 21.5V16.5L0 16.5L0 21.5Z" fill="#EBB268"/></svg>'
	// 	],
	// 	items: 1
	// });
	// $('#gallery .owl-carousel').owlCarousel({
	// 	responsiveClass: true,
	// 	margin: 66,
	// 	responsive: {
	// 		0: {
	// 			items: 1
	// 		},
	// 		992: {
	// 			items: 3
	// 		}
	// 	}
	// });
	// $('#testimonials .owl-carousel').owlCarousel({
	// 	nav: true,
	// 	margin: 10,
	// 	navText: [
	// 		'Previous',
	// 		'Next'
	// 	],
	// 	items: 1
	// });
	// ====== [END] Owl Carousel ======

	// ====== [BEGIN] Toggle the sidebar on mobile version ======
	// const btnMenu = document.getElementById("menu-icon-trigger");
	// btnMenu.addEventListener("click", (e) => {
	// 	e.preventDefault();
	// 	document.querySelector('.menu-icon-wrapper').classList.toggle('open');
	// 	document.querySelector('.nav-content').classList.toggle('is-active');
	// });
	// ====== [END] Toggle the sidebar on mobile version ======

	// ====== [BEGIN] navbar animation on scroll ======
	// $(window).on('scroll', () => {
	// 	var navmenu = $('.navbar');
	// 	if ($(window).scrollTop() < 30)
	// 		navmenu.removeClass("on-scroll");
	// 	else
	// 		navmenu.addClass('on-scroll');
	// });
	// ====== [END] navbar animation on scroll ======

	// Before & After Carousel auto loop
	// $('#carousel-before-after').carousel({
	// 	interval: 4000
	// });

	// ====== [BEGIN] Preview mode ======
	// $(".preview img").hide();
	// $(".pic-type").click(() => {
	// 	if ($('#type-anime').is(':checked')) {
	// 		$(".preview img:last-child").hide();
	// 		$(".preview img:first-child").show();
	// 		setTimeout(() => {
	// 			$(".preview img:first-child").hide();
	// 		}, 3000);
	// 	}
	// 	if ($('#type-chibi').is(':checked')) {
	// 		$(".preview img:first-child").hide();
	// 		$(".preview img:last-child").show();
	// 		setTimeout(() => {
	// 			$(".preview img:last-child").hide();
	// 		}, 3000);
	// 	}
	// });
	// ====== [END] Preview mode ======
});

