function formsubmission(){
   var subject=document.Submission.subject.value;
  var message=document.Submission.message.value; 
  var name=document.Submission.name.value;
  var email=document.Submission.email.value;
  
  var regex=/^([a-zA-Z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/gm;
  var err=document.getElementById('error');
  
 if(name==""){
     err.innerHTML='please enter name'
     
     return false;
}
if(name.length<5){
 err.innerHTML='Name Should Contain five Elements ';
     return false;
}
if(email=="")
{
 err.innerHTML='please enter email';
     return false;
}  
if(regex.test(email)==false){
 err.innerHTML='Invalid Email'
 return false
}
if(subject.length<6){
 err.innerHTML='Should Contain 6 Elements';
 return false
} 
if(message.length<10){
 err.innerHTML='Should Contain 10 Words';
 return false
} 
if(message.length>200){
 err.innerHTML='Exceeds Limit';
 return false
} 
return true;

}