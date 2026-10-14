const ary=["Apple",2.5,99,"himachal","a"];
ary.forEach((element)=>{
    console.log(element);
});
ary.map((element)=>{
    console.log(element);
});


ary.forEach((element)=>{
    if(typeof(element) === "number"){
        console.log(element);
    }
});


var x= ary.map((element)=>{
    if(typeof(element) === "number"){
        return element;
    }
});

console.log("X=",x);



const ar2=["Apple",2.5,99,"himachal","a"];

var f=ar2.filter((item)=> item !==99);
console.log("f= ",f)

var f=ar2.find((item)=> item !==99);
console.log("f= ",f)

var fix=ar2.findIndex((item)=> item ===99);
console.log("fix= ",fix)

const ar3=[2,5,1,7,3,9,4,8];

var s=ar3.sort((a,b)=>b-a);
console.log("s= ",s)



