var sortedArrayForSearch=[11,23,45,67,89,99,129,456];

function binarySearch(array,searchElement){
    var length= array.length,lowerIndex=0,upperIndex=length-1,middleIndex=Math.floor((upperIndex+lowerIndex)/2);

    
     while(array[middleIndex] != searchElement && lowerIndex < upperIndex)
        {
           if (searchElement < array[middleIndex])
            {
                upperIndex = middleIndex - 1;
            } 
          else if (searchElement > array[middleIndex])
            {
                lowerIndex = middleIndex + 1;
            }
            middleIndex = Math.floor((lowerIndex + upperIndex)/2);
        }
    if (array[middleIndex] != searchElement) {
        console.log(searchElement +" is not found in array") ;
    } else{
        console.log(searchElement+" found at index["+ middleIndex+"]");
    } 

}
binarySearch(sortedArrayForSearch, 129);
binarySearch(sortedArrayForSearch, 1);

