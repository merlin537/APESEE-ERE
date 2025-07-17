document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  alert(`Thank you, ${name}! Your message has been received. We'll get back to you shortly.`);
  
  this.reset();
});
