function submit2(){
    console.log("send meassage button clicked")


    const formdata=[];
     document.querySelectorAll("input, textarea").forEach((item) => {
    formdata.push(item.value.trim());
  });

  const fieldName = [];
  document.querySelectorAll("input, textarea").forEach((item) => {
    fieldName.push(item.name);
  });

  for (var i = 0; i < fieldName.length; i++) {
    console.log(fieldName[i] + " : " + formdata[i]);
  }

}




function footerform(){
      const formdata=[];
     document.querySelectorAll("input").forEach((item) => {
    formdata.push(item.value.trim());
  });

  const fieldName = [];
  document.querySelectorAll("input").forEach((item) => {
    fieldName.push(item.name);
  });

  for (var i = 0; i < fieldName.length; i++) {
    console.log(fieldName[i] + " : " + formdata[i]);
  }
}