// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Contact form submission (demo)
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    form.reset();
});
