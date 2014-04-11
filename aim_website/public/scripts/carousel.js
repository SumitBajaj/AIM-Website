$(".carousel").each(function(){
	var $carousel = $(this),
		$display = $carousel.find('.carousel-display');
	
	var selectThumb = function($img){
		var src = $img.data('src') || $img.attr('src'); 
		$display.find('img').attr('src', src);
		
		$carousel.find('.item').find('.active').removeClass('active');
		$img.parent().addClass('active');
	};
  				
	// 'slide' = this event fires immediately when the slide instance method is invoked.
	$carousel.on('slide.carousel', function (event) {
		var $item = $carousel.find('.carousel-inner > .item.active');				
		var $itemThumb = $item.find('.thumbnail.active').parent();				
		var $nextItem = $(event.relatedTarget);				
		
		if($display.length){
			if($itemThumb.is(':first-child') && event.direction == 'right'){
					selectThumb($nextItem.find('.thumbnail').eq(0));
      } else if($itemThumb.is(':last-child') && event.direction == 'left'){
					selectThumb($nextItem.find('.thumbnail').eq(0));
      } else {
        // center
				if(event.direction == 'left'){
					selectThumb($itemThumb.next().find('img').eq(0));
				} else {
					selectThumb($itemThumb.prev().find('img').eq(0));
				}						
				return false;
			}
		}
	});
	
	// Thumbs Click
	if($display.length){
		$carousel.find('a.thumbnail').on('click', function(e){
			selectThumb($(this).find('img'));
			e.preventDefault();
		});
	}
});