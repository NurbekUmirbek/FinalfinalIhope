$(document).ready(function(){
  $(".header").click(function(){
    $(".header__logo").toggleClass('flip');
    $(".header__logo").text("Serious and interesting animation");
    $(".header__logo").css({"color": "#fd0000"});

    console.log("Hello, I am checking my animation");
  });
});
var customers = 0;
for(n=1;n>0;n++){
  if(localStorage.getItem(n)!=null){
      customers=n;
  }
  else break;
}
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
