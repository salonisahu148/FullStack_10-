const showassbtn=document.getElementById("showAssignmentNotification");
const showattbtn=document.getElementById("showAttendanceNotification");
const stopassbtn=document.getElementById("stopAssignmentNotification");


const asspara=document.getElementById("AssignmentNotification");
const attpara=document.getElementById("AttendanceNotification");






function showassignment(){
   asspara.textContent=" Your assignment deadline is approaching!";
}







const parent=document.getElementById("outer");
const child=document.getElementById("inner");

parent.addEventListener("click",()=>{
    console.log("parent clicked");
});

child.addEventListener("click",()=>{
    console.log("child clicked");
});