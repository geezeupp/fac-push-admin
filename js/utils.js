	function extractUrlParams() {
		var urlParams = location.search.substring(1).split('&');
		var tabParams = [];
		for ( var i = 0; i < urlParams.length; i++) {
			var param = urlParams[i].split('=');
			tabParams[param[0]] = param[1];
		}
		return tabParams;

	}
	
	function getChannel() {
		var tabParams = extractUrlParams();
		var channel = "All"; 
		/*channel*/
		if (tabParams["channel"] != null) {
			channel= tabParams["channel"];
		}
		
		return channel;

	}
	
	function getLink(page) {
		var link = page + '?channel='+getChannel();
		document.location.href = link;
	}
	
	
	