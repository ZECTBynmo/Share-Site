// Keep everything in anonymous function, called on window load.
if(window.addEventListener) {
window.addEventListener('load', function () {
	var drawContext= new DrawContext();
	
	// Draw our border
	drawContext.drawRect( 0, 0, drawContext.getWidth(), drawContext.getHeight() );
	
	// Add an event to handle mouse downs
	addEventListener ("mousedown", captureMouseDown, false);
	
	function captureMouseDown( event ) {
		var test= 0;
	}
}, false); }
