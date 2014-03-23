$(function(){

        $("a").click(function(){
            if(this.hash){
              var hash = this.hash.substr(1);

              var $toElement = $("a[name="+hash+"]");
              var toPosition = $toElement.position().top;

              $("body, html").animate({
                scrollTop: toPosition
              }, 2000, "easeOutExpo");

              return false;
            }

        });

        if(location.hash){
          var hash = location.hash;
          window.scroll(0,0);
          $("a[href="+hash+"]");
        }
      });