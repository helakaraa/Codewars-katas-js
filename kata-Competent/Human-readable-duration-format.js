
function formatDuration (seconds) {
var time=[];
var s=seconds/(3600*24*365);


if(Math.floor(s)==1)
{
	time.push("1 year");
	s=seconds%(3600*24*365);
}
else if(Math.floor(s)>1)
{
	time.push(Math.floor(s)+" years");
	s=seconds%(3600*24*365);
	
}
else{
	s=seconds%(3600*24*365);
}

if(s/(3600*24)==1)
{
	time.push("1 day");
	s=s%(3600*24);	
}
else if(s/(3600*24)>1)
{   
	time.push(Math.floor(s/(3600*24))+" days");
	s=s%(3600*24);
		
}
else{
	s=s%(3600*24);
}



if(Math.floor(s/3600)==1)
{
	time.push("1 hour");
	
}

if(Math.floor(s/3600)>1 && Math.floor(s/3600)<24)
{
	time.push(Math.floor(s/3600)+" hours");
	
}
	if(Math.floor((s%3600)/60)==1)
{
	time.push("1 minute");
	
}
if(Math.floor((s%3600)/60)>1)
{
	time.push(Math.floor((s%3600)/60)+" minutes");
	
}

if(Math.floor((s%3600)%60)==1)
{
	time.push("1 second");
	}
if(Math.floor((s%3600)%60)>1)
{
	time.push(Math.floor((s%3600)%60)+" seconds");
	
}

if (time.length==0)
{
 return 'now';
}


if (time.length==1)
{
 return time[0];
}

 if (time.length==2){
 return time[0]+" and "+time[1];
}
if (time.length==3){
	return time[0]+", "+time[1]+" and "+time[2];
}
if (time.length==4){
	return time[0]+", "+time[1]+", "+time[2]+" and "+time[3];
}
if (time.length==5){
	return time[0]+", "+time[1]+", "+time[2]+", "+time[3]+" and "+time[4];
}
}
