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

	 /* $('#register').onSubmit(function(){*/
	 	$("#submit").click(function(){
		var first_name=$("#first_name").val();
		 // alert(first_name);
		var last_name=$("#last_name").val();
		var email=$("#email").val();
		var company_name=$("#company_name").val();
	     var dataString = '&first_name='+ first_name+'&last_name='+ last_name + '&email=' + email + '&company_name=' + company_name;
		// alert(dataString);
		$.ajax({
			  type: "POST",
			  url: "/registrations#create",
			  data: dataString,
			  // cache: false,
			  // alert(data);
			  success: function(data){
			  	// alert("hi");
 			     // $('.signup').html("<div id='message'></div>");
 			     $('.signup').html("<h2>Registration Form Submitted!</h2>");
 			     // .append("<p>We will be in touch soon.</p>")
 			   //  // .hide()
 			   //  // .fadeIn(1500, function() {
 			   //  //   $('#message').append("<img id='checkmark' src='images/check.png' />");
 			   //  // });
   				// }
			  	
			   },
			  //  error: function(xhr){
			   	 
				 // var errors = $.parseJSON(xhr.responseText).errors;
				 // alert(xhr.);
				 // console.log(xhr);
			  //  	 $('.signup').html("<h2>Errors!</h2>");
			  //  } 
			  error: function (XMLHttpRequest, textStatus, errorThrown) {
        		alert(errorThrown);
        		// if (XMLHttpRequest.responseText.startsWith("<html>"))
        		var arr=XMLHttpRequest.responseText;
           		 $(".signup").html(arr[0]);
    }
		});
   			// return false;
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
