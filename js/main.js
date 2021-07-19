var numeri = [];
var output="";
var numeri_intersazioni=100;
for (var i=0; i<numeri_intersazioni;i++){
    numeri.push(i+1);
    if(numeri[i]%3==0 && numeri[i]%5==0){
        output+="<li> <h2>fizz</h2> </li>";
    } else if(numeri[i]%3==0){
        output+="<li> buzz </li>";
    } else if (numeri[i]%5==0){
        output+="<li> fizzbuzz </li>";
    }else {
        output+="<li>"+numeri[i]+"</li>";
    }
}
document.getElementById("lista").innerHTML=output;
