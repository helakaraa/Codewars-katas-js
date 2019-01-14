var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
if (iterable.length==0)
{
return [];
}

else{
var diff=iterable[0];
var result=[];
result[0]=diff;
j=1;
for (i=0;i<iterable.length;i++)
{ if (diff!=iterable[i]){
     result[j]=iterable[i];
     diff=iterable[i];
     j=j+1;
   }
}
}
return result;
}
