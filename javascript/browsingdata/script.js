 const name1= document.getElementById("username");

username.addEventListener("submit",(e)=>{
    e.preventDefault;
    const inputdata= new inputdata(name1);
    const lg=inputdata.get("username");
    let isvalid="true";


    for(var i=0;i<lg.le;i++){
        if((lg.charAt(i)>="A"&&lg.charAt(i)<="Z")||(lg.charAt(i)>="A"&&lg.charAt(i)<="Z")||lg.charAt(i)===" "){
            isvalid="true";
        }
        else{
            isvalid="false";
            break;
        }

    }

console.log(isvalid?"valid":"invalid")
   

})
