var headers = {"X-Parse-Application-Id":"gn23tgrg2J5EYgYJJqUW7tvlqCRRbULZZjuCv1de", "X-Parse-REST-API-Key":"ZblCesxlIR6w5TI6IumInVUJrhLDTB19cC6xsTeF"};


//send notification to all users in category
function sendPush(/*channel, title, message*/){
	
	//var title =  document.getElementById("titre").value;
	//var message = document.getElementById("message").value;
	
	var title = "To a miagiste...";
	var channel = "Miage";
	
	// Variable to store data:
	var pushData = '{ "channels": ["'+channel+'"], "data": {"alert": "'+title+'" }}' ;
	
		$.ajax({
				type: "POST",
				url: "https://api.parse.com/1/push",
				data: pushData,
				contentType: "application/json; charset=utf-8",
			    dataType: "json",
				headers:headers,
				success: function (data, status, jqXHR) {
							alert('it works');
						 },
					 
				error: function (jqXHR, status) {            
							 
						}

				 });
}


function getAllNotificationsForChannel(channel){
	
}


function getAllNotifications(){
	
}


function savePushNotification(channel){
	
	//var title =  document.getElementById("titre").value;
	//var message = document.getElementById("message").value;
	
	var title = "To a miagiste...";
	var channel = "Miage";
	
	// Variable to store data:
	var pushData = '{ "channels": ["'+channel+'"], "data": {"alert": "'+title+'" }}' ;
	
		$.ajax({
				type: "POST",
				url: "https://api.parse.com/classes/N otifications",
				data: pushData,
				contentType: "application/json; charset=utf-8",
			    dataType: "json",
				headers:headers,
				success: function (data, status, jqXHR) {
							alert('it works');
						 },
					 
				error: function (jqXHR, status) {            
							 
						}

				 });
	
}

function subscribeToChannel(channel){
	
}
