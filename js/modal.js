// Get the modal---register modal
var regmodal = document.getElementById("registerModal");

// Get the button that opens the modal
var regbtn = document.querySelector("#register-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var logspan = document.getElementsByClassName("close2")[0];
// Get the modal---login modal
var logmodal = document.getElementById("loginModal");

// Get the button that opens the modal
var logbtn = document.querySelector("#login-btn");

// When the user clicks on the button, open the modal
regbtn.onclick = function() {
  regmodal.style.display = "flex";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == regmodal || event.target == logmodal) {
      regmodal.style.display = "none";
      logmodal.style.display = "none";
    }
  }
  
  
  // When the user clicks on the button, open the modal
  logbtn.onclick = function() {
    logmodal.style.display = "flex";
  }


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
     regmodal.style.display = "none";
}

logspan.onclick = function(){
    logmodal.style.display = "none";

}





