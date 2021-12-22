$(document).ready(function(){
    $(".header").click(function(){
      $(".header__logo").toggleClass('flip');
      $(".header__logo").text("Serious and interesting animation");
      $(".header__logo").css({"color": "#fd0000"});
  
      console.log(852);
    });
  });

  function signUp() {
 
    let validation = true;
    let email = document.getElementById("Email").value,
       username = document.getElementById("username").value,
        password = document.getElementById("password").value,
        repassword = document.getElementById("rePassword").value,
        phone =document.getElementById("phone").value;
  
    let valid_email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let valid_password =  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    let valid_username = /^[a-zA-Z0-9_-]+$/;
  
  
    if (email == null || email == "" || valid_email.test(email) == false) {
        document.getElementById("email_message").innerHTML = "Email address empty or wrong format";
        validation = false;
    }
    if (username == null || username == "" || valid_username.test(username) == false) {
        document.getElementById("username_message").innerHTML = "Please enter the correct information";
        validation = false;
    }
    if (password == null || password == "" || valid_password.test(password) == false) {
      document.getElementById("password_message").innerHTML = "Please enter the correct password";
      validation = false;
  }
    if(password.length<8){
      document.getElementById("password_message").innerHTML = "Please enter the correct password";
      validation=false;
    }
  
    if(repassword.length<8||password!==repassword){
      document.getElementById("repassword_message").innerHTML = "Please enter the correct password";
      validation=false;
    }
  
    if (validation == true) {
        customers++;
        let user = {Email: email, Name:  username, Password:password, allowed: true, phone_number: phone};
        localStorage.setItem(customers, JSON.stringify(user));
       
        document.getElementById("email_message").innerHTML = "";
        document.getElementById("repassword_message").innerHTML = "";
        document.getElementById("password_message").innerHTML = "";
        document.getElementById("username_message").innerHTML = "";
        document.location.href = "main.html"
    }
  }
      
        function LogIn(){
            event.preventDefault();
            let log_em = document.getElementById("username").value;
            let log_pass = document.getElementById("password").value;

            if(log_em == "admin" && log_pass == "password"){
                document.location.href = "adminpanel.html";
                console.log("ff");
            }
            for (i = 1; i>=0; i++){
                let user = localStorage.getItem(i);
                let data = JSON.parse(user);
                if (data == null){
      document.getElementById("result").innerHTML = "Please, type your login and password correctly";
                    console.log("ghj")
                    break;
                }
                else{
                    if(log_em == data.Name && log_pass == data.Password){
                        if(data.allowed == true){
                            console.log("gooo");
                            document.location.href = "main.html";
                            break;
                        }
                        else{
                            document.getElementById("result").innerHTML = "Your account is disabled";
                        }
                    }
                }
            }
        }
