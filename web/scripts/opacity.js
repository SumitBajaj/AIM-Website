$(document).ready(function(){

	$(".nav li a").on('click', function(){
	  var clickIndex = $(this).parent().index();
	  $(".nav li").css('opacity', '1');
	  $(".nav li:not(:nth-child("+(clickIndex+1)+"))").css('opacity', '0.5');
	  $(".nav li:last-child").css('opacity', '1');
	});

// 	    $(".visibleArrow a i").on('click', function(){
//              var teamId = $(this).attr("id");
//               alert($(".visibleArrow a i").children("a").attr("href"));
//             // 	alert("hi");
//             alert(teamId);
//             			    $(".visible a").each(function () {
// 			  tempId=$(this).attr("id");
			        
// 			        if (tempId == teamId) {

// 			            $(this).css({ "opacity": "1" });
// 			        }
// 			        else {
// 			            $(this).css({"opacity":"0.1"});
// 			        }
//     });
// });

 	    $(".visibleArrow a i").on('click', function(){
 	    	//event.preventDefault();
 	    	console.log("link clicked");
 	    	/*var msg= $(".visibleArrow a").attr('matchid');
 	    	console.log(msg);*/

 	    });
	});

