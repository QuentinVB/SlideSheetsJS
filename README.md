# SlideSheetsJS
A JS-JQuery Module to slide cards while scrolling.

The cards/article are stacked. As you scroll down they slide (css fixed) and then move with the page (pin) when reached the initial (css initial) position.

Example to call the sliders
```html
<script type="text/javascript" src="js/jquery-3.2.1.js"></script> <!-JQUERY-->
<script type="text/javascript" src="js/slideSheet.js"></script>
<script type="text/javascript">
    $(document).ready(function(){
        $('.paperContainer').slideSheet();
    })
</script>
<div class="paperContainer">
    <div class="papersheet">
        <p>Content of the cart to slide here</p>
    </div>
    <div class="papersheet">
        <p>Another card</p>
    </div>
<div>
```
## Arguments
You can send into the slideSheetFunction an offset to move "up" or "down" the zindex.

## Demo
The html page into the repo demonstrate the effect. You may need to tweak the css a bit.