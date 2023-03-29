(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function() {
		$('.featured-carousel').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:30,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:2
	      },
	      1000:{
	        items:3
	      }
	    }
		});

	};
	carousel();

	var carousel = function() {
		$('.featured-carousel-head').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:30,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});

	};
	carousel();

	
})(jQuery);

	function pesan_enable(status)
	{
	//alert(status);
	status=!status;	
	document.btnCheck.pesan_enable.disabled = status;
	}
	//  End -->

	// Demo using plain javascript
	var button = document.getElementById("Button");
	var clickBtn = document.getElementById('click');

	// Disable the button on initial page load
	button.disabled = true;

	//add event listener
	clickBtn.addEventListener('click', function(event) {
		button.disabled = !button.disabled;
	});

	button.addEventListener('click', function(event) {
		alert('Enabled!');
	});



	// function verifyAnswer() {
	// 	//get the selected value from the dropdown list
	// 	var mylist = document.getElementById("myAns");
	// 	var result = mylist.options[mylist.selectedIndex].text;
	// 	  if (result == 'No') {
	// 		  //disable all the radio button 
	// 		document.getElementById("csharp").disabled = true;
	// 		  document.getElementById("js").disabled = true;
	// 		  document.getElementById("angular").disabled = true;
	// 	  } else {
	// 		  //enable all the radio button
	// 		  document.getElementById("csharp").disabled = false;
	// 		  document.getElementById("js").disabled = false;
	// 		  document.getElementById("angular").disabled = false;
	// 	  }
	// 	}
	function verifyAnswer() {
		//disable all the radio button 
		docment.getElementById("btn-pesan").disabled = true;
		
		//get the value if checkbox is checked
		var dev = document.getElementById("pilihan1").checked;
		if (dev == true) {
		//enable all the radio button
		docment.getElementById("btn-pesan").disabled = false;
	   }
	   //get the value if checkbox is checked
		var dev2 = document.getElementById("pilihan2").checked;
		if (dev2 == true) {
		//enable all the radio button
		docment.getElementById("btn-pesan").disabled = false;
		}
	}