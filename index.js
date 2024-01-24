const loginForm = document.getElementById("login-form"); 
document.getElementById("submitButton").addEventListener("click", handleSubmit);
 
 
 function Upload() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    alert(js_variable_name)
    document.getElementById("myForm").style.display = "none";
    
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e)
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    alert(formData,formProps)
  }

