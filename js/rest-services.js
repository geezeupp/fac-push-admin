var headers = {"X-Parse-Application-Id":"gn23tgrg2J5EYgYJJqUW7tvlqCRRbULZZjuCv1de", "X-Parse-REST-API-Key":"ZblCesxlIR6w5TI6IumInVUJrhLDTB19cC6xsTeF"};


//send notification to all users in category
function sendPush(){
	
	var title =  document.getElementById("title").value;
	var channel = $('#category option:selected').val();

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
						alert("Votre notification a été envoyée");
						savePushNotification(title,channel);
						 },
					 
				error: function (jqXHR, status) {            
							 
						}
				 });
		
}


function getAllNotificationsForChannel(channel){
	$.ajax({
		type: "GET",
		url: "https://api.parse.com/1/classes/push",
		//data: pushData,
		contentType: "application/json; charset=utf-8",
	    dataType: "json",
		headers:headers,
		success: function (data, status, jqXHR) {
				alert("Données reçues");
				alert(data);
				 },
			 
		error: function (jqXHR, status) {            
				alert('error');	 
				}
		 });
}

function getAllNotifications(){
	$.ajax({
		type: "GET",
		url: "https://api.parse.com/1/classes/push",
		contentType: "application/json; charset=utf-8",
	    dataType: "json",
		headers:headers,
		success: function (data, status, jqXHR) {
				alert("Données reçues");
				var obj = jQuery.parseJSON(data);
				
				alert(obj.results[1].title);
		},
			 
		error: function (jqXHR, status) {            
				alert('error');	 
				}
		 });
}


function savePushNotification(title,channel){
	var message = document.getElementById("message").value;
	
	// Variable to store data:
	var pushData = '{ "title": "'+title+'", "message": "'+message+'", "channel": "'+channel+'" }';
		$.ajax({
				type: "POST",
				url: "https://api.parse.com/1/classes/push",
				data: pushData,
				contentType: "application/json; charset=utf-8",
			    dataType: "json",
				headers:headers,
				success: function (data, status, jqXHR) {
							
						 },
					 
				error: function (jqXHR, status) {            
							 alert('error');
						}

				 });
	
}

function subscribeToChannel(channel){
	
}

