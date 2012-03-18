//////////////////////////////////////////////////////////////////////////
// Constructor
function SearchWidget() {
	
	// Turn the html element into a jquery accordion
	$('#searchExpander').collapsiblePanel({
	});
	
	//icons for expander-collapser button
	var icon_collapsed = "ui-icon-plus";
	var icon_expanded = "ui-icon-minus"
	
	// Grab the html element so it can be part of the class
	this.m_searchElement = $('#searchExpander');
	
	$('#youtubeSearchExpandButton').button({
		icons: {
			primary: icon_collapsed
		},
		text: false
	});
	//$('#youtubeSearchExpandButton').removeClass("ui-widget");
	
	$('#youtubeSearchButton').button({
		icons: {
			primary: "ui-icon-search"
		},
		text: false
	});
	//$('#youtubeSearchButton').removeClass("ui-widget");
	
	$('#youtubeSearchClearButton').button({
		icons: {
			primary: "ui-icon-cancel"
		},
		text: false
	});
}; // end SearchWidget.SearchWidget()