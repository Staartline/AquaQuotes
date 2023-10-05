


// //Array of arrays containing two strings 
// [["1","2"], ["1","2"]....["n-1","n-2"]]
// format:["1 -> quote"], ["2 -> Speaker"]



let quotes = [];
quotes = quoteImport("./AquaQuotes.txt");


//Array that holds quotes
//delimiter is "#. "
//arrays can hold multiple items. 2 strings ??? I might not do this
//But if the string ends with "" " then it ends the process and looks for the next "*. "


//So we wanna read in the file
//add it to an array

//fetch, async, await 
async function quoteImport(filename){

	//empty array to hold all arrays of quote, speake
	let QuoteSpeakerArray = [];

	//contributed by zenonnnn pog
	let massivestring = await fetch(new Request(filename)).then(result => result.text());

	let fileLines = massivestring.split("\r\n");

	// console.log(fileLines.length);
	
	//Import the file 
	//take the text
	//break it on a newline (or the delimiter of like, #. ) into like a list 
	//loop through the list breaking the quotes into two sections
	//add those sections into a bigger array with part 1, part 2. 



	//for loop here that repeats for all the lines in the quotes line
	//For line in file put it as one string that then gets parsed. So we can 
	//parse the line on a /n character
	for(let i = 0; i < fileLines.length; i++) {
		let workingString = fileLines[i];
		let QuoteSpeaker = (workingString.split("\" "));
		QuoteSpeaker[0] = QuoteSpeaker[0] + "\"";
		QuoteSpeakerArray.push(QuoteSpeaker);
	//Make an array here with two elements (quote and speaker)
	//Pop the array onto the end of another array (arraypog2)
	//return arraypog2
	}
	
	return QuoteSpeakerArray;
}

function rngQuote(){
	
	const randomQuote = Math.floor(Math.random() * (quote.length + 1));
	//randomint assigns random number to a variable
	//the variable calls a quote in the quotes array

	//replace html quote with said quote using dom 

	//To replace html quotes its 
	document.getElementById("quoteElement").innerHTML = quote[randomQuote[0]];
	document.getElementById("speakerElement").innerHTML = quote[randomQuote[1]];
}