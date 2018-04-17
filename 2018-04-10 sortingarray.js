var sortArray=[23,4 ,14,5,-89,95];
//var sortArray=["asmit","amit","shrutika","akshita","nikhil","shashikant"]
var firstIterator,secondIterator,swapNumber;
console.log("Array before sorting:"+ sortArray);



for(firstIterator=0;firstIterator<sortArray.length;firstIterator++){
    for(secondIterator=1;secondIterator < sortArray.length-1;secondIterator++){
        if(sortArray[secondIterator-1] > sortArray[secondIterator]){
            swapNumber=sortArray[secondIterator-1];
            sortArray[secondIterator-1]=sortArray[secondIterator];
            sortArray[secondIterator]=swapNumber;
        }
    }
}
console.log("Array after sorting:"+ sortArray);