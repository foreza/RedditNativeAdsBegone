javascript: (
    function (e, s) { 
        e.src = s; 
        e.onload = function () { 
            jQuery.noConflict(); 
            jQuery(".scrollerItem").has("span").filter(":contains('promoted')").remove();
            console.log('jQuery injected');
         }; 
            document.head.appendChild(e); 
            
        })
        (document.createElement('script'), '//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js')
