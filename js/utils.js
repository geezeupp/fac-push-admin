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
	
	function statsMonth(channel, mois, annee){

		$.ajax({
			type: "GET",
			url: 'https://api.parse.com/1/classes/push?where={"channel":"'+channel+'"}',
			contentType: "application/json; charset=utf-8",
		    dataType: "json",
			headers:headers,
			success: function (data, status, jqXHR) {
				var nb = 0;
				for(var i in data.results){
					
					resultmois = data.results[i].updatedAt.substring(5,7);
					resultannee = data.results[i].updatedAt.substring(0,4);

					if((resultmois==mois) && (resultannee==annee)){
						nb+=1;
					}
				}	 
				
			},
				 
			error: function (jqXHR, status) {            
					alert('errorstats');	 
					}
			 });
		
		alert("nb : "+nb);
		return nb;
		
	}
	
	function graph(){
		
		    var janvier = statsMonth("Administration", "04", "2014");
		    alert("janvier : "+janvier);
		    var chart = new CanvasJS.Chart("chartContainer", {

		      title:{
		        text: "Envois mensuel de Push"              
		      },
		      data: [//array of dataSeries              
		        { //dataSeries object

		         /*** Change type "column" to "bar", "area", "line" or "pie"***/
		         type: "column",
		         dataPoints: [
		         { label: "Janvier", y: 18 },
		         { label: "Fevrier", y: 29 },
		         { label: "Mars", y: 40 },                                    
		         { label: "Avril", y: janvier.valueOf() },
		         { label: "Mai", y: 24 },
		         { label: "Juin", y: 24 },
		         { label: "Juillet", y: 24 },
		         { label: "Aout", y: 24 },
		         { label: "Septembre", y: 24 },
		         { label: "Octobre", y: 24 },
		         { label: "Novembre", y: 24 },
		         { label: "Decembre", y: 24 },
		         ]
		       }
		       ]
		     });

		    chart.render();
	}
	    
