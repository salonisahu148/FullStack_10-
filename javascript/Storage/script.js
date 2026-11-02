const data={
    title: "MyPhone 18",
    description: "very good phone is deep beetroot Color",
    button1: "₹25000",
    button2: "buynow",
 };
const datareadytostore=JSON.stringify(data);
localStorage.setItem("mynewdata",datareadytostore);
localStorage.setItem("myname","salonisahu");
localStorage.setItem("yourname","rajvardhan");
const getdata=localStorage.getItem("myname");



document.querySelector("body").appendChild((document.createElement("div").innerText=getdata));