
(function( $ ){
    $.fn.slipSheet = function() {
        var $sheetsContainers = $(this);
        var sheetsInitialValuesForEachContainers=[];
        var margin = parseInt($('.papersheet').css( "margin" ),10);
        var maxWidth = parseInt($('.papersheet').outerWidth(true),10);
        var maxHeight = 0;
        console.log(margin);

        function init(element){
            element.each(function(index){ //for each selector, 
                var indexContainer =index;
                var sheetsContainer = $(this);
                //console.log(sheetsContainer);
                
                var sheets = sheetsContainer.find('.papersheet');
                
            
                var sheetsValues=[];
                var tempHeight =0;
                sheets.each(function(index){//for each sheet inside                   
                    var sheet = $(this);
                    sheetsValues.push( {'top':sheet.offset().top, 'left':sheet.offset().left-margin,'width': sheet.width() ,'height':sheet.height()+margin*2});         
                    tempHeight += sheet.height()+margin*2;
                });   
                maxHeight= tempHeight > maxHeight ? tempHeight+margin:maxHeight; 
                sheetsInitialValuesForEachContainers.push(sheetsValues);
            });
            $sheetsContainers.height( maxHeight );
            $sheetsContainers.width( maxWidth );
            console.log(sheetsInitialValuesForEachContainers);
        }

        function updateGlobal(element,scrollPos){
            element.each(function(index){ //for each selector, 
                var indexContainer = index;
                var sheets = $(this).find('.papersheet');

                sheets.each(function(index){//for each sheet inside
                    //console.log(indexContainer);
                    var sheet = $(this);
                    var sheetTop = sheet.offset().top
                    //console.log(sheetTop);     
                    /* sheetTop
                     * sheet
                     * topSheetValueOfTheContainer
                     * scrollPos
                     */
                    //condition : stay fixed at bottom or back to initial pos ?
                    if(scrollPos + windowHeight - sheetsInitialValuesForEachContainers[indexContainer][index]['height'] < sheetsInitialValuesForEachContainers[indexContainer][index]['top'])//stay fixed
                    {   
                        sheet.css({
                        'position': "fixed",
                        'left':sheetsInitialValuesForEachContainers[indexContainer][index]['left'],
                        'width':sheetsInitialValuesForEachContainers[indexContainer][index]['width'],
                        'bottom': "0px",   
                        'z-index':50-index });
                    }
                    else //back to initial
                    {
                        sheet.css({
                            'position': "relative",
                            'left':'0px',
                            'width':sheetsInitialValuesForEachContainers[indexContainer][index]['width'],
                            'bottom': "0px",   
                            'z-index':50-index
                             });
                    }
                });              
            });
        }
        //initialization
        var $window = $(window);
        var windowHeight = $(window).height();
        var scrollPos = $window.scrollTop(); //position of the scrollbar
        console.log(windowHeight);
        console.log(scrollPos);
        init($sheetsContainers);
        updateGlobal($sheetsContainers,scrollPos);
        
        //height = $this.height();
        
        
       //bind to the scroll event
        $window.bind('scroll', function(){ //when the user is scrolling...
            var scrollPos = $window.scrollTop(); 
            console.log(scrollPos);
            updateGlobal($sheetsContainers,scrollPos);

            //var top = $this.offset().top;
            //console.log("position from top" + top);
            //console.log("scrolled to "+pos);

      
        })
    }
})( jQuery );