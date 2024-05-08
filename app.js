var sidebar= document.getElementById('sidebar');
var section= document.getElementById('section');
var topbar= document.getElementById('topbar');

function toggle(){
    var width = sidebar.style.width;
    if(width == '0px'){
       sidebar.style.width='230px';
       sidebar.style.transition='0.5s';
       section.style.marginLeft='230px';
       section.style.transition='0.5s';
       section.style.width='100%';
       
    }
    else{
        sidebar.style.width ='0px';
        sidebar.style.transtion='0.5s';
        section.style.marginLeft='0px';
        section.style.transition='0.5s';
        section.style.width='100%';
    }
}

// ------ function for register and signin-----//

function tab(activeBtn, inactiveBtn, activeId, inactiveId){
    var activeBtn= document.getElementById(activeBtn);
    var inactiveBtn= document.getElementById(inactiveBtn);
    var activeId = document.getElementById(activeId);
    var inactiveId=document.getElementById(inactiveId);
     activeBtn.style.backgroundColor='darkorange';
     activeBtn.style.color='white';
     inactiveBtn.style.backgroundColor='white';
     inactiveBtn.style.color='black';
     activeId.style.display='block';
     inactiveId.style.display='none'

}
 
function register(event){
    event.preventDefault();
    let user ={};
  var form= document.forms.registerform;
   fullname=form.elements.fullname;
   nameMessage=document.getElementById('nameMessage');
   email=form.elements.email;
   emailMessage=document.getElementById('emailMessage');
   password=form.elements.password;
   passwordMessage=document.getElementById('passwordMessage');

   if(fullname.value.trim().length == 0){
     fullname.style.borderColor='red';
     nameMessage.style.display='block';
     nameMessage.innerHTML='Please Enter your name';
     nameMessage.style.marginTop='-10px';
     nameMessage.style.color='red';

   }
   else if(email.value.trim().length == 0){
    email.style.borderColor='red';
    emailMessage.innerHTML='Please Enter your Email';
    emailMessage.style.display='block';
    emailMessage.style.color='red';
    emailMessage.style.marginTop='-10px';
   }
   else if(password.value.trim().length == 0){
    password.style.borderColor='red';
    passwordMessage.innerHTML='Enter your Correct password';
    passwordMessage.style.display='block';
    passwordMessage.style.color='red';
    passwordMessage.style.marginTop='-10px';
   }
   else if(password.value.trim().length < 8){
    password.style.borderColor='red';
    passwordMessage.innerHTML='Minimum 8 characters are required';
    passwordMessage.style.display='block';
    passwordMessage.style.color='red';
    passwordMessage.style.marginTop='-10px';
   }
   else{    
          user.fullname= form.elements.fullname.value.trim();
          user.email= form.elements.email.value.trim();
         user.password= form.elements.password.value.trim();     
          console.log(user);
   }

}

 function inputValidation(inputId,messageId){
  var inputId= document.getElementById(inputId);
  var messageId=document.getElementById(messageId)
      inputId.style.borderColor='black';
      messageId.style.display='none';


 }
   
 function togglePassword(){
    var password=document.getElementById('password');
    var toggleIcon=document.getElementById('toggleIcon');
   if(password.type == 'password'){
     password.type = 'text';
     toggleIcon.className='fa fa-eye'
   }
   else{
    password.type= 'password';
    toggleIcon.className='fa fa-eye-slash';
   }
 }

 function signin(event){
  event.preventDefault();
  let user ={};
var form= document.forms.signin;
 email=form.elements.email;
 emailMessage=document.getElementById('emailMessage');
 password=form.elements.password;
 passwordMessage=document.getElementById('passwordMessage');

 if(fullname.value.trim().length == 0){
   fullname.style.borderColor='red';
   nameMessage.style.display='block';
   nameMessage.innerHTML='Please Enter your name';
   nameMessage.style.marginTop='-10px';
   nameMessage.style.color='red';

 }
 else if(email.value.trim().length == 0){
  email.style.borderColor='red';
  emailMessage.innerHTML='Please Enter your Email';
  emailMessage.style.display='block';
  emailMessage.style.color='red';
  emailMessage.style.marginTop='-10px';
 }
 else if(password.value.trim().length == 0){
  password.style.borderColor='red';
  passwordMessage.innerHTML='Enter your Correct password';
  passwordMessage.style.display='block';
  passwordMessage.style.color='red';
  passwordMessage.style.marginTop='-10px';
 }
 else if(password.value.trim().length < 8){
  password.style.borderColor='red';
  passwordMessage.innerHTML='Minimum 8 characters are required';
  passwordMessage.style.display='block';
  passwordMessage.style.color='red';
  passwordMessage.style.marginTop='-10px';
 }
 else{    
        user.fullname= form.elements.fullname.value.trim();
        user.email= form.elements.email.value.trim();
       user.password= form.elements.password.value.trim();     
        console.log(user);
 }

}

function inputValidation(inputId,messageId){
var inputId= document.getElementById(inputId);
var messageId=document.getElementById(messageId)
    inputId.style.borderColor='black';
    messageId.style.display='none';


}
 
function togglePassword(){
  var password=document.getElementById('password');
  var toggleIcon=document.getElementById('toggleIcon');
 if(password.type == 'password'){
   password.type = 'text';
   toggleIcon.className='fa fa-eye'
 }
 else{
  password.type= 'password';
  toggleIcon.className='fa fa-eye-slash';
 }

}



 
