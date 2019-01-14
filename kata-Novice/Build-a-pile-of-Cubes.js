function findNb(m) {
   var n=1;
   if (parseInt(Math.sqrt(m)) === Math.sqrt(m))
         {    while(Math.pow(n*(n+1)/2,2) !=m){ n=n+1;}
              return n;}
    else { return (-1)};
    
}
