$(document).ready(function(){
$(function(){
  function stripTrailingSlash(str) {
    if(str.substr(-1) == '/') {
      return str.substr(0, str.length - 1);
    }
    return str;
  }

 	var url = window.location.hash; 
	var urlPath= window.location.pathname;
  	var activePage = stripTrailingSlash(url);
	var activePagePath = stripTrailingSlash(urlPath);
   $('.nav li a').each(function(){  
    var currentPage = stripTrailingSlash($(this).attr('href'));
	console.log(currentPage);
    if ((activePage == currentPage)||activePagePath==currentPage) {
	var clickIndex = $(this).parent().index();
    	$(".nav li").css('opacity', '1');
        $(".nav li:not(:nth-child("+(clickIndex+1)+"))").css('opacity', '0.5');
        $(".nav li:last-child").css('opacity', '1');
    } 
  });
});

  $(".nav li a").on('click', function(){
    var clickIndex = $(this).parent().index();
	console.log(clickIndex);
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
  $("#role").change(function(){
    // console.log($("#role").val());
    if($("#role").val()=="speaker")
    {
      $("#hide").show();
      $("#hideone").show();
        if ($('#topic').val() == '' || $('#topic').val() == 'Topic') {
                alert("Please enter your topic \n");
                return false;
            };
   if ($('#briefdescription').val() == '' || $('#briefdescription').val() == 'Last Name') {
                alert("Please enter brief description of your topic\n");
                return false;
            };
    }
  });


     $('#register').on('submit', function(e) {

        $.post('/registrations#create', $(this).serialize(), function (data) {
          $(".signup").html("<h2>Registration Form Submitted</h2>");
        }).error(function (XMLHttpRequest, textStatus, errorThrown) {
          var errors = $.parseJSON(XMLHttpRequest.responseText);
          $(".message").html(errors);
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

   $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });        

     $(".visibleArrow a i").on('click', function(){
             var teamId = $(this).attr("id");
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


  /*function validateForm()
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
} */
