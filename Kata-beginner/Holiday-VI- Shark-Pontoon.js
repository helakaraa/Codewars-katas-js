function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
 if (dolphin){
  if( (sharkSpeed/2 )/sharkDistance < youSpeed/pontoonDistance){
   return "Alive!";
 }
 else 
 
 { return "Shark Bait!";
 }
  
 }
 else 
 {
  if( sharkSpeed/sharkDistance < youSpeed/pontoonDistance){
   return "Alive!";
 }
 else 
 
 { return "Shark Bait!";
 }

}
}
