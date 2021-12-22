function users() {
            for(n=1;n>0;n++){
                if(localStorage.getItem(n).length>0){
                    var table = document.getElementById("Admintable");
                    var row = table.insertRow(n);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    var cell6 = row.insertCell(5);
                    cell1.innerHTML = n;
                    cell2.innerHTML = JSON.parse(localStorage.getItem(n)).Email;
                    cell3.innerHTML = JSON.parse(localStorage.getItem(n)).Name;
                    cell4.innerHTML = JSON.parse(localStorage.getItem(n)).phone_number;
                    cell5.innerHTML = JSON.parse(localStorage.getItem(n)).Password;
                    if(JSON.parse(localStorage.getItem(n)).allowed==true){
                        cell6.innerHTML = "Allow";
                    }
                    else{
                        cell6.innerHTML = "Blocked";
                    }
                }
                else break;
            }
        }
        function Block(){
            let pusername = prompt("Write Username")
            for(n=1;n>0;n++){
                if(localStorage.getItem(n)!=null){
                    if(JSON.parse(localStorage.getItem(n)).Name == pusername){
                        var obj = {
                            Email: JSON.parse(localStorage.getItem(n)).Email,
                            Name: JSON.parse(localStorage.getItem(n)).Name,
                            Password: JSON.parse(localStorage.getItem(n)).Password,
                            allowed: false,
                            phone_number: JSON.parse(localStorage.getItem(n)).phone_number  
                        };
                        localStorage.setItem(n, JSON.stringify(obj));
                        break;
                        
                    }
                 
                }
                else if(localStorage.getItem(n)==null){
                    window.alert("Wrong Username"); break;
                   }
            }
        }
        function Allow(){
            let pusername = prompt("Write Username")
            for(n=1;n>0;n++){
                if(localStorage.getItem(n)!=null){
                    if(JSON.parse(localStorage.getItem(n)).Name==pusername){
                        var obj = {
                            Email: JSON.parse(localStorage.getItem(n)).Email,
                            Name: JSON.parse(localStorage.getItem(n)).Name,
                            Password: JSON.parse(localStorage.getItem(n)).Password,
                            allowed: true,
                            phone_number: JSON.parse(localStorage.getItem(n)).phone_number  
                        };
                        localStorage.setItem(n, JSON.stringify(obj));
                        break;
                     }
                    
                }
                else if(localStorage.getItem(n)==null){
                    window.alert("Wrong Username"); break;
                   }
            }
        }
        function change_email(){
            let pusername = prompt("Write Username")
            
            for(n=1;n>0;n++){
                if(localStorage.getItem(n)!=null){
                    if(JSON.parse(localStorage.getItem(n)).Name==pusername){
                        let newemail = prompt("Write a new Email");
                        var obj = {
                            Email: newemail,
                            Name: JSON.parse(localStorage.getItem(n)).Name,
                            Password: JSON.parse(localStorage.getItem(n)).Password,
                            allowed: true,
                            phone_number: JSON.parse(localStorage.getItem(n)).phone_number  
                        };
                        localStorage.setItem(n, JSON.stringify(obj));
                        break;
                     }
                     
                }
                else if(localStorage.getItem(n)==null){
                    window.alert("Wrong Username"); break;
                   }
            }
        }
        function change_password(){
            let pusername = prompt("Write Username")
          
            for(n=1;n>0;n++){
                if(localStorage.getItem(n)!=null){
                    if(JSON.parse(localStorage.getItem(n)).Name==pusername){
                        let newpassword = prompt("Write a new password")
                        var obj = {
                            Email: JSON.parse(localStorage.getItem(n)).Email,
                            Name: JSON.parse(localStorage.getItem(n)).Name,
                            Password: newpassword,
                            allowed: true,
                            phone_number: JSON.parse(localStorage.getItem(n)).phone_number  
                        };
                        localStorage.setItem(n, JSON.stringify(obj));
                        break;
                     }
                 
                }
                else if(localStorage.getItem(n)==null){
                    window.alert("Wrong Username"); break;
                }
            }
        }
        function change_phone(){
            let pusername = prompt("Write Username")
         
            for(n=1;n>0;n++){
                if(localStorage.getItem(n)!=null){
                    if(JSON.parse(localStorage.getItem(n)).Name==pusername){
                        let newphonenumber = prompt("Write a new phone number")
                        var obj = {
                            Email: JSON.parse(localStorage.getItem(n)).Email,
                            Name: JSON.parse(localStorage.getItem(n)).Name,
                            Password: JSON.parse(localStorage.getItem(n)).Password,
                            allowed: true,
                            phone_number: newphonenumber
                        };
                        localStorage.setItem(n, JSON.stringify(obj));
                        break;
                     }
     
                }
                else if(localStorage.getItem(n)==null){
                    window.alert("Wrong Username"); break;
                }
           }
       }
