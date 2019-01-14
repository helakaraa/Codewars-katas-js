function removeSmallest(numbers) {

if (numbers.length==1)
{
  return[];
}
else{
  var smallest= 0;
 for(i=0;i<numbers.length;i++)
 { if (numbers[i]<numbers[smallest])
    {smallest=i;}
 } 

  numbers.splice( smallest, 1 );
   return numbers;
}
}
