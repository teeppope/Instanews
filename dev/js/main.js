$(document).ready(function(){
	
	$('select').on('change', function(event){
		event.preventDefault();

		var nytSection = $('option:selected').val();
		var url = "https://api.nytimes.com/svc/topstories/v2/"+ nytSection +".json";
			url += '?' + $.param({'api-key': "140e5fd4387e4761a497e2670d92b49d"});
		var articleItem="";
		var $articleContainer = $('.article-container');

		//Removing the articles before getting new ones
		$articleContainer.empty();

		$.ajax({
			method: 'GET',
			url: url,
			dataType: 'json',
		})
		.done(function(data) {
			console.log(data);

			var articleObject = data.results;
			var i = 0;			  		
			
			  $.each(articleObject, function(index, value){
				
				if(value.multimedia.length && i < 12){
				  	var articleAbstract= value.abstract,
				  		articleLink= value.url;
			
				  		articleItem = '<li class="article-space" style="background-image: url('+value.multimedia[4].url+')">';
						articleItem +=	'<div class="abstract-bkgnd">';
						articleItem +=		'<p class="abstract-content">';
						articleItem +=			articleAbstract;
						articleItem +=		'</p>';
						articleItem +=	'</div>';
						articleItem += '</li>';	
						i++;
				  
					console.log(articleItem);

					 $articleContainer.append(articleItem);
			  			
			  			} // If bracket
			  	
		   	}); // each brackits
		

		  
			  		

		}); // .done brackets


	}); //on change brackets




}); //Document Ready brackits