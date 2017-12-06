/*
Plugin: jQuery slipSheet
Version 1.0.0
Author: Quentin Vanbutsele
Author URL: http://www.les-planetes2kentin.fr/
*/

(function( $ ){
    $.fn.slideSheet = function(zindexOffset) {
        function init(element){
            element.each(function(index){ //for each selector, 
                var indexContainer = index;
                var sheetsValues=[];
                var tempHeight =0;
                var tempWidth=0;
                $(this).find('.papersheet').each(function(index){//for each sheet inside 
                    sheetsValues.push( {'top':$(this).offset().top, 'left':$(this).offset().left-margin,'width': $(this).width() ,'height':$(this).height()+margin*2});         
                    tempHeight += $(this).outerHeight()+margin*2;
                    tempWidth= $(this).width() > tempWidth ? $(this).width():tempWidth; //get the heighest container           
                });   
                maxHeight= tempHeight > maxHeight ? tempHeight+margin:maxHeight; //get the heighest container
                sheetsInitialValues.push(sheetsValues);
                //console.log(tempWidth);
                //$(this).prepend('<div></div>');//force the container to be large enough
                //$(this).find(":first-child").width(tempWidth+margin);
            });
            $sheetsContainers.height( maxHeight );//force the container to be large enough
        }
        function update(element,scrollPos){
            element.each(function(index){ //for each selector, 
                var indexContainer = index;
                $(this).find('.papersheet').each(function(index){//for each sheet inside                    
                    if(scrollPos + windowHeight - sheetsInitialValues[indexContainer][index]['height'] < sheetsInitialValues[indexContainer][index]['top'])//stay fixed
                    {   
                        $(this).css({
                        'position': "fixed",
                        'left':sheetsInitialValues[indexContainer][index]['left'],
                        'width':sheetsInitialValues[indexContainer][index]['width'],
                        'bottom': "0px",   
                        'z-index':zindexOffset+element.length-index });
                    }
                    else //back to initial
                    {
                        $(this).css({
                            'position': "relative",
                            'left':'0px',
                            'width':sheetsInitialValues[indexContainer][index]['width'],
                            'bottom': "0px",   
                            'z-index':zindexOffset+element.length-index
                             });
                    }
                });              
            });
        }
        // setup defaults if arguments aren't specified
		if (arguments.length < 1 || zindexOffset === null) zindexOffset = 0;
        //initialization
        var $sheetsContainers = $(this);
        var sheetsInitialValues=[];
        var margin = parseInt($('.papersheet').css( "margin" ),10);  
        var maxHeight = 0;
        var windowHeight = $(window).height();
        init($sheetsContainers);
        update($sheetsContainers,$(window).scrollTop());

       //bind the update to the scroll event
       $(window).bind('scroll', function(){ //when the user is scrolling...
            update($sheetsContainers,$(window).scrollTop());
        })
    }
})( jQuery );