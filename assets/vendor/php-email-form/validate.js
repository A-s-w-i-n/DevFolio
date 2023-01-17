function formsubmission(){
  var name=document.Submission.name.value;
  var email=document.Submission.email.value;
  var subject=document.Submission.subject.value;
  var message=document.Submission.message.value; 
  var regex=/^([a-zA-Z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/gm;
 var err=document.getElementById('error-message');
  
 if(name==""){
     err.innerHTML='The Name is Empty'
     
     return false;
}
if(name.length<5){
 err.innerHTML='Name Should Contain five Elements Please Include Fullname';
     return false;
}
if(email=="")
{
 err.innerHTML='Email is Empty';
     return false;
}  
if(regex.test(email)==false){
 err.innerHTML='Invalid Email'
 return false
}
if(subject.length<5){
 err.innerHTML='Should Contain 5 Elements';
 return false
} 
if(message.length<10){
 err.innerHTML='Should Contain 10 Words';
 return false
} 
if(message.length>100){
 err.innerHTML='Exceeds Limit';
 return false
} 
return true;

}