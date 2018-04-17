function minmax(arr,arraylength){
    var max,min;
    /*If there is only one element then return it as min and max both*/
  if (arraylength == 1)
  {
     max = arr[0];
     min = arr[0];    
     console.log("Available array is :[ "+ arr +" ]"); 
     console.log("maximum element from array is: "+max);
     console.log("minimum element from array is: "+min);
  }    
  
  
  else 
  {
        /* If there are more than one elements, then initialize min 
      and max*/
     if (arr[0] > arr[1])  
    {
      max = arr[0];
      min = arr[1];
    }  
    else
    {
      max = arr[1];
      min = arr[0];
    }    
 
    for (var iterator = 2; iterator<arraylength; iterator++)
    {
        if (arr[iterator] >  max)      
            max = arr[iterator];
   
        else if (arr[iterator] <  min)      
            min = arr[iterator];
    }
    console.log("Available array is :[ "+ arr +" ]");
    console.log("maximum element from array is: "+max);
    console.log("minimum element from array is: "+min);
   }

}
var unsortedArray1=[12,34,56-87,0,678,567,345,45];
var length1= unsortedArray1.length;
minmax(unsortedArray1,length1);
console.log();
var unsortedArray2=[12];
var length2= unsortedArray2.length;
minmax(unsortedArray2,length2);