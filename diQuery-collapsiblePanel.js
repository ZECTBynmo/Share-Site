(function($) {
    $.fn.extend({
        collapsiblePanel: function() {
            // Call the ConfigureCollapsiblePanel function for the selected element
            return $(this).each(ConfigureCollapsiblePanel);
        }
    });

})(jQuery);

function ConfigureCollapsiblePanel() {
    //$(this).addClass("ui-widget");
    // Set the first child as the header, and the second child as the content
    $(this).children(":eq(0)").addClass("collapsibleContainerHeader");
    $(this).children(":eq(1)").addClass("collapsibleContainerContent");
    // Initialize the container to closed TODO: make this passed as an option
	$(".collapsibleContainerContent").toggle();
    // Assign a call to CollapsibleContainerTitleOnClick for the click event of the expander element. TODO: Remove hard-coded expander element and replace with option
    $("#youtubeSearchExpandButton", this).click(CollapsibleContainerHeaderOnClick);
}

function CollapsibleContainerHeaderOnClick() {
		var isExpanded = $(".collapsibleContainerContent").css("display") == "none";
		if (isExpanded) {
     		$( "#youtubeSearchExpandButton" ).button( "option", "icons", {primary:'ui-icon-minus'} );
  		} else {
     		$( "#youtubeSearchExpandButton" ).button( "option", "icons", {primary:'ui-icon-plus'} );
	    }
	    // The item clicked is the title div... get this parent (the overall container) and toggle the content within it.
	    $(".collapsibleContainerContent").slideToggle();
	    // toggle the icon for the expanderButton
}