
//Image slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



// Form validation

document.addEventListener('DOMContentLoaded', function(){
  function touch(event){
    event.preventDefault(); // Prevent the form from submitting
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if(name === ''){
      document.querySelector('#name-error').style.visibility = 'visible';
    } else {
      document.querySelector('#name-error').style.visibility = 'hidden';
    }

    if(email === ''){
      document.querySelector('#email-error').style.visibility = 'visible';
    } else {
      document.querySelector('#email-error').style.visibility = 'hidden';
    }

    if(password === ''){
      document.querySelector('#password-error').style.visibility = 'visible';
    } else {
      document.querySelector('#password-error').style.visibility = 'hidden';
    }
  }

  document.querySelector('form').addEventListener('submit', touch);
});




  //the mobile menu humberger
function toggleHamburger() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  const icon = document.getElementById('hamburgerIcon');
  icon.classList.toggle('fa-bars'); // Toggle the 'fa-bars' class
  icon.classList.toggle('fa-times'); // Toggle the 'fa-times' (close) class
}