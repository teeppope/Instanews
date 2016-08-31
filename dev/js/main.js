$(document).ready(function(){

	console.log('Heyyyy');	


	$('select').heapbox({
		'onChange':function(){
			event.preventDefault();

		//Declaring variables
		var nytSection = $('option:selected').val();
		var url = "https://api.nytimes.com/svc/topstories/v2/"+ nytSection +".json";
			url += '?' + $.param({'api-key': "938dc4cd48474167800b4e8ebd56bbe1"});
		var articleItem= "";
		var $articleGrid = $('.article-grid');
		
		var gif = './build/assets/images/ajax-loader.gif';	
		var loadingGif = '<li class="loading">';
			loadingGif += 	'<img src="'+ gif +'" alt="Page Loader">';
			loadingGif += '</li>';
		var $articles = $('.articles');

		//Removing the articles before getting new ones
		$articleGrid.empty();

		//Moving the header items to the top
		$('header').addClass('header-shrink');
		// Loading gif
		$articleGrid.append(loadingGif);


		// Calling NYT API	
		$.ajax({
			method: 'GET',
			url: url,
			dataType: 'json',
		})
		.done(function(data) {

			var articleObject = data.results;
			var i = 0;			  		

			$.each(articleObject, function(index, value){

				if(value.multimedia.length && i < 8){
					var articleAbstract= value.abstract,
						articleLink= value.url;

						articleItem = '<li class="indv-article">';
						articleItem +=	'<a href="'+articleLink+'">';
						articleItem +=		'<div class="article-bkgrnd" style="background-image: url('+value.multimedia[4].url+')">';
						articleItem +=			'<div class="abstract">';
						articleItem +=				'<p>';
						articleItem +=					articleAbstract;
						articleItem +=				'</p>';
						articleItem +=			'</div>';
						articleItem +=		'</div>';
						articleItem += 	'</a>';
						articleItem += '</li>';	
						i++;

					$articleGrid.append(articleItem);
				} // If bracket multimedia brackets
			}); // each brackits
		}) // .done brackets
		.fail(function(error){
			$articles.append('<p class="error">Sorry! Something went wrong! Please choose a new section to read!</p>');
			}) //.fail Brackets
		.always(function(){
			$('.loading').remove();
			}); // .always brackets
		$('.error').remove();
		} //on change brackets
	}); //Heapbox brackets
}); //Document Ready brackits