//Simulera en stack i JavaScript

/*
var stackArray = [];

stackArray.push(1);
stackArray.push(2);
stackArray.push(3);
stackArray.pop();
stackArray.pop();
stackArray.pop();

*/

//------------------------------------------
// Simulera en kö i JavaScript
/*
var queue = [];

queue.push(1);
queue.push(2);
queue.push(3);
queue.shift();
queue.shift();
queue.shift();
*/

//----------------------------------------------
// Sortera en array med bubblesort
/*
var arr = [0,17,-3,8,1,5];

for (i = 0; i < arr.length; i++) {
	for (j = 0; j < arr.length; j++) {
		if (arr[i] < arr[j]) {
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
}

console.log(arr);
*/
//--------------------------------------
// Insertion sort
var unsortedArray = [14,33,27,10,35,19,42,44];
var sortedArray = [];
var uAL = unsortedArray.length;
var sAL = sortedArray.length;


for (i = 0; i < uAL; i++) {
	for (j = 0; j < uAL; j++) {
		if (unsortedArray[i] < unsortedArray[j]) {
			for (k = 0; k < sAL; k++) {
				if (unsortedArray[i] < sortedArray[k])
				{
					var temp = sortedArray.splice(k, 1);
					temp.push(unsortedArray[i]);
					sortedArray = temp.concat(sortedArray);

					//sortedArray = temp;

					unsortedArray.splice(i, 1);
					sAL += 1;
				}
				else if (sortedArray[k] == undefined)
				{
					sortedArray.push(unsortedArray[i]);
				}
			}
		}
	}
}

console.log(sortedArray);