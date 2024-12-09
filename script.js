// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetclass = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  


















