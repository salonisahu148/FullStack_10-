function showalert(){
    alert("click button");
}


document.getElementById("clickbutton").addEventListener("click",showalert2);

function showalert2(){
    alert("click me buton clicked using js event")
}


document.getElementById("box").addEventListener("click",()=>{
    document.getElementById("box").innerText="after clicking"
});
document.getElementById("onmouseover").addEventListener("mouseover",()=>{
    document.getElementById("onmouseover").innerText="Pointer is over the paragraph!";
});
document.getElementById("onmouseover").addEventListener("mouseout",()=>{
    document.getElementById("onmouseover").innerText="Move your pointer here";
});

document.getElementById("mousebutton").addEventListener("mousedown",()=>{
    document.getElementById("mousebutton").innerText="mousebutton pressed";
});

document.getElementById("mousebutton").addEventListener("mouseup",()=>{
    document.getElementById("mousebutton").innerText="mousebutton released";
});

document.getElementById("double-click").addEventListener("dblclick",()=>{
    document.getElementById("double-click").innerText="You double-clicked this paragraph!";
});

document.getElementById("mouseoverpara").addEventListener("mouseover",()=>{
    document.getElementById("mouseoverpara").innerText="Mouse pointer is moving over this text!";
});
document.getElementById("mouseoverpara").addEventListener("mouseout",()=>{
    document.getElementById("mouseoverpara").innerText="pointer over the paragraph";
});

document.getElementById("nameSubmit").addEventListener("click", () => {
  console.log(document.getElementById("fullName").value.trim());
});

document.getElementById("fullName").addEventListener("keydown", (e) => {
  e.key === "Enter" &&
    console.log(document.getElementById("fullName").value.trim());
});

document.getElementById("LoginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Login Done");
});