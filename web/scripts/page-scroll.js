$(document).ready(function(){

	$(".nav li a").on('click', function(){
	  var clickIndex = $(this).parent().index();
	  $(".nav li").css('opacity', '1');
	  $(".nav li:not(:nth-child("+(clickIndex+1)+"))").css('opacity', '0.5');
	  $(".nav li:last-child").css('opacity', '1');
	});
	$("a").click(function(){
            if(this.hash){
                var hash = this.hash.substr(1);
                var $toElement = $("a[name="+hash+"]");
		        var toPosition = $toElement.position().top;
		        toPosition=toPosition-51;            
			      $("body, html").animate({
			        scrollTop: toPosition
			      }, 2000, "easeOutExpo");
	       
              return false;
            }

      });
     if(location.hash !="")
     {
		 var $toElement = $("a[name="+location.hash.replace('#','')+"]");
	      var toPosition = $toElement.position().top;
	      toPosition=toPosition-51;            
	      $("body, html").animate({
	        scrollTop: toPosition
	      }, 2000, "easeOutExpo");
	   
     }
        if(location.hash){
          var hash = location.hash;
          window.scroll(0,0);
          $("a[href="+hash+"]");
        }
});

// $(".nav li a").on("click", function () {
//     var teamId = $(this).attr("selectedTeamId");


//     $(".someclass").each(function () {
// tempId=$(this).attr("selectedTeamId");
        
//         if (tempId == teamId) {

//             $(this).css({ "opacity": "1" });
//         }
//         else {
//             $(this).css({"opacity":"0.1"});
//         }
//     });

//});