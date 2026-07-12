
window.addEventListener("load",()=>{
  setTimeout(()=>{
    const l=document.getElementById("loader");
    if(l){l.style.display="none";}
  },2300);
});

const toggle=document.getElementById("togglePassword");
const pwd=document.getElementById("password");
if(toggle&&pwd){
 toggle.addEventListener("click",()=>{
   if(pwd.type==="password"){
      pwd.type="text";
      toggle.innerHTML='<i class="fa-solid fa-eye-slash"></i>';
   }else{
      pwd.type="password";
      toggle.innerHTML='<i class="fa-solid fa-eye"></i>';
   }
 });
}

const form=document.getElementById("loginForm");
if(form){
 form.addEventListener("submit",(e)=>{
   e.preventDefault();
   const email=document.getElementById("email").value.trim();
   const pass=pwd.value;
   if(!email.includes("@")){
      alert("Please enter a valid email.");
      return;
   }
   if(pass.length<6){
      alert("Password must be at least 6 characters.");
      return;
   }
   const btn=document.querySelector(".login-btn");
   btn.textContent="Logging in...";
   btn.disabled=true;
   setTimeout(()=>{
      alert("Login successful! Redirecting to Home Page.");
      window.location.href="index.html";
   },1200);
 });
}

const themeBtn=document.getElementById("themeBtn");
let dark=true;
if(themeBtn){
 themeBtn.addEventListener("click",()=>{
   dark=!dark;
   if(!dark){
      document.body.style.background="#f8f5ec";
      document.body.style.color="#111";
      themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';
   }else{
      document.body.style.background="";
      document.body.style.color="";
      themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';
   }
 });
}
