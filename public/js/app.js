var template = '<div class="col s12 m4">' +
		    '<div class="card horizontal hoverable">' +
		      	'<div class="card-stacked">' +
		        	'<div class="card-content deep-orange lighten-1 white-text">' +
		          		'<p>Hi, my name is <strong>{{name}}</strong></p>' +
		        	'</div>' +
			        '<div class="card-action">' +
			          	'<a data-show-url="{{url}}" class="about">See more about me</a>' +
			        '</div>' +
			    '</div>' +
	    	'</div>' +
	  	'</div>';
var species = '<option data-url="">{{specie}}</option>'

$(document).ready(function(){
	 var speciesName = function(response){
	 	var people = "";
	 	$.each(response.results, function(i,nombre){
	 		people += species.replace("{{specie}}", nombre.name)
	 	});
	 	$("#species").html('<option value ="" disabled selected>species</option>');
	 	$("#species").append(people);
	 }
	 $.getJSON("http://swapi.co/api/species/", speciesName);
});
