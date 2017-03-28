jQuery(window).scroll(function (event) {
    var scroll = jQuery(window).scrollTop();
	var events_top = jQuery('.events-slider').offset();
	var events_top_two = jQuery('.events-slider-two').offset();
	var events_top_three = jQuery('.events-slider-three').offset();
	var height = jQuery('.events-nav-bar-wrapper').height();
	if(scroll >= (events_top['top'])){
		jQuery('.events-nav-bar-wrapper').css('position', 'fixed').css('top' , 0);
	}else{
		jQuery('.events-nav-bar-wrapper').css('position', 'absolute').css('top' , 0);
	}
	
	if(scroll >= (events_top_two['top'] - height) && scroll <= (events_top_three['top'] - height)){
		jQuery('.events-nav-bar-wrapper').css('background', '#032b2a');
		jQuery('.event-tab-borders').css('border-left', '1px solid #4f6b6a').css('border-right', '1px solid #4f6b6a');
		jQuery('.first-tab-underline').css('margin-left', 'calc(50% - 44px)');
		jQuery('.video-mapping-tab h2').css('color', '#687676');
		jQuery('.event-tab-borders h2').css('color', '#ffffff');
		jQuery('.event-recording-tab h2').css('color', '#687676');
	}
	else if(scroll >= (events_top_three['top'] - height)){
		jQuery('.events-nav-bar-wrapper').css('background', '#580b1f');
		jQuery('.event-tab-borders').css('border-left', '1px solid #6f5260').css('border-right', '1px solid #6f5260');
		jQuery('.first-tab-underline').css('margin-left', 'calc(83% - 44px)');
		jQuery('.video-mapping-tab h2').css('color', '#ada5a8');
		jQuery('.event-tab-borders h2').css('color', '#ada5a8');
		jQuery('.event-recording-tab h2').css('color', '#ffffff');
	}
	else{
		jQuery('.events-nav-bar-wrapper').css('background', '#250639');
		jQuery('.event-tab-borders').css('border-left', '1px solid #b151a1').css('border-right', '1px solid #b151a1');
		jQuery('.first-tab-underline').css('margin-left', 'calc(33% / 2 - 44px)');
		jQuery('.video-mapping-tab h2').css('color', '#ffffff');
		jQuery('.event-tab-borders h2').css('color', '#aaa5af');
		jQuery('.event-recording-tab h2').css('color', '#aaa5af');
	}
	
	jQuery('.video-mapping-tab').on('click' , function() {
		jQuery(window).scrollTop(events_top['top']);	
	});
	jQuery('.event-tab-borders').on('click' , function() {
		jQuery(window).scrollTop(events_top_two['top'] - height + 3);
	});
	jQuery('.event-recording-tab').on('click' , function() {
		jQuery(window).scrollTop(events_top_three['top'] - height + 3);
	});

	
	
});
