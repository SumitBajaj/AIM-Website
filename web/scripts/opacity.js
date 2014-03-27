$(document).ready(function(){

	$(".nav li a").on('click', function(){
	  var clickIndex = $(this).parent().index();
	  $(".nav li").css('opacity', '1');
	  $(".nav li:not(:nth-child("+(clickIndex+1)+"))").css('opacity', '0.5');
	});
});