function validate() {
    var Name = document.getElementById("name")
    var Email = document.getElementById("email")
    var Age = document.getElementById("age")
    var Address = document.getElementById("address");
    var CompanyName= document.getElementById("cmp");
    
  
    if (Name.value == ""|| Name.length<2) {
        window.alert("Please enter valid name.");
        return false;
      
    }
    
  
    
    if (Email.value== "") {
        window.alert(
          "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
  
    if (Age.value == "" || Age.value>100 ) {
      window.alert(
        "Please enter a valid age");
      phone.focus();
      return false;
  }
  
    if (Address.value == "") {
      window.alert("Please enter your address.");
      address.focus();
      return false;
  }
  
  if (CompanyName.value == "") {
    window.alert("Please enter your company name.");
    address.focus();
    return false;
  }
     return true;
  }
  
  
  function ValidateEmail(mail) 
  {
   if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
    {
      return (true)
    }
      alert("You have entered an invalid email address!")
      return (false)
  }