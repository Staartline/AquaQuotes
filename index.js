
var quotes = [];

// //Array of arrays containing two strings 
// [["1","2"], ["1","2"]....["n-1","n-2"]]
// format:["1 -> quote"], ["2 -> Speaker"]

if (quotes == null){
	declareQuotes();
}
rngQuote();


function declareQuotes(){
	quotes = quoteImport("./AquaQuotes.txt");
}

async function quoteImport(filename){

	//empty array to hold all arrays of quote, speake
	let QuoteSpeakerArray = [];

	//contributed by zenonnnn pog
	let massivestring = await fetch(new Request(filename)).then(result => result.text());

	QuoteSpeakerArray = massivestring.split("\r\n");


	return QuoteSpeakerArray;
}

async function rngQuote(){
	const rngQuote = Math.floor(Math.random() * (quotes.length)) + 1;
	let quote = await quotes
	document.getElementById("quoteElement").innerHTML = quote[rngQuote][0];
	document.getElementById("speakerElement").innerHTML = quote[rngQuote][1]

	console.log(quotes[rngQuote]);
}