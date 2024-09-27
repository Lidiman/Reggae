document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth <= 768) { // Apply only for mobile view
        const mainGalleryLink = document.querySelector('.music-list');
  
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
  
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.scale = '0.9';
                } else {
                    entry.target.style.scale = '1.5';
                }
            });
        }, options);
  
        observer.observe(mainGalleryLink);
    }
  });