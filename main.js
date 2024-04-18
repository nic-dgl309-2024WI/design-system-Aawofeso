/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";

}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName('sidenav-dropdown');
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener('click', function () {
    this.classList.toggle('current');
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

// for slider section ------------------------------------------------

const slider = document.querySelector('.slider__container');
const sliderItems = document.querySelectorAll('.slider__item');
const slideWidth = sliderItems[0].offsetWidth;
let currentIndex = 2; // Start with the second duplicated slide

function nextSlide() {
  currentIndex = (currentIndex + 1) % (sliderItems.length - 2) + 1; // Adjust index for duplicated slides
  updateSlider();
  updateDots();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + sliderItems.length - 2) % (sliderItems.length - 2) + 1; // Adjust index for duplicated slides
  updateSlider();
  updateDots();
}

function updateSlider() {
  const offset = -currentIndex * slideWidth + 'px';
  slider.style.transform = `translateX(${offset})`;
}

function updateDots() {
  const dots = document.querySelectorAll('.slider__dot');
  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === currentIndex - 1) {
      dot.classList.add('active');
    }
  });
}

// Create dots dynamically
const dotsContainer = document.querySelector('.slider__dots');
for (let i = 0; i < sliderItems.length - 2; i++) { // Exclude duplicated slides from dot creation
  const dot = document.createElement('span');
  dot.classList.add('slider__dot');
  if (i === 0) {
    dot.classList.add('active');
  }
  dot.addEventListener('click', () => {
    currentIndex = i + 1; // Adjust index for duplicated slides
    updateSlider();
    updateDots();
  });
  dotsContainer.appendChild(dot);
}

// Clone the first two slider items and append them to the end
const firstItemClone = sliderItems[0].cloneNode(true);
const secondItemClone = sliderItems[1].cloneNode(true);
slider.appendChild(firstItemClone);
slider.appendChild(secondItemClone);



// JavaScript for FAQ Section
document.addEventListener('DOMContentLoaded', function () {
  // Get all FAQ questions
  const questions = document.querySelectorAll('.faq__question');

  // Toggle answer visibility when question is clicked
  questions.forEach(question => {
    question.addEventListener('click', function () {
      const answerId = this.getAttribute('data-toggle');
      const answer = document.getElementById(answerId);
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Toggle all answers
  const toggleAllButton = document.getElementById('toggleAll');
  toggleAllButton.addEventListener('click', function () {
    const answers = document.querySelectorAll('.faq__answer');
    answers.forEach(answer => {
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
  });
});


// Client Reviews sections 
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}