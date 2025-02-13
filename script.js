document.addEventListener('DOMContentLoaded', () => {
  // Add hover sound effect to social links
  const socialLinks = document.querySelectorAll('.social-link');
  
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      // Add subtle animation class
      link.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    link.addEventListener('mouseleave', () => {
      // Remove animation
      link.style.transform = 'translateY(0) scale(1)';
    });
    
    // Add click animation
    link.addEventListener('click', (e) => {
      link.style.transform = 'scale(0.95)';
      setTimeout(() => {
        link.style.transform = 'scale(1)';
      }, 100);
    });
  });
});