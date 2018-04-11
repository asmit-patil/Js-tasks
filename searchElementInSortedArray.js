var sortedArrayForSearch=[11,23,45,67,89];
//var arrayForSearch=["asmit","amit","Asmit","shrutika","akshita","nikhil","shashikant"];
var arrayIterator,searchElement= 47,flag=0;count=1;

for(arrayIterator=0; arrayIterator< sortedArrayForSearch.length;arrayIterator++){
  
   
    if(searchElement >= sortedArrayForSearch[arrayIterator]){
    //count++;
        if(searchElement == sortedArrayForSearch[arrayIterator]){
            flag=1;
            break;
        }
        else{
    
            flag=0;
        }
    }

        
}
if(flag==1){
    console.log(searchElement +" found at array index["+ arrayIterator+"]");
}
else{
    console.log(searchElement+" is not found in given array");
}
//console.log(count);