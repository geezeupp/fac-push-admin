var headers = {"X-Parse-Application-Id":"gn23tgrg2J5EYgYJJqUW7tvlqCRRbULZZjuCv1de", "X-Parse-REST-API-Key":"ZblCesxlIR6w5TI6IumInVUJrhLDTB19cC6xsTeF"};

function login(){
	
	var username = encodeURIComponent(document.getElementById("email").value);
	var pass = encodeURIComponent( document.getElementById("password").value);
	var errorMessage = "Oups!!! Combinaison email/mot de passe incrorrect.";
	
		$.ajax({
				type: "GET",
				url: "https://api.parse.com/1/login?username="+username+"&password="+pass,
				contentType: "application/json; charset=utf-8",
			    dataType: "json",
				headers:headers,
				success: function (reponse, status, jqXHR) {
							setSessionCookie('sessionToken', reponse.sessionToken, 1);
							sessionToken = reponse.sessionToken;
							channel = reponse.channel;
							document.location.href = "pages/gestion.html?channel="+channel;
						 },
					 
				error: function (jqXHR, status) {  
					$("#sign-in-error").empty();
					var divError = '<div class="alert alert-danger">'+ errorMessage +'</div>';
					$("#sign-in-error").append(divError);
						
				}

			});
	 
} 

function signUp(){
	var email =  document.getElementById("email").value;
	var pass = document.getElementById("password").value;
	var channel = $('#category option:selected').val();
	
	// Variable to store data:
	var data = '{ "username": "'+email+'", "password": "'+pass+'", "channel": "'+channel+'" }';
		$.ajax({
				type: "POST",
				url: "https://api.parse.com/1/users",
				data: data,
				contentType: "application/json; charset=utf-8",
			    dataType: "json",
				headers:headers,
				success: function (data, status, jqXHR) {
							alert('Vous etes bien inscrit pour envoyer des notifications');
						 },
					 
				error: function (jqXHR, status) {            
							 
						}

				 });
} 

function logout(){
	if(confirm('Etes-vous sur de vouloir vous deconnecter ?')) {
		deleteSessionCookie('sessionToken');
		document.location.href="../index.html";
	}
	
}


function setSessionCookie(name,cookie,days){
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		expires = "; expires="+date.toGMTString();
	}
	document.cookie = name+"="+cookie+expires+"; path=/";
	
}

function deleteSessionCookie(name){
	setSessionCookie(name,"",-1);
}

function checkSession(){
	var sessionCookie = getCookie('sessionToken');
	if(sessionCookie == null){
		document.location.href="../index.html";
	}
	
}


function getCookie(name){
 
	if(document.cookie.length == 0){
		return null;
	}
		
	var regSepCookie = new RegExp('(; )', 'g');
	
	var cookies = document.cookie.split(regSepCookie);
	for(var i = 0; i < cookies.length; i++){
		var regInfo = new RegExp('=', 'g');
		var infos = cookies[i].split(regInfo);
		if(infos[0] == name){
		return unescape(infos[1]);
		}
	}
		return null;
}

function preloadFunc()
{
    checkSession();
}







