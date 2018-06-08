$(document).ready(function(){
    var width = $( window ).width();
    
    $(window).scroll(function(){
    
        if( $(document).scrollTop()<600 || $(document).scrollTop()>4400){
            $('nav').removeClass('bgdark');

        }else{
            $('nav').addClass('bgdark');
        }
        
         $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 350) {
          $(this).addClass("slide");
        }
    });
    });
    
    $('body').scrollspy({target: ".navbar", offset: 50});
    
    $("#collapsibleNavbar a").on('click', function(event){
        event.preventDefault();
        
        var hash = this.hash;
        
        $('html, body').animate({
            scrollTop:$(hash).offset().top
        }, 1000);
    });
    
    
    
    if(width < 1200){
    
        $(".mediaicons").hide();
        $(".navbar-brand").hide();
        
    }
    if(width < 1100){
        $(".home_content").css("top" ,"2%");
        
    }
    
    if(width < 750){
        $(".navbar-brand").show();
        
    }  else{
        if(width < 350){
            $(".navbar-brand").css("font-size","10px");
            $(".card").css("height","auto");
        }
    }
    
    
    
    
    
});




    
    
    

