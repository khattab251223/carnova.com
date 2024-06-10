document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.parentElement;
      parent.classList.toggle('active');
    });
  });
  const testimonials = document.querySelectorAll('.dynamic-testimonials .testimonial');
  let currentTestimonial = 0;
  
  function showNextTestimonial() {
    testimonials[currentTestimonial].classList.remove('active');
    testimonials[currentTestimonial].classList.add('exiting');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.remove('exiting');
    testimonials[currentTestimonial].classList.add('active');
  }
  
  setInterval(showNextTestimonial, 5000); // Change every 5 seconds
  
  // Initialize the first testimonial
  testimonials[currentTestimonial].classList.add('active');
    