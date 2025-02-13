document.addEventListener('DOMContentLoaded', () => {
  // Toggle play/pause for track cards
  const playButtons = document.querySelectorAll('.btn-play');
  
  playButtons.forEach(button => {
    button.addEventListener('click', () => {
      const icon = button.querySelector('i');
      if (icon.classList.contains('fa-play')) {
        // Reset all other buttons
        playButtons.forEach(btn => {
          btn.querySelector('i').classList.replace('fa-pause', 'fa-play');
          btn.textContent = ' Tocar';
        });
        
        // Set this button to playing
        icon.classList.replace('fa-play', 'fa-pause');
        button.textContent = ' Pausar';
      } else {
        icon.classList.replace('fa-pause', 'fa-play');
        button.textContent = ' Tocar';
      }
    });
  });

  // Share functionality
  const shareButtons = document.querySelectorAll('.btn-share');
  
  shareButtons.forEach(button => {
    button.addEventListener('click', () => {
      const trackName = button.closest('.track-info').querySelector('h3').textContent;
      const shareData = {
        title: 'Rede Carimbo',
        text: `Confira "${trackName}" na Rede Carimbo!`,
        url: window.location.href
      };

      if (navigator.share) {
        navigator.share(shareData)
          .catch(err => {
            console.log('Error sharing:', err);
          });
      } else {
        alert('Compartilhamento não suportado neste navegador');
      }
    });
  });

  // Add hover effect for track cards
  const trackArts = document.querySelectorAll('.track-art');
  
  trackArts.forEach(art => {
    art.addEventListener('mouseover', () => {
      art.querySelector('.play-icon').style.transform = 'scale(1.1)';
    });
    
    art.addEventListener('mouseout', () => {
      art.querySelector('.play-icon').style.transform = 'scale(1)';
    });
  });
});