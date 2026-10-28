const ob={
    fullname:"Patel",
    gender:'male',
    college:"sam",
    year:3,
    cgpa:8.2,
};


//const { name,year,cgpa } = ob;
console.log(fullname);

console.log(ob);
console.log(Object.keys(ob));
console.log(Object.values(ob));
console.log(Object.entries(ob));

const xyz =[2,3,6,45,643,22];
//spread operator
console.log(...xyz);
const ar2=[34,53,34,32,...xyz];

//rest opertaor

function sum(...n){
   return n.reduce((result=0,num)=>(result +=num));
}
const ans=sum(2,4,5,3,2,5,3);
console.log(ans);



const student = {
  name: "Aarav",
  age: 20,
  city: "Bhopal"
};

const { name, age, city } = student;

console.log(name);
console.log(age);



