// © Copyright 2014 - Cubic by Designesia 

jQuery(document).ready(function() {
// --------------------------------------------------
// paralax background
// --------------------------------------------------
	$window = jQuery(window);
   	jQuery('section[data-type="background"]').each(function(){
    var $bgobj = jQuery(this); // assigning the object
                    
    jQuery(window).scroll(function() {
	var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
	var coords = '50% '+ yPos + 'px';
	$bgobj.css({ backgroundPosition: coords });
		
	});
 	});
	document.createElement("article");
	document.createElement("section");
	
	jQuery('body').stellar();
	
// --------------------------------------------------
// looping background
// --------------------------------------------------
	 $(function(){
     	"use strict";
        var x = 0;
        setInterval(function(){
            x-=1;
            $('#section-testimonial').css('background-position', x + 'px 0');
        }, 50);
    })
	
	
// --------------------------------------------------
// init
// --------------------------------------------------
	function init_de(){
	jQuery('.de-team-list').each(function(){	
	
		 jQuery(this).find("img").on('load', function() {
				w = jQuery(this).css("width");
		 	   	h = jQuery(this).css("height");
			   	//nh = (h.substring(0, h.length - 2)/2)-48;
		 
				jQuery(this).parent().parent().find(".team-pic").css("height",h);
				jQuery(this).parent().parent().find(".team-desc").css("width",w);
			 	jQuery(this).parent().parent().find(".team-desc").css("height",h);
				jQuery(this).parent().parent().find(".team-desc").css("top",h);

			}).each(function() {
			  if(this.complete) $(this).load();
			});
	});

	jQuery(".de-team-list").hover(function() {
		 h = jQuery(this).find("img").css("height");
		 jQuery(this).find(".team-desc").stop(true).animate({'top': "0px"},350,'easeOutQuad');
		 jQuery(this).find("img").stop(true).animate({'margin-top': "-100px"},400,'easeOutQuad');
	},
    function() {
		 jQuery(this).find(".team-desc").stop(true).animate({'top': h},350,'easeOutQuad');
		 jQuery(this).find("img").stop(true).animate({'margin-top': "0px"},400,'easeOutQuad');
  	})
	
	// box fx
	
	jQuery('.box-fx').each(function(){	
		 w = jQuery(this).css("width");
		 h = jQuery(this).css("height");
		 //nh = (h.substring(0, h.length - 2)/2)-48;
		 
		 jQuery(this).find(".info").css("height",h);
		 jQuery(this).find(".info").css("width",w);
	 });
	 
	 
	jQuery(".box-fx").hover(function() {
		 h = jQuery(this).css("height");
		 jQuery(this).find(".front").stop(true).fadeTo(150,0);
		 jQuery(this).find(".info").stop(true).animate({'top': "0px"},500,'easeOutCubic');
	},
    function() {
		 jQuery(this).find(".front").stop(true).fadeTo(600,1);
		 jQuery(this).find(".info").stop(true).animate({'top': h},500,'easeOutCubic');
  	})
	
	
	// portfolio
	
		jQuery('.item .picframe').each(function(){	
		
		 jQuery(this).find("img").css("width","100%");
		 jQuery(this).find("img").css("height","auto");
		 
		 jQuery(this).find("img").on('load', function() {
				w = jQuery(this).css("width");
		 	   	h = jQuery(this).css("height");
			   	//nh = (h.substring(0, h.length - 2)/2)-48;
		 
				jQuery(this).parent().css("height",h);

			}).each(function() {
			  if(this.complete) $(this).load();
			});
		});
		
	// --------------------------------------------------
	// portfolio hover
	// --------------------------------------------------
	jQuery('.overlay').fadeTo(1, 0);
	// team hover
	jQuery(".item .picframe").hover(
	function() {
	 jQuery(this).parent().find(".overlay").width(jQuery(this).find("img").css("width"));
	 jQuery(this).parent().find(".overlay").height(jQuery(this).find("img").css("height"));
	 jQuery(this).parent().find(".overlay").stop(true).fadeTo(300, .9);
	 picheight = jQuery(this).find("img").css("height");
	 newheight = (picheight.substring(0, picheight.length - 2)/2)-48;
	 //alert(newheight);
	 jQuery(this).parent().find(".icon").stop(true).animate({'margin-top': newheight},300,'easeOutCubic');
	 
	 w = jQuery(this).find("img").css("width");
	 h = jQuery(this).find("img").css("height");
	 w = parseInt(w, 10);
	 h = parseInt(h, 10);
	 $scale = 1.2;
	 //alert(w);
	 
	jQuery(this).find("img").stop(true).animate({
            width:  w*$scale,
            height: h*$scale,
            'margin-left': -w*($scale - 1)/2,
            'margin-top':  -h*($scale - 1)/2
     }, 700,'easeOutQuad');

	},
    function() {
	 jQuery(this).parent().find(".icon").stop(true).animate({'margin-top': newheight + 100},300,'easeOutCubic');
	 jQuery(this).parent().find(".overlay").stop(true).fadeTo(300, 0);
	 jQuery(this).find("img").stop(true).animate({
            width:  '100%',
            height: '100%',
            'margin-left': 0,
            'margin-top': 0
     }, 700,'easeOutQuad');
  	})
	
	
	jQuery('.overlay').fadeTo(1, 0);
	// team hover
	}
	
	
	init_de();
	

	// --------------------------------------------------
	// preloader
	// --------------------------------------------------
	
	//calling jPreLoader function with properties
	jQuery('body').jpreLoader({
		splashID: "#jSplash",
		splashFunction: function() {  //passing Splash Screen script to jPreLoader
			jQuery('#jSplash').children('section').not('.selected').hide();
			jQuery('#jSplash').hide().fadeIn(800);
			
			timer = setInterval(function() {
				splashRotator();
			}, 1500);
		}
	}, function() {	//jPreLoader callback function
		clearInterval(timer);
		
			jQuery(function(){
			var v_url = document.URL;
			
			if (v_url.indexOf('#') != -1) {
			var v_hash = v_url.substring(v_url.indexOf("#")+1);
			
			if(jQuery('#' + v_hash).offset() != null)
			{
				jQuery('html, body').animate({	

					scrollTop: jQuery('#' + v_hash).offset().top - 70
				}, 200);
				return false;
			}
			}
	});	
			
			
	});
	
	<!-- End of jPreLoader script -->

	function splashRotator(){
		var cur = jQuery('#jSplash').children('.selected');
		var next = jQuery(cur).next();
		
		if(jQuery(next).length != 0) {
			jQuery(next).addClass('selected');
		} else {
			jQuery('#jSplash').children('section:first-child').addClass('selected');
			next = jQuery('#jSplash').children('section:first-child');
		}
			
		jQuery(cur).removeClass('selected').fadeOut(100, function() {
			jQuery(next).fadeIn(100);
		});
	}
	
	
// --------------------------------------------------
// function
// --------------------------------------------------
	
	video_autosize = function(){
		jQuery('.de-video-container').each(function() {
			height_1 = jQuery(this).css("height");
			height_2 = jQuery(this).find(".de-video-content").css("height");
			newheight = (height_1.substring(0, height_1.length - 2)-height_2.substring(0, height_2.length - 2))/2;
			jQuery(this).find('.de-video-overlay').css("height", height_1);
			jQuery(this).find(".de-video-content").animate({'margin-top': newheight},'fast');
		});
	}
	
	
// --------------------------------------------------
// sticky header
// --------------------------------------------------
	    
    jQuery(window).on("scroll", function() {
    	jQuery("header").addClass("clone", 1000, "easeOutBounce" );
    });
	
	window.onresize = function(event) {
		init_de();
		video_autosize();
		jQuery('#gallery').isotope('reLayout');
		
		var mq = window.matchMedia( "(min-width: 993px)" );
		var mx = window.matchMedia( "(max-width: 992px)" );
		
		if (mq.matches) {
			jQuery("#mainmenu").show();
		}		
		
		
		if (mx.matches) {
			if(mb==1){
				jQuery('#mainmenu').show();
				}else if(mb==0){
				jQuery('#mainmenu').hide();	
			}
		}
	};	
	

	function init() {
        window.addEventListener('scroll', function(e){
			
			if (window.matchMedia('(min-width: 998px)').matches) {
				var distanceY = window.pageYOffset || document.documentElement.scrollTop,
					shrinkOn = 0,
					header = document.querySelector("header");
				if (distanceY > shrinkOn) {
					classie.add(header,"smaller");
					jQuery('header').addClass("logo-smaller");
				} else {
					if (classie.has(header,"smaller")) {
						classie.remove(header,"smaller");
						jQuery('header').removeClass("logo-smaller");
					}

				}
			}
        });
    }
    window.onload = init();
	
// --------------------------------------------------
// prettyPhoto
// --------------------------------------------------
	jQuery("area[data-type^='prettyPhoto']").prettyPhoto();
	jQuery(".gallery:first a[data-type^='prettyPhoto']").prettyPhoto({animation_speed:'fast',theme:'pp_default',slideshow:3000, autoplay_slideshow: false});
	jQuery(".gallery:gt(0) a[data-type^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
		
	jQuery("#custom_content a[data-type^='prettyPhoto']:first").prettyPhoto({
		custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
		changepicturecallback: function(){ initialize(); }
	});
	jQuery("#custom_content a[data-type^='prettyPhoto']:last").prettyPhoto({
		custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div><div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
		changepicturecallback: function(){ _bsap.exec(); }
	});


// --------------------------------------------------
// owlCarousel
// --------------------------------------------------

	jQuery("#gallery-carousel").owlCarousel({
    items : 4,
    navigation : false,
	pagination : false,
    });
	
	jQuery("#testimonial-carousel").owlCarousel({
    items : 3,
    navigation : false,
    });
	
	jQuery("#logo-carousel").owlCarousel({
    items : 6,
    navigation : false,
	pagination : false,
	autoPlay : true
    });
	
	jQuery("#contact-carousel").owlCarousel({
    items : 1,
	singleItem:true,	
    navigation : false,
	pagination : false,
	autoPlay : true,
    });
	
	
	jQuery(".text-slider").owlCarousel({
    items : 1,
	singleItem:true,	
    navigation : false,
	pagination : false,
	autoPlay : 2500,
	transitionStyle : "fade",
    });
	
	jQuery(".blog-slide").owlCarousel({
    items : 1,
	singleItem:true,	
    navigation : false,
	pagination : false,
	autoPlay : true,
    });
	
	// Custom Navigation owlCarousel
	$(".next").click(function(){
		$(this).parent().parent().find('.blog-slide').trigger('owl.next');
	});
	$(".prev").click(function(){
		$(this).parent().parent().find('.blog-slide').trigger('owl.prev');
	});

	
// --------------------------------------------------
// scroll to top
// --------------------------------------------------
	jQuery().UItoTop({ easingType: 'easeOutQuart' });
	
	
// --------------------------------------------------
// custom positiion
// --------------------------------------------------
	$doc_height = jQuery(window).innerHeight(); 
	jQuery('#homepage #content.content-overlay').css("margin-top", $doc_height);
	jQuery('.full-height').css("height", $doc_height);
	var picheight = jQuery('.center-y').css("height");
	picheight = parseInt(picheight, 10);
	jQuery('.center-y').css('margin-top', (($doc_height - picheight)/2)-90);
	jQuery('.full-height .de-video-container').css("height",$doc_height);
	

	
	

	
	
	
	

// --------------------------------------------------
// team hover
// --------------------------------------------------
	jQuery(".team-list").hover(
	function() {
	 jQuery(this).find("img.pic-hover").stop(true).fadeTo(150,1);

	},
    function() {
	 jQuery(this).find("img.pic-hover").stop(true).fadeTo(150,0);
  	})
	
	
// --------------------------------------------------
// feature box hover
// --------------------------------------------------
	jQuery(".feature-box-small-icon").hover(
	function() {
	 jQuery(this).find("i").addClass("hover");	
	 jQuery(this).find(".fa").addClass("animated swing");
	},
    function() {
	 jQuery(this).find("i").removeClass("hover");	
	 jQuery(this).find(".fa").removeClass("animated swing");
  	})
	
// --------------------------------------------------
// blog list hover
// --------------------------------------------------
	jQuery(".blog-list").hover(
	function() {	 
	 v_height = jQuery(this).find(".blog-slide").css("height");
	 v_width = jQuery(this).find(".blog-slide").css("width");
	 newheight = (v_height.substring(0, v_height.length - 2)/2)-40;
	 jQuery(this).find(".owl-arrow").css("margin-top",newheight);
	  jQuery(this).find(".owl-arrow").css("width",v_width);
	  jQuery(this).find(".owl-arrow").fadeTo(150,1);
	 //alert(v_height);
	},
    function() {
	 jQuery(this).find(".owl-arrow").fadeTo(150,0);
	 
  	})
	
//  logo carousel hover
	jQuery("#logo-carousel img").hover(
	function() {
	 jQuery(this).fadeTo(150,.5);
	},
    function() {
	 jQuery(this).fadeTo(150,1);
	 
  	})
	
	
	jQuery(window).load(function() {
			
	video_autosize();	
		
// --------------------------------------------------
// filtering gallery
// --------------------------------------------------
	var $container = jQuery('#gallery');
		$container.isotope({
			itemSelector: '.item',
			filter: '*',
	});
	jQuery('#filters a').click(function(){
		var $this = jQuery(this);
		if ( $this.hasClass('selected') ) {
			return false;
			}
		var $optionSet = $this.parents();
		$optionSet.find('.selected').removeClass('selected');
		$this.addClass('selected');
				
		var selector = jQuery(this).attr('data-filter');
		$container.isotope({ 
		filter: selector,
	});
	return false;
	});
		
	
// --------------------------------------------------
// revolution slider
// --------------------------------------------------
	var revapi;

  	revapi = jQuery('#revolution-slider').revolution({
	delay:15000,
	startwidth:1170,
	startheight:500,
	hideThumbs:10,
	fullWidth:"off",
	fullScreen:"on",
	fullScreenOffsetContainer: "",
	touchenabled:"on",
	navigationType:"none",
    dottedOverlay:""
	});
	
					
// --------------------------------------------------
// flexslider
// --------------------------------------------------
	  jQuery('.blog-slider.flexslider').flexslider({
		animation: "slide",
		controlNav: false,
		slideshow: false
	  });
	});
	

// --------------------------------------------------
// tabs
// --------------------------------------------------
	jQuery('.de_tab').find('.de_tab_content div').hide();
	jQuery('.de_tab').find('.de_tab_content div:first').show();
	
	jQuery('.de_nav li').click(function() {
		jQuery(this).parent().find('li span').removeClass("active");
		jQuery(this).find('span').addClass("active");
		jQuery(this).parent().parent().find('.de_tab_content div').hide();
	
		var indexer = jQuery(this).index(); //gets the current index of (this) which is #nav li
		jQuery(this).parent().parent().find('.de_tab_content div:eq(' + indexer + ')').fadeIn(); //uses whatever index the link has to open the corresponding box 
	});
	
	
// --------------------------------------------------
// tabs
// --------------------------------------------------
	jQuery('.de_review').find('.de_tab_content div').hide();
	jQuery('.de_review').find('.de_tab_content div:first').show();
	jQuery('.de_review').find('.de_nav li').fadeTo(150,.5);
	jQuery('.de_review').find('.de_nav li:first').fadeTo(150,1);
	
	jQuery('.de_nav li').click(function() {
		jQuery(this).parent().find('li').removeClass("active");
		jQuery(this).parent().find('li').fadeTo(150,.5);
		jQuery(this).addClass("active");
		jQuery(this).fadeTo(150,1);	
		jQuery(this).parent().parent().find('.de_tab_content div').hide();
	
		var indexer = jQuery(this).index(); //gets the current index of (this) which is #nav li
		jQuery(this).parent().parent().find('.de_tab_content div:eq(' + indexer + ')').fadeIn(); //uses whatever index the link has to open the corresponding box 
	});
	
	
// --------------------------------------------------
// toggle
// --------------------------------------------------
	jQuery(".toggle-list h2").addClass("acc_active");
	jQuery(".toggle-list h2").toggle(
	function() {
	 jQuery(this).addClass("acc_noactive");
     jQuery(this).next(".ac-content").slideToggle(200);
	},
    function() {
	 jQuery(this).removeClass("acc_noactive").addClass("acc_active");
	 jQuery(this).next(".ac-content").slideToggle(200);
  	})
	
	var mb;

// --------------------------------------------------
// navigation for mobile
// --------------------------------------------------
	jQuery('#menu-btn').toggle(function () {
    	jQuery('#mainmenu').show();
		mb = 1;
	},function(){
		jQuery('#mainmenu').hide();	
		mb = 0;	
	})
	
	
// one page navigation
	      /**
         * This part causes smooth scrolling using scrollto.js
         * We target all a tags inside the nav, and apply the scrollto.js to it.
         */
		 
        jQuery("#homepage nav a").click(function(){
			
			var v_url = this.hash;
			
			if (v_url.indexOf('#') != -1) {
			var v_hash = v_url.substring(v_url.indexOf("#")+1);
			
				if (window.matchMedia('(max-width: 767px)').matches) {
					n = -1;
				} else {
					n = 69
				}

				jQuery('html, body').animate({					
				scrollTop: jQuery('#' + v_hash).offset().top - n
				}, 400, 'easeInOutQuint');
				return false;
			}
        });
		
		
		 

		
		jQuery(".btn").click(function(evn){
			
			if (this.href.indexOf('#') != -1) {
            evn.preventDefault();
            jQuery('html,body').scrollTo(this.hash, this.hash); 
			}
        });
		
		jQuery('.de-gallery .item .icon-info').click(function(){
			jQuery('.page-overlay').show();
			url = jQuery(this).attr("data-value");
			
			jQuery("#loader-area .project-load").load(url, function() {
			jQuery("#loader-area").slideDown(500,function(){
				jQuery('.page-overlay').hide();
			jQuery('html, body').animate({
				scrollTop: jQuery('#loader-area').offset().top - 70
			}, 500, 'easeOutCirc');
			
		//
			
			jQuery(".image-slider").owlCarousel({
			items : 1,
			singleItem:true,	
			navigation : false,
			pagination : true,
			autoPlay : false,
			});
			
			jQuery(".project-view").fitVids();
			
			jQuery('#btn-close-x').click(function(){
			jQuery("#loader-area").slideUp(500,function(){
			jQuery('html, body').animate({				
				scrollTop: jQuery('#section-portfolio').offset().top - 70
			}, 500, 'easeOutCirc');
			});

			return false;			
				
				});  
			
			});			
		}); 
		});   
		

// --------------------------------------------------
// custom page with background on side
// --------------------------------------------------
	jQuery('.side-bg').each(function(){	
		jQuery(this).find(".image-container").css("height",jQuery(this).find(".image-container").parent().css("height"));
	});
		
	var target = $('.center-y');
	var targetHeight = target.outerHeight();
	
	$(document).scroll(function(e){
		var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
		if(scrollPercent >= 0){
			target.css('opacity', scrollPercent);
		}
	});
	
	jQuery(document).scroll(function() {
		jQuery('#homepage nav li a').each(function(){
			if (this.href.indexOf('#') != -1) {
			var href = jQuery(this).attr('href');
			if(jQuery(href).offset() != null)
			{
				if(!jQuery(href).offset().top)
					if(jQuery(window).scrollTop() > jQuery(href).offset().top - 140){
						jQuery('nav li a').removeClass('active');
						jQuery(this).addClass('active');
					}
				}
			}
		});
		
	});
});


// --------------------------------------------------
// css animation
// --------------------------------------------------
	var v_count = '0';

	jQuery(window).load(function() {
				
		jQuery('.animated').fadeTo(0,0);
		jQuery('.animated').each(function(){
		var imagePos = jQuery(this).offset().top;
		var timedelay = jQuery(this).attr('data-delay');
		
		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+300) {
				jQuery(this).fadeTo(1,500);
				$anim = jQuery(this).attr('data-animation');
			}
		});
		

	});
		
	jQuery(window).scroll(function() {
		
// --------------------------------------------------
// counter
// --------------------------------------------------
	
		jQuery('.timer').each(function(){
		var imagePos = jQuery(this).offset().top;
				
		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+500 && v_count=='0') {		

					  jQuery(function ($) {

					  // start all the timers
					  jQuery('.timer').each(count);
					  
					  
					  function count(options) {
					 	v_count = '1';
						var $this = jQuery(this);
						options = $.extend({}, options || {}, $this.data('countToOptions') || {});
						$this.countTo(options);
					  }
					});
					
				}
			});
		
// --------------------------------------------------
// progress bar
// --------------------------------------------------
		jQuery('.de-progress').each(function(){
		var pos_y = jQuery(this).offset().top;
		var value = jQuery(this).find(".progress-bar").attr('data-value');
		
		var topOfWindow = jQuery(window).scrollTop();
			if (pos_y < topOfWindow+500) {		
				jQuery(this).find(".progress-bar").animate({'width': value },"slow");
			}
		});
	
	
		jQuery('.animated').each(function(){
		var imagePos = jQuery(this).offset().top;
		var timedelay = jQuery(this).attr('data-delay');
		
		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+500) {		
				jQuery(this).delay(timedelay).queue(function(){
					jQuery(this).fadeTo(1,500);
					$anim = jQuery(this).attr('data-animation');
					jQuery(this).addClass($anim).clearQueue();
				});
				
			}
		});
	
	});


