function login(){
    const nm= document.getElementById("username").value.trim();
     const ps= document.getElementById("password").value;
    
     console.log(nm,ps);
}

const loginform=document.getElementById("loginform");
const  loginformdataJSON={};
loginform.addEventListener('submit',(e)=>{
    e.preventDefault();
    const fd=new FormData(loginform);
     const NM= document.getElementById("username").value.trim();
     const PS= document.getElementById("password").value;

     console.log(NM,PS);

     loginform.forEach((value,key)=>console.log(key,":",value));
      loginform.forEach((value,key)=>(loginform[key]=value));//single () after => means it return something
});
console.log(loginformdataJSON);