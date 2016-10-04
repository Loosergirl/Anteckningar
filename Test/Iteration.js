// For-loopar

var sum = 0;

for(var i = 0; i <= 10; i++){
    sum += i;
}
console.log(i);

//--------------------------------------------
// While & Modulo - skriv ut jämna tal

var num = 10;
while(num >= 0)
{
    if (num % 2 == 0)
        {
            console.log(num);
        }
    num--;
}

//-----------------------------------------------
//FOR - Fårinvasion
/*Mina får förökar sig snabbt och jag behöver en webbapp som kan räkna ut hur många de kommer att vara inom ett år. 
Varje månad kommer fåren att multipliceras med 4.*/

var numberOfSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

for (var i = monthNumber; i <= monthsToPrint; i++)
    {
        numberOfSheep = numberOfSheep * 4;
        console.log("There will be " + numberOfSheep + " sheep after " + i + "month(s)!");
    }

//----------------------------------------------------
// Maju Machine!

var mjau = prompt("Hur många maju vill du ha?");

while (mjau != 0)
    {
        var meow = "";
        
        for (i = 1; i <= mjau; i++)
            {
                meow += "mjau "
            }
        
        console.log(meow);
        
        mjau = prompt("Hur många maju vill du ha?");
    }

console.log(":(");

//----------------------------------------------------
// FOR - Fårepedemi

var numberOfSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

for (var i = monthNumber; i <= monthsToPrint; i++)
    {
        var remove = 0;
        var remove2 = 0;
        
        if (i % 4 == 0)
            {
                remove = numberOfSheep * 0.75;
                numberOfSheep -= remove;
            }
        else if (numberOfSheep > 10000)
            {
                remove2 = numberOfSheep / 2;
                numberOfSheep -= remove2;
            }
        
        if (remove != 0 || remove2 != 0)
            {
                console.log("Removing " + (remove + remove2) + " sheep from the population.");
            }
        
        numberOfSheep = numberOfSheep * 4;

        console.log("There will be " + numberOfSheep + " sheep after " + i + "month(s)!");
    }

//------------------------------------------------------------------
// FOR FOR - Multiplikation

for (i = 1; i <= 10; i++)
     {
         var fstr = "";
         
             for (j = 1; j <= 10; j++)
                 {
                     fstr += (i * j) + " ";
                 }
         
         console.log(fstr);      
}
