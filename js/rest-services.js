var headers = {"X-Parse-Application-Id":"gn23tgrg2J5EYgYJJqUW7tvlqCRRbULZZjuCv1de", "X-Parse-REST-API-Key":"ZblCesxlIR6w5TI6IumInVUJrhLDTB19cC6xsTeF"};


//send notification to all users in category
function sendPush(){
	
	var title =  document.getElementById("title").value;
	var channel = location.search.substring(9,location.search.length);
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
						alert("Votre notification a �t� envoy�e");
						savePushNotification(title,channel);
						 },
					 
				error: function (jqXHR, status) {            
							 
						}
				 });
		
}


function getAllNotificationsForChannel(channel){
	$.ajax({
		type: "GET",
		url: 'https://api.parse.com/1/classes/push?where={"channel":"'+channel+'"}',
		contentType: "application/json; charset=utf-8",
	    dataType: "json",
		headers:headers,
		success: function (data, status, jqXHR) {
			var head ='<tr><th class="success">#</th><th class="success">Date</th><th class="success">Heure</th><th class="success">Detail du push</th></tr>';
				$("#delete-push").append(head);
			
			for(var i in data.results){
				var Push = '<tr><td><input type="checkbox" name=checksupp id='+data.results[i].objectId+'></td><td>'+data.results[i].updatedAt.substring(0,10)+
				'</td><td>'+data.results[i].updatedAt.substring(11,19)+'</td><td>'+ data.results[i].title + '</td></tr>';
				$("#delete-push").append(Push);
			}	            
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
			
			for(var i in data.results){
				var deletePush = '<tr><td><input type="checkbox" id='+data.results[i].objectId+'></td><td>'+data.results[i].updatedAt.substring(0,10)+
				'</td><td>'+data.results[i].updatedAt.substring(11,19)+'</td><td>'+ data.results[i].title + '</td></tr>';
				$("#delete-push").append(deletePush);
			}	            
		},
			 
		error: function (jqXHR, status) {            
				alert('error');	 
				}
		 });
}

function getAllNotificationsForChannelHisto(channel){
	$.ajax({
		type: "GET",
		url: 'https://api.parse.com/1/classes/push?where={"channel":"'+channel+'"}',
		contentType: "application/json; charset=utf-8",
	    dataType: "json",
		headers:headers,
		success: function (data, status, jqXHR) {
			for(var i in data.results){
				var Push = '<tr><td>'+data.results[i].updatedAt.substring(0,10)+
				'</td><td>'+data.results[i].updatedAt.substring(11,19)+'</td><td>'+ data.results[i].title + '</td></tr>';
				$("#historique-push").append(Push);
			}	            
		},
			 
		error: function (jqXHR, status) {            
				alert('errorhisto');	 
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

function deletePush(){
	
	$("input[type='checkbox']:checked").each(
	          function() {
	           
	           $.ajax({
					type: "DELETE",
					url: "https://api.parse.com/1/classes/push/"+$(this).attr('id'),
					contentType: "application/json; charset=utf-8",
				    dataType: "json",
					headers:headers,
					success: function (data, status, jqXHR) {
								alert('Les push ont �t� supprim�s avec succ�s !');
							 },
						 
					error: function (jqXHR, status) {            
								 alert('error');
							}

					 });
	          });    
}

function getUsers(channel){
	$.ajax({
		type: "GET",
		url: 'https://api.parse.com/1/installations',
		contentType: "application/json; charset=utf-8",
	    dataType: "json",
		headers:headers,
		success: function (data, status, jqXHR) {
			alert("go");
			//for(var i in data.results){
				//var Push = '<tr><th class="success">Intitul�</th><th class="success">'+data.results[0].email+'</th></tr>';
				//$("#stats").append(Push);
				//alert(data.results[0].email);
			//}	            
		},
			 
		error: function (jqXHR, status) {            
				alert('errorstats');	 
				}
		 });
}


function subscribeToChannel(channel){
	
}

function actualise_div() {
	$("#delete").show();
}

function delete_p(){
	
	deletePush();
	actualise_div();
	

}
