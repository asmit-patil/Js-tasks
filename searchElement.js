var arrayForSearch=[223,56,798,-1,23];
//var arrayForSearch=["asmit","amit","Asmit","shrutika","akshita","nikhil","shashikant"];
var arrayIterator,searchElement= 30,flag=0,count=1;

for(arrayIterator=0; arrayIterator< arrayForSearch.length;arrayIterator++){
  
    if(searchElement == arrayForSearch[arrayIterator]){
        flag=1;
        break;
    }
    else{
        flag=0;
    }
    //count++;    
}
if(flag==1){
    console.log(searchElement +" found at array index["+ arrayIterator+"]");
}
else{
    console.log(searchElement+" is not found in given array");
}
//console.log(count);