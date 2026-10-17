let text=document.querySelector("h1").innerText;

console.log(text+" saloni");

function submit(){
    console.log("submit button clicked")

    const nm=document.querySelector("#fullname").value.trim();//by #
     const em=document.getElementById("email").value.trim();//by id
       const pn=document.getElementById("phone").value.trim();
         const dob=document.getElementById("dob").value.trim();
     console.log("full name :",nm);
      console.log("full name :",em);
      console.log("full name :",pn);

      console.log("full name :",dob);


}

function submit2(){
    console.log("submit button clicked")


    const formdata=[];
     document.querySelectorAll("input, select").forEach((item) => {
    formdata.push(item.value.trim());
  });

  const fieldName = [];
  document.querySelectorAll("input, select").forEach((item) => {
    fieldName.push(item.name);
  });

  for (var i = 0; i < fieldName.length; i++) {
    console.log(fieldName[i] + " : " + formdata[i]);
  }

}

