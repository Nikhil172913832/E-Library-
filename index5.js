function redirectTo(url) {
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.btn2').onclick = function () {
        redirectTo('sign.html');
    };

    document.querySelector('.btn1').onclick = function () {
        valid(); // Call the valid function
    };
});

function valid() {
    var email = document.querySelector("#email1").value;
    var pswd = document.querySelector("#password1").value; // Correct selector for password field
    redirectTo('2ndpage.html');
    alert("Email: " + email + "\nPassword: " + pswd);
    if( email === "23122@iiitu.ac.in" && pswd==="12345"){
  
        document.querySelector('.btn1').onclick = function () {
            redirectTo('2ndpage.html'); 
 }  
} } 

