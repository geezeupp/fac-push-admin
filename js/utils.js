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
	 
	function checkAll(){
		  $(":checkbox").attr('checked', true);
	}
	
	function uncheckAll(){
		  $(":checkbox").attr('checked', false);
	}
	
	function stats(){
		
		Parse.initialize("gn23tgrg2J5EYgYJJqUW7tvlqCRRbULZZjuCv1de", "PsXafGcxmjODZ7jMORmMO9A01GwQlPUZrelHvofV");
		  
		  var dimensions = {
			// What type of news is this? 
			category: 'politics',
			// Is it a weekday or a weekend?
			dayType: 'weekday'
			};
			//Send the dimensions to Parse along with the 'search' event
			
			Parse.Analytics.track('read', dimensions);
		
	}
