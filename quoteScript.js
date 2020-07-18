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
	var index = 1; // Let's show a quote on page load
	document.getElementById("quoteHere").innerHTML = quotes[index];

	var randomNumber = Math.floor(Math.random()*(quotes.length));
	document.getElementById("quoteHere").innerHTML = quotes[randomNumber];

}

var facts = [
	"This page has over 1300 lines of code that are needed to make it work - from the background to the moving clouds to these info buttons with their clickable buttons - and every single line was written by a member of The One Team!",
	"This interactive webpage is written in three different languages!"


]
function newFact(){
	var index2 = 0;
	document.getElementById("factHere").innerHTML = facts[index2];
	var randomNumber2 = Math.floor(Math.random()*(facts.length));
	document.getElementById("factHere").innerHTML = facts[randomNumber2];
}

var music = [
	"You are listening to Somewhere Over the Rainbow by Israel Kamakawiwo'Ole. He is a native Hawaiian singer/songwriter and activist",
	"The singer of the song you are listening to was written and sung by a activist who fought for Hawaiian rights and was know for promoting this message: the life of the land is perpetuated in righteousness",
	"The music you are listening to may sound familiar - this is because it has been used in countless films and TV shows, from 50 First Dates to ER and Glee",
	"This song is by a Hawaiin singer. In Hawaiian legends, the figure of the rainbow maiden is a messenger to the gods"
]

function newMusic(){
	var index3 = 0;
	document.getElementById("musicHere").innerHTML = music[index3];
	var randomNumber3 = Math.floor(Math.random()*(music.length));
	document.getElementById("musicHere").innerHTML = music[randomNumber3];
}

