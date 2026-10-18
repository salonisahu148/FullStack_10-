const headingtext=document.getElementById("heading");
const paratext=document.getElementById("studentmessage");
const btnlabel=document.getElementById("coursebutton");

console.log(headingtext.innerText);
console.log(paratext.textContent);
console.log(btnlabel.innerHTML);




headingtext.innerText="saloni sahu";


function updatemyname(){
    const myName=document.getElementById("myname").value.trim();
    paratext.innerText="welcom to your learning portal !!" + myName;

    //   paratext.innerText=paratext.innerText+"!! " + myName;

}

const pic=document.getElementById("picture");
pic.src="./Screenshot_20251016-000818.Instagram (1).png"
pic.alt="changepicture"

function change(){
    const changename=document.getElementById("myname");
    myName
}















