$(document).ready( function(){

	if( $("#contact-background").length ) {

		$(".content").backstretch(SITEURL + "img/BitwiseMuralDist_photo-bw.jpg");
	}

	/*
	$('#current-courses').easyModal();
	$('.button-signup, .yellow-button, .middle-button-signup, .open-modal').click( function(e) {
		e.preventDefault();
		$('#current-courses').trigger('openModal');	
		
	})
	*/

	$('#current-courses .subtitle').not('.only').siblings('form').hide();
	$('#current-courses .subtitle').click(function(){



		$(this).siblings('form').toggle();

	});
	

});
