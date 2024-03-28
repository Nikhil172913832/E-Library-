
function redirectTo(url) {
    window.location.href = url;
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.btn2').onclick = function () {
        redirectTo('sign.html'); } ; 
        document.querySelector('.btn1').onclick = function () {
            redirectTo('2ndpage.html'); 
   
        } 
}); 
/*function valid() {
var email = document.querySelector("#email").value ; 
var pswd = document.querySelector("password").value ; 
if( email === "23122@iiitu.ac.in" && pswd==="12345"){
  
        document.querySelector('.btn1').onclick = function () {
            redirectTo('2ndpage.html'); 
 }  
} } 
document.querySelector('.btn2').onclick = function () {
    redirectTo('sign.html'); } ; */