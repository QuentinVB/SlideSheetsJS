
(function( $ ){
    $.fn.fixedUntil = function(scrollWhereStop,zindex,outerHeight) {
        
        function inView(pos, element){        
            element.each(function(){ //for each selector, determine whether it's inview and run the move() function
                
                var element = $(this);
                var top = element.offset().top;
                
                if(outerHeight == true){
                    var height = element.outerHeight(true);
                }else{
                    var height = element.height();
                }
                move(pos, height);
            });
        }
        function newPos(xpos,scrollWhereStop){
            var output = (pos<=scrollWhereStop)? "fixed":"relative";
            //console.log(output);
            return output;
            //return xpos + " " + Math.round((-((windowHeight + pos) - adjuster) * inertia)) + "px";
        }
            
        //function to be called whenever the window is scrolled or resized
        function move(xpos, scrollWhereStop){
            $this.css({'position': newPos(xpos, scrollWhereStop)});
        }
        var $window = $(window);
        var windowHeight = $(window).height();
        var pos = $window.scrollTop(); //position of the scrollbar
        var $this = $(this);
        
        //setup defaults if arguments aren't specified
        if(scrollWhereStop == null){scrollWhereStop = 0}
        if(zindex == null){zindex = 10}
        if(outerHeight == null){outerHeight = true}
        
        height = $this.height();
       
        $window.bind('scroll', function(){ //when the user is scrolling...
            var pos = $window.scrollTop(); //position of the scrollbar
            //inView(pos, $this);
            console.log("scrolled"+pos);
            $this.css({
                'position': (pos<=scrollWhereStop)? "fixed":"relative",
                'bottom': "0px",
                'width': (pos<=scrollWhereStop)? "20%":"auto",
                'z-index':zindex });

            $('#pixels').html(pos);
        })
    }
})( jQuery );