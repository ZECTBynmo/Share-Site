//////////////////////////////////////////////////////////////////////////
// Constructor
function VidPlayer() {
//	$("#myytplayer").get(0);

	// allowScriptAccess must be set to allow the Javascript from one 
	// domain to access the swf on the youtube domain
	var params = { allowScriptAccess: "always", bgcolor: "#cccccc" };
	// this sets the id of the object or embed tag to 'myytplayer'.
	// You then use this id to access the swf and make calls to the player's API
	var atts = { id: "myytplayer" };
	var playerWidth= screen.width / 3;
	var playerHeight= screen.height / 3;
	swfobject.embedSWF("http://www.youtube.com/apiplayer?enablejsapi=1&playerapiid=ytplayer", 
					 "ytapiplayer", playerWidth, playerHeight, "8", null, null, params, atts);	

	this.m_vidPlayer = document.getElementById("myytplayer");

	// If we failed to load the video player, keep trying until we pull it off
	if( !this.m_vidPlayer ) {
		setInterval( function(){
		
		}, 1000 );
	}
}; // end VidPlayer.VidPlayer()


//////////////////////////////////////////////////////////////////////////
// gives the VidPlayer class a reference to the actual video player once it's loaded
VidPlayer.prototype.setVidPlayerElement = function( vidPlayer ) {
	this.m_vidPlayer = vidPlayer;
} // end VidPlayer.playVideoById()


//////////////////////////////////////////////////////////////////////////
// Loads and plays a video by its youtube id string
VidPlayer.prototype.playVideoById = function( strVidId, vidStartTime ) {
	try {
		this.m_vidPlayer.loadVideoById( strVidId, vidStartTime );
	} catch(err) {
		//TODO: do something with this error?
	}
} // end VidPlayer.playVideoById()


//////////////////////////////////////////////////////////////////////////
// Uses a timer to force a video to play
VidPlayer.prototype.forcePlayVideoById = function( strVidId, vidStartTime, _retryIntervalMillis ) {
	// Create a default retry interval of 1000 (1 second)
	retryIntervalMillis = 1000;
	if( _retryIntervalMillis )
		retryIntervalMillis = _retryIntervalMillis;
		
	var numPlayTries = 0;
		
	try {
		this.m_vidPlayer.loadVideoById( strVidId, vidStartTime );
		numPlayTries++;
	} catch(err) {
		// We failed to play the video, start a timer and 
		// try again every 2 seconds until we succeed
		var vidStartTimer= window.setInterval(function() {
			var didSucceed= true;
			numPlayTries++;
			
			// Every try we want to have the video start a little later
			var startSeconds = vidStartTime + (numPlayTries * retryIntervalMillis)/1000;
			
			try {
				// Don't bother trying to play the video if we're starting after it has ended
				if( startSeconds > this.m_vidPlayer.getDuration() ) {
					window.clearInterval(vidStartTimer);
				} else {									
					// Load the video
					this.m_vidPlayer.loadVideoById( strVidId, startSeconds );
				}
			} catch (err) {
				// Mark our failure flag
				didSucceed= false;
			}							

			// If we got here and still have a good success flag, we're done. Clear the interval
			if( didSucceed ) 
				window.clearInterval(vidStartTimer);
		}, retryIntervalMillis );
	}
} // end VidPlayer.getDuration()


//////////////////////////////////////////////////////////////////////////
// Starts the currently loaded video
VidPlayer.prototype.play = function() {
	try {
		this.m_vidPlayer.playVideo();
	} catch( err ) {
		//TODO: do something with this error?
	}
} // end VidPlayer.play()


//////////////////////////////////////////////////////////////////////////
// Stops the currently loaded video
VidPlayer.prototype.stop = function() {
	try {
		this.m_vidPlayer.stopVideo();
	} catch( err ) {
		//TODO: do something with this error?
	}
} // end VidPlayer.stop()


//////////////////////////////////////////////////////////////////////////
// Pauses the currently loaded video
VidPlayer.prototype.pause = function() {
	try {
		this.m_vidPlayer.stopVideo();
	} catch( err ) {
		//TODO: do something with this error?
	}
} // end VidPlayer.pause()


//////////////////////////////////////////////////////////////////////////
// Gets the duration of the current video
VidPlayer.prototype.getDuration = function() {
	try {
		return this.m_vidPlayer.getDuration();
	} catch( err ) {
		//TODO: do something with this error?
	}
} // end VidPlayer.getDuration()


//////////////////////////////////////////////////////////////////////////
// Gets the current time of the current video
VidPlayer.prototype.getCurrentTime = function() {
	try {
		return this.m_vidPlayer.getCurrentTime();
	} catch( err ) {
		//TODO: do something with this error?
	}
} // end VidPlayer.getCurrentTime()


//////////////////////////////////////////////////////////////////////////
// Gets the volume of the player
VidPlayer.prototype.getVolume = function() {
	try {
		return this.m_vidPlayer.getVolume();
	} catch( err ) {
		//TODO: do something with this error?
	}
} // end VidPlayer.getVolume()


//////////////////////////////////////////////////////////////////////////
// Sets the volume of the player
VidPlayer.prototype.setVolume = function( percentVolume ) {
	try {
		this.m_vidPlayer.setVolume( percentVolume );
	} catch( err ) {
		//TODO: do something with this error?
	}
} // end VidPlayer.setVolume()
