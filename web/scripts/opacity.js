$(document).ready(function(){

	$(".visible a").on('click', function(){
		$(this).css('opacity','1')
               .closest('.visible')
               .siblings('.visible')
               .find('a')
               .css('opacity', '0.1')
	});
	

});