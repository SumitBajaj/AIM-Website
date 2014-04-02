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
	$('#first_name').blur(function () {
            if ($('#first_name').val() == '' || $('#first_name').val() == 'First Name') {
                alert("Please enter your first name \n");
                return false;
            }

        });
		$('#last_name').blur(function () {
            if ($('#last_name').val() == '' || $('#last_name').val() == 'Last Name') {
                alert("Please enter your last name \n");
                return false;
            }

        });
        	$('#email').blur(function () {
            if ($('#email').val() == '' || (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) || x=='Your E-mail Address') {
                alert("Please enter your email address \n");
                return false;
            }

        });
        		$('#company_name').blur(function () {
            if ($('#company_name').val() == '' || $('#company_name').val() == 'Company Name') {
                alert("Please enter your company name \n");
                return false;
            }

        });

		 $('#register').on('submit', function(e) {

        $.post('/registrations#create', $(this).serialize(), function (data) {
        	$(".signup").html("<h2>Regitration Form Submitted</h2>");

        }).error(function (XMLHttpRequest, textStatus, errorThrown) {
        	var errors = $.parseJSON(XMLHttpRequest.responseText);
        	alert(errors);
        	$(".signup").html(errors);
        });
        e.preventDefault();
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

function validateForm()
{
	var valid = true;
	var x = document.getElementById('email').value;
    var atpos=x.indexOf("@");
    var dotpos=x.lastIndexOf(".");
    errorMessage = "";

    if ($('#first_name').val() == '') {
       errorMessage  = "please enter your first name \n";
       valid = false;
    }

    if ($('#last_name').val() == '') {
       errorMessage += "please enter your last name\n";
       valid = false;
    } 
  
    if ($('#email').val() == '' || (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) || x=='Your E-mail Address') {      
       errorMessage += "please enter valid email address\n";
       valid = false;
    } 
    if ($('#company_name').val() == '' || $('#company_name').val() == 'Company Name') {
        errorMessage+= "Please enter your company name \n";
        valid = false;
}
    if( !valid && errorMessage.length > 0){
       alert(errorMessage);
    }   
}