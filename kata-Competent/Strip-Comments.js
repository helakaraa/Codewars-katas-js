function ArrRevalue(arr,marker){
var arr1=[];
arr.forEach(function (element){ arr1.push(element.split(marker)[0].replace(/\s*$/,""))})
return arr1;
}


function solution(input,markers){
var arr_marker=input.split(/\n/);
markers.forEach(function (marker){
      arr_marker=ArrRevalue(arr_marker,marker);
});
return arr_marker.join("\n");
}
