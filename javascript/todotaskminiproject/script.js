function addtask(){
    const newtask=document.getElementById("taskinput").value.trim();
    const Li=document.createElement("li");
    Li.classList.add("p-3");
   

  const SPAN = document.createElement("span");
  SPAN.textContent = newtask;

  const BUTTON = document.createElement("button");
  BUTTON.classList.add("btn", "btn-danger", "btn-sm", "ms-3");
  BUTTON.textContent = "Delete";
  BUTTON.onclick = () => Li.remove();
   const BUTTONedit = document.createElement("button");
  BUTTONedit.classList.add("btn", "btn-primary", "btn-sm", "ms-3");
  BUTTONedit.textContent = "Edit";
 // BUTTON.onclick = () => Li.remove();

  Li.appendChild(SPAN);
  Li.appendChild(BUTTON);
   Li.appendChild(BUTTONedit);

  document.getElementById("taskList").appendChild(Li);

  document.getElementById("taskinput").value = "";
}
