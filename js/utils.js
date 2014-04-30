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
	
	function stats(channel){
		$.ajax({
			type: "GET",
			url: 'https://api.parse.com/1/classes/push?where={"channel":"'+channel+'"}',
			contentType: "application/json; charset=utf-8",
		    dataType: "json",
			headers:headers,
			success: function (data, status, jqXHR) {
				
				nb = 0;
				var myDate=new Date(); 
				mois = myDate.getMonth()+1;
				annee = myDate.getFullYear();

				for(var i in data.results){
					
					resultmois = data.results[i].updatedAt.substring(5,7);
					resultannee = data.results[i].updatedAt.substring(0,4);

					if((resultmois==mois) && (resultannee==annee)){
						nb+=1;
					}
				}	 
				
				var head ='<tr><th class="success">Intitul&eacute</th><th class="success">Nombre</th></tr>';
				$("#stats").append(head);
				
				var detail ='<tr><td>Nombre de push envoy&eacutes ce mois-ci</td><td>'+nb+'</td></tr>';
				$("#stats").append(detail);
			},
				 
			error: function (jqXHR, status) {            
					alert('errorstats');	 
					}
			 });
		
	}
