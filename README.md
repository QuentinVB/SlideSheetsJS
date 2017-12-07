# SlideSheetsJS
A JS-JQuery Module to slide cards while scrolling.

The cards/article are stacked. As you scroll down they slide (css fixed) and then move with the page (pin) when reached the initial (css initial) position.

## Requirement
You must add the ```.papersheet``` class to your card/item/article. 

The plugin is not style dependent, except the fact that the main container ( ```.container``` below) **must** be a flex box. The justify-content property, width, margins of the container doesnt matter, you can choose your own style. I advice the papersheet to have margin for better effect.

Example to call the sliders
```html
<script type="text/javascript" src="js/jquery-3.2.1.js"></script> <!-JQUERY-->
<script type="text/javascript" src="js/slideSheet-1.0.0.js"></script>
<script type="text/javascript">
    $(document).ready(function(){
        $('.paperContainer').slideSheet();<!--just set the container of your cards-->
    });
</script>
<div class="container"> 
    <div class="paperContainer">
        <div class="papersheet">
            <p>Content of the cart to slide here</p>
        </div>
        <div class="papersheet">
            <p>Another card hidden below</p>
        </div>
    <div>
<div>
```
## Arguments & usage
The zindex/width/height/top/left/position are used to position the articles, so try to avoid absolute value on these (prefer max- and min- limiters). The zIndex stacking start to 0 by default. 
You can send into the slideSheetFunction an offset to move "up" or "down" the zindex.

## Demo
The html page into the repo demonstrate the effect. You may need to tweak the css a bit.

## TODO
Make it fully responsive !

## Author
This plugin has been developped as a training to study jQuery by Quentin Vanbutsele, 2017. Released under MIT Licence.

If you want to contact me to report bug, improvement or simply to share a *tasse de café* near Paris dont hesitate ;)