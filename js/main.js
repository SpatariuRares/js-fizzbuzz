var numeri = [];
var numeri_intersazioni=100;
for (var i=0; i<numeri_intersazioni;i++){
    numeri.push(i+1);
    if(numeri[i]%3==0 || numeri[i]%5==0){
        if(numeri[i]%3==0 && numeri[i]%5==0){
            console.log("FizzBuzz")
        } else if(numeri[i]%3==0){
            console.log("Fizz")
        } else{
            console.log("Buzz")
        }
    }
    else {
        console.log(numeri[i])
    }
}
