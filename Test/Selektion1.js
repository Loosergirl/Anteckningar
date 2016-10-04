// Kvot & rest
var tal = prompt("Skriv in ett tal du vill dividera med 2");
var rest = tal % 2;
tal = (tal - rest) / 2;

// Är mellanslag nödvändiga i JavaScript?
var str = "Heltalskvoten av talet dividerat med 2 är: " + tal + ".";

if (rest > 0){ 
str = str + " Resten av talet modulo två är: " + rest;
}

alert (str);

// -------------------------------------------------
// Kokar vattnet?

var temp = prompt("Skriv in hur många grader vattnet är: ")

if (temp == 100){
    alert("Vattnet kokar!");
}
{else if (temp == 50){
    alert("Det är halvvägs nu!");
}
 else{
     alert("Vattnet kokar inte");
 }

 // --------------------------------------------------------
 // Går det att bada?
 
 var water = prompt("Finns det vatten? Svara true eller false: ")
 var temperature = prompt("Hur många grader är vattnet?");
 
 if (water == 'true' && temperature >= 30){
     alert("Varsågod och bada!");
 }
 else if(water == 'false' || temperature < 30){
     alert("Det går inte att bada.");
 }
 else {
     alert("Ett fel har uppstått.")
 }
 
 // ---------------------------------------------------------
 // Hästtokig!
 
 var age = prompt("Hur gammal är du?");
 
 if (age < 12){
     alert("Du är för ung för att tävla!");
 }
 else {
     var weight = prompt("Hur mycket väger du?")
     
     if (weight <= 30){
         alert("A-ponny");
     }
     else if (weight > 30 && weight <= 50){
         alert("B-ponny");
     }
     else if (weight > 50 && weight <= 65){
         alert("C-ponny");
     }
     else{
         alert("Det finns inga ponnys för denna viktklass")
     }
 }
 
 //--------------------------------------------------
 // Vad blir det för middag 2
 
 var day = prompt("Vad är det för veckodag idag?");
 
 switch (day){
     case "måndag":
         alert("Kyckling");
         break;
     case "tisdag":
         alert("Pannkaka");
         break;
     case "onsdag":
         alert("Ärtsoppa");
         break;
     case "torsdag":
         alert("Gryta");
         break;
     case "fredag":
     case "lördag":
     case "söndag":
         alert("Kålsoppa")
         
         // Kan man skriva default?
         
         /* Switch-satser är definitivt bättre då absurt många
         men enkelt definierade valalternativ finns. 
         If-satser är bättre om ett fåtal alternativ finns.
         De är också bättre om komplicerade conditions används.*/
 }
 
 //--------------------------------------
 // Frågesport
 
 var name = prompt("Vad heter du?");
 var correct = 0;
 
 var a = prompt("Vad är det som brinner och brinner men aldrig brinner ned?");
 var b = prompt("Vad är det som går och går men aldrig kommer till dörren?");
 var c = prompt("Hur många ben har en hund?");
 var d = prompt("Hur många dagar går det på en vecka?");
 var e = prompt("Hur många månader går det på ett år?")
 
 if (a == 'solen')
     {
         correct += 1;
     }
 if (b == 'klockan')
     {
         correct += 1;
     }
 if (c == 4)
     {
         correct += 1;
     }
 if (d == 7)
     {
         correct += 1;
     }
 if (e == 12)
     {
         correct += 1;
     }
 
 if (correct > 0 && correct < 3)
     {
         document.write("Nully won bronze!");
     }
 else if (correct > 2 && correct < 5)
     {
         document.write("Nully won silver!");
     }
 else if (correct == 5)
     {
         document.write("Wow, Nully went gold!");
     }
 else
     {
         document.write("This is a sad day for sports")
     }