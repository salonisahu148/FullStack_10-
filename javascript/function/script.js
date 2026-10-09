function sum(a,b){
    let c=a+b;
    console.log(c);
}
sum(5,10);


function sum_with_d(x,y=10){
    console.log(x+y);
}

 sum_with_d(8,12);

 function calculate(a,b){
   return b-a;
}
let ans=calculate(3,7);
console.log(ans);


const greet=function(){
    console.log("welcome");
}

greet();



for()