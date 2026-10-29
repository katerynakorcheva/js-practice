const numbersList = [1,10,14,2,4,5,43,34];
const slicedArray = numbersList.slice(); 
slicedArray.sort((a, b) =>  (a - b) );
console.log("Second Array:", slicedArray);
console.log("First Array:", numbersList);