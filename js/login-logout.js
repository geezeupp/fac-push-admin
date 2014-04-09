var headers = {"X-Parse-Application-Id":"gn23tgrg2J5EYgYJJqUW7tvlqCRRbULZZjuCv1de", "X-Parse-REST-API-Key":"ZblCesxlIR6w5TI6IumInVUJrhLDTB19cC6xsTeF"};

function login(){
	
	var username = encodeURIComponent(document.getElementById("email").value);
	var pass = encodeURIComponent( document.getElementById("password").value);
	
	// Variable to store data:
		$.ajax({
				type: "GET",
				url: "https://api.parse.com/1/login?username="+username+"&password="+pass,
				contentType: "application/json; charset=utf-8",
			    dataType: "json",
				headers:headers,
				success: function (reponse, status, jqXHR) {
							setSessionCookie("sessionToken", reponse.sessionToken, 1);
							document.location.href = "pages/home.html";
						 },
					 
				error: function (jqXHR, status) {            
							 
						}

				 });
	 
} 

function signUp(){
	var email =  document.getElementById("email").value;
	var pass = document.getElementById("password").value;
	
	// Variable to store data:
	var data = '{ "username": "'+email+'", "password": "'+pass+'" }';
		$.ajax({
				type: "POST",
				url: "https://api.parse.com/1/users",
				data: data,
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

function logout(){
	if(confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
		deleteSessionCookie('sessionToken');
		document.location.href="../index.html";
	}
}


function setSessionCookie(cookieName,cookie,days){
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		expires = "; expires="+date.toGMTString();
	}
	document.cookie = name+"="+cookie+expires+"; path=/";
	
}

function deleteSessionCookie(cookieName){
	setSessionCookie(name,"",-1);
}
