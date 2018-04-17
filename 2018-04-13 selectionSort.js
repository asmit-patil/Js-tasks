// array to sort
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function selectionSort(array) {
  for(var firstzIterator = 0; firstzIterator < array.length; firstzIterator++) {
    var min = firstzIterator;
    for(var secondIterator = firstzIterator + 1; secondIterator < array.length; secondIterator++) {
      if(array[secondIterator] < array[min]) {
        min = secondIterator;
      }
    }
    if(firstzIterator !== min) {
      swap(array, firstzIterator, min);
    }
  }
  return array;
}
// swap function
function swap(array,firstNumber , secondNumber) {
  var tempVariable = array[firstNumber ];
  array[firstNumber] = array[secondNumber];
  array[secondNumber] = tempVariable;
}


console.log(selectionSort(array));