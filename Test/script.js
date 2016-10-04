//Sätt ut Breakpoints på alla rader som går och kör sedan debuggern
/*
var loopFunction = function(){
	var sum = 0;
	for(var i = 1; i < 10; i++){
		sum += i;
	}
}
loopFunction();

*/


/*Kommentera ut funktionen nedan när du är klar med övningen ovan
	Sätt dit Breakpoints på alla rader som går och kör debuggern */


/*
var ifFunction = function(x){
	if(x < 20){
		return "Less than 20";
	}else if (x > 20){
		return "More than 20";
	}else{
		return "I don't know!";
	}
}

ifFunction(45);

*/


/* 	Kommentera ut funktionen nedan du är klar med övningen ovan
	Sätt ut Breakpoints på raderna och kör debuggern */

/*
function highestNumber(x,y){

	if (isNaN(x) || isNaN(y)){
		return 'Inte ett nummer';
	}else{
		if( x > y ){
			return x;
		}
	return y;
	}
}

highestNumber(5, 5);

*/

/*	Kommentera ut koden nedan när du är klar med övningen ovan
	VIKTIGT: Öppna debuggern och lägg ut Breakpoints innan du
	kommenterar ut koden. */

function infiniteLoop(){
	var num = 10;
	while(num >= 0){
		console.log('Stuck in the void!');
		num -1;
	}
}


infiniteLoop();