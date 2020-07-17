var quotes = [
				"Don't seek to be happy; let everybody else chase after that rainbow. Seek to be kind and you'll find the rainbow follows you ~ Richelle E. Goodrich",
				"Dare to love yourself as if you were a rainbow with gold at both ends ~ Aberjhani",
				"Try to be a rainbow in someone's cloud ~ Maya Angelou",
				"You'll never find a rainbow if you're looking down ~ Charlie Chaplin",
				"In short, I consider myself the only man outside of mythology to have found the crock of gold at the rainbow's end ~ Gerald Durrel",
				"Donde termina el arco iris, en tu alma o en el horizonte? ~ Where does the rainbow end, in your soul or on the horizon? ~ Pablo Neruda",
				"After the tempest in the sky how sweet yon rainbow to thine eye! Come, my Matilda, now while some few drops of rain are yet to come, in this honeysuckle bower safely sheltered from the shower, we may count the colours o'er. Seven there are, there are no more: each in each so finely blended, where they begin or where are ended, the finest eye can scarcely see ~ Charles Lamb",
				"I saw the lovely arch of Rainbow span the sky, the gold sun burning as the rain swept by. In bright-ringed soliude the showery foliage shone one lovely moment, and the bow was gone ~ Walter de la Mare"
				
]



  
  
function newQuote(){
	var index =0; // Let's show a quote on page load
	document.getElementById("quoteHere").innerHTML = quotes[index];

	var randomNumber = Math.floor(Math.random()*(quotes.length));
	document.getElementById("quoteHere").innerHTML = quotes[randomNumber];

}