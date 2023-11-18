var quotes = [];

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

	let QuoteSpeakerArray = massivestring.split("\r\n");

	return QuoteSpeakerArray;
}

function rngQuote(){
	const rngQuote = Math.floor(Math.random() * (quotes.length)) + 1;

	document.getElementById("quoteElement").innerHTML = quotes[rngQuote];

	console.log(quotes[rngQuote]);
}