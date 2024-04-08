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


// Sliders
     // access the images
     let slideImages = document.querySelectorAll('img');
     //access the next and prev buttons
     let next = document.querySelector('.next');
     let prev = document.querySelector('.prev');
     //access the indicators
     let dots = document.querySelectorAll('.dot');
     var counter =0;
     //code for next button
     next.addEventListener('click', slideNext);
     function slideNext(){
       slideImages[counter].style.animation='next1 0.5s ease-in forwards';
       if(counter >= slideImages.length-1){
         counter = 0;
       }
       else{
         counter++;
       }
       slideImages[counter].style.animation='next2 0.5s ease-in forwards';
       indicators();
     }
     //code for previous button
     prev.addEventListener('click', slidePrev);
     function slidePrev(){
       slideImages[counter].style.animation='prev1 0.5s ease-in forwards';
       if(counter ==0){
         counter = slideImages.length-1;
       }
       else{
         counter--;
       }
       slideImages[counter].style.animation='prev2 0.5s ease-in forwards';
       indicators();
     }
     //auto sliding
     function autoSliding(){
       deletInterval = setInterval(timer,2500);
       function timer(){
         slideNext();
         indicators();
       }
     }
     autoSliding();
   //stop auto sliding when mouse is over
   const container = document.querySelector('.slide_container');
   container.addEventListener('mouseover',function(){
     clearInterval(deletInterval);
   });
   //RESUME sliding when mouse is out
   container.addEventListener('mouseout',autoSliding);
   //add and remove class from the indicator
   function indicators(){
     for(i= 0; i < dot.length;i++){
       dot[i].className = dots[i].className.replace(' active','');
     }
      dots[counter].className += 'active';
     }
   
