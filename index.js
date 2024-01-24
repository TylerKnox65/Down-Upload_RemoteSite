const loginForm = document.getElementById("myForm"); 
//document.getElementById("getfile").style.display = "none";
//document.getElementById("submitButton").addEventListener("click", handleSubmit);
function Upload() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
    
    document.getElementById("myForm").style.display = "none";
    
  }
function handleSubmit(e) {
    alert("Login")
    e.preventDefault();
    console.log(e)
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    alert(formData,formProps)
  }
function getValue(username,password){
  user = document.getElementById(username).value; 
  pass = document.getElementById(password).value;

  document.getElementById("myForm").style.display = "none";
  if (user == "upload" && pass == "1234") {
    
    document.getElementById("getfile").style.display = "block";
  }
  return false;

}

