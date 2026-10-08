let a=10;
let b=20;
let c="10";
let d="20";

console.log(a==b);//false
console.log(a==c);//true
console.log(a===c);//false
console.log(a!=b);//true
console.log(a!==b);//true


let x=5;
let y=2;
console.log(x%y);//1
let p=10;
let q=3;
console.log(p/q);//3.3333

let m=true;
let n=false;
let o=true;

console.log(n && m);
console.log(n && o);
console.log(m && o);

console.log(a++);//10
console.log(a--);//11
console.log(a);//10


console.log(a>b ? "hello":"bye");