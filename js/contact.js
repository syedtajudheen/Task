
    /*************************firstname*************************/
     function firstnamevalidation() {
        var reg=/^[a-zA-Z]+$/;
        var name=document.contact_form.firstname.value;
        
        if (name=="") {
            document.getElementById('error_1').innerHTML="**Please Enter Your FirstName**";
            
        }
        else if(reg.test(name)!=true) {
            document.getElementById('error_1').innerHTML="*Only a-z,A-Z Characters*";
            
        }
        else {
            document.getElementById('error_1').innerHTML="";
        }
     }
    /************************lastname*************************/
      function lastnamevalidation() {
            var reg=/^[a-zA-Z]+$/;
            var name=document.contact_form.lastname.value;
        
            if (name=="") {
                       document.getElementById('error_2').innerHTML="**Please Enter Your LastName**";
           
            }
            else if(reg.test(name)!=true) {
            document.getElementById('error_2').innerHTML="*Only a-z.A-Z Characters*";
            
            }
            else {
            document.getElementById('error_2').innerHTML="";
            }
      }
    
    /*************************Email*************************/
     function emailvalidation() {
        var email=document.contact_form.email.value;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
        
        if(email=="") {
            document.getElementById("error_email").innerHTML="**Please enter email id**";
            
        }
        else if(!email.match(mailformat)) {  
            document.getElementById("error_email").innerHTML="**Please enter the correct format**";
            
        } 
        else {
            document.getElementById("error_email").innerHTML="";
        }
     }
    /*************************Contact Number*************************/
     function contactvalidation() {
        var contact=document.contact_form.contactno.value;
        var contactformat = /-?(?:[0-9]+(?:\.[0-9]*)?|(?:[0-9]+)?\.[0-9]+)/ ;  
    
        if(contact=="") {
               document.getElementById("error_num").innerHTML="**Please enter your Contact Number**";
               
        }
        else if(!contact.match(contactformat)) {  
               document.getElementById("error_num").innerHTML="*Please enter the correct format*";
               
        } 
        else {
               document.getElementById("error_num").innerHTML="";
        }
     }
    /*************************Message*************************/
     function messagevalidation() {
         var msg=document.contact_form.message.value;
         if(msg=="") {
                   document.getElementById("error_msg").innerHTML="**Please leave your Message**";
                   
         } 
         else{
                   document.getElementById("error_msg").innerHTML="";
         }
     }
  

    function formvalidation() {
    /*************************firstname*************************/
    
        var reg=/^[a-zA-Z]+$/;
        var name=document.contact_form.firstname.value;
        
        if (name=="") {
            document.getElementById('error_1').innerHTML="**Please Enter Your FirstName**";
            document.contact_form.firstname.focus();
        }
        else if(reg.test(name)!=true) {
            document.getElementById('error_1').innerHTML="*Only a-z,A-Z Characters*";
            document.contact_form.firstname.focus();
        }
        else {
            document.getElementById('error_1').innerHTML="";
        }
    
        /************************lastname*************************/
    
        var reg=/^[a-zA-Z]+$/;
        var name=document.contact_form.lastname.value;
        
        if (name=="") {
            document.getElementById('error_2').innerHTML="Plz Enter Your Name";
            document.contact_form.lastname.focus();
        }
        else if(reg.test(name)!=true) {
            document.getElementById('error_2').innerHTML="Only Characters";
            document.contact_form.lastname.focus();
        }
        else {
            document.getElementById('error_2').innerHTML="";
        }
    
    
    /*************************Email****************************/
   
        var email=document.contact_form.email.value;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
        
        if(email=="") {
            document.getElementById("error_email").innerHTML="**Please enter email id**";
            document.contact_form.email.focus();
        }
        else if(!email.match(mailformat)) {  
            document.getElementById("error_email").innerHTML="**Please enter the correct format**";
            document.contact_form.email.focus(); 
        } 
        else {
            document.getElementById("error_email").innerHTML="";
        }
    
    /*************************Contact Number*******************/
    
        var contact=document.contact_form.contactno.value;
        var contactformat = /-?(?:[0-9]+(?:\.[0-9]*)?|(?:[0-9]+)?\.[0-9]+)/ ;  
    
        if(contact=="") {
               document.getElementById("error_num").innerHTML="**Please enter your Contact Number**";
               document.contact_form.contactno.focus();
        }
        else if(!contact.match(contactformat)) {  
               document.getElementById("error_num").innerHTML="*Please enter the correct format*";
               document.contact_form.contactno.focus(); 
        } 
        else {
               document.getElementById("error_num").innerHTML="";
        }
   
    /*************************Message*************************/
  
        var msg=document.contact_form.message.value;
        if(msg=="") {
                   document.getElementById("error_msg").innerHTML="**Please leave your Message**";
                   document.contact_form.message.focus();
         } 
        else{
                   document.getElementById("error_msg").innerHTML="";
        }
    
  
    }
