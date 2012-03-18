//////////////////////////////////////////////////////////////////////////
// Constructor
function DrawContext( elementName ) {
	this.elementName = "canvas";
	this.canvas;
	this.context;

	// Default our element name
	if( typeof elementName != "undefined" ) {
		this.elementName = elementName;
	}
	
	// Find the canvas element.
    this.canvas = document.getElementById( this.elementName );
	
	// Get the 2D canvas context.
    this.context = this.canvas.getContext('2d');
} // end DrawContext.DrawContext()


//////////////////////////////////////////////////////////////////////////
// Returns the height of the canvas
DrawContext.prototype.getHeight = function() {
	return this.canvas.height;
} // end UserSession.getHeight()


//////////////////////////////////////////////////////////////////////////
// Returns the width of the canvas
DrawContext.prototype.getWidth = function() {
	return this.canvas.width;
} // end UserSession.getWidth()


//////////////////////////////////////////////////////////////////////////
// Draw a line
DrawContext.prototype.drawLine = function( xStart, yStart, xEnd, yEnd, lineWidth, color ) {
	// Default our line width
	if( typeof lineWidth == "undefined" ) {
		lineWidth = 1;
	}
	
	// Default our color
	if( typeof lineWidth == "undefined" ) {
		color = '#fff';
	}
	
	// Set our color
	this.context.strokeStyle = color;
	
	// Draw the line
	this.context.lineWidth = lineWidth;
	this.context.beginPath();
	this.context.moveTo( xStart, yStart );
	this.context.lineTo( xEnd, yEnd );
	this.context.stroke();
} // end UserSession.drawLine()


//////////////////////////////////////////////////////////////////////////
// Draw a polygon
DrawContext.prototype.drawPoly = function( fX, fY, lineWidth, color ) {
	// Default our line width
	if( typeof lineWidth == "undefined" ) {
		lineWidth = 1;
	}
	
	// Default our color
	if( typeof lineWidth == "undefined" ) {
		color = '#fff';
	}
		
	// Jump out unless we have more than two locations to draw
	if( fX.length < 2 || fY.length < 2 ) { return; }
	
	// Set our color
	this.context.strokeStyle = color;
	
	// Begin the line
	this.context.lineWidth = lineWidth;
	this.context.beginPath();
		
	// Move the context to the first element in our x/y functions
	this.context.moveTo( fX[0], fY[0] );
		
	// Connect that first point to every other point in the arrays
	for( xLoc=1; xLoc<fX.length; ++xLoc ) {
		this.context.lineTo( fX[0], fY[0] );
	}

	// Actually draw the polygon
	this.context.stroke();
} // end UserSession.drawPoly()


//////////////////////////////////////////////////////////////////////////
// Draw a polygon and fills it in
DrawContext.prototype.fillPoly = function( fX, fY, color ) {
	// Default our line width
	if( typeof lineWidth == "undefined" ) {
		lineWidth = 1;
	}
	
	// Default our color
	if( typeof lineWidth == "undefined" ) {
		color = '#fff';
	}
		
	// Jump out unless we have more than two locations to draw
	if( fX.length < 2 || fY.length < 2 ) { return; }
	
	// Set our color
	this.context.strokeStyle = color;
	this.context.fillStyle = color;
	
	// Begin the line
	this.context.lineWidth = lineWidth;
	this.context.beginPath();
		
	// Move the context to the first element in our x/y functions
	this.context.moveTo( fX[0], fY[0] );
		
	// Now connect that first point to every other point in the arrays
	for( xLoc=1; xLoc<fX.length; ++xLoc ) {
		this.context.lineTo( fX[0], fY[0] );
	}
	
	// Fill the polygon and stroke around it
	this.context.fill();
	this.context.stroke();
} // end UserSession.fillPoly()


//////////////////////////////////////////////////////////////////////////
// Draw a rectangle
DrawContext.prototype.drawRect = function( xLoc, yLoc, width, height, lineWidth, color ) {
	// Default our line width
	if( typeof lineWidth == "undefined" ) {
		lineWidth = 1;
	}
	
	// Default our color
	if( typeof lineWidth == "undefined" ) {
		color = '#fff';
	}

	// Set our color
	this.context.strokeStyle = color;
	
	this.context.lineWidth = lineWidth;
	this.context.strokeRect( xLoc, yLoc, width, height );
} // end UserSession.drawRect()


//////////////////////////////////////////////////////////////////////////
// Draw a rectangle
DrawContext.prototype.fillRect = function( xLoc, yLoc, width, height, lineWidth, color ) {
	// Default our line width
	if( typeof lineWidth == "undefined" ) {
		lineWidth = 1;
	}
	
	// Default our color
	if( typeof lineWidth == "undefined" ) {
		color = '#fff';
	}

	// Set our color
	this.context.strokeStyle = color;
	this.context.fillStyle = color;
	
	this.context.lineWidth = lineWidth;
	this.context.fillRect( xLoc, yLoc, width, height );
} // end UserSession.fillRect()
