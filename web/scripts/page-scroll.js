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
                console.log("hash"+hash);
                //$('nav li:not('+hash+')').css('opacity','0.5');
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


     $(".visibleArrow a i").on('click', function(){
             var teamId = $(this).attr("id");
              //alert($(".visibleArrow a i").children("a").attr("href"));
            //   alert("hi");
           // alert(teamId);
                     $(".visible a").each(function () {
       tempId=$(this).attr("id");
              
             if (tempId == teamId) {

                 $(this).parent().css({ "opacity": "1" });
             }
             else {
                 $(this).parent().css({"opacity":"0.5"});
             }
    });
  });


});
//    function onScroll(event){
//     console.log("Inside scroll");
//     var scrollPos = $(document).scrollTop();
//     console.log("Scrollpos is:"+scrollPos);
//     $('.visible a').each(function () {
//         var currLink = $(this);
//         console.log("Current link:")
//         console.log(currLink);
//         var refElement = $(currLink.attr("href"));
//         console.log("refElement:")
//         console.log(refElement);
//         console.log(ref);
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('.nav .visible a').removeClass("active"); //added to remove active class from all a elements
//             currLink.addClass("active");
//         }
//         else{
//             currLink.removeClass("active");
//         }
//     });
// }
//     $("#body").scroll( function() {
//       alert("hi");
//     var value = $(this).scrollTop();
//     if ( value > 120 )
//         $(".visibleArrow").css("border","5px solid white");
//     else
//         $(".visibleArrow a").css("opacity", "0.5");
// });
//     


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

