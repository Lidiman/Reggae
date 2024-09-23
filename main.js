window.addEventListener('scroll', function() {
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (itemTop < windowHeight * 0.8) { 
      item.classList.add('show');
    } else {
      item.classList.remove('show');
    }
  });
});
const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const galleryItem = button.closest('.gallery-item');
    galleryItem.classList.toggle('expanded');
  });
});
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === '9') { 
    event.preventDefault(); // Prevent default action of Ctrl+9
    let userInput = prompt("Ctrl+9 was pressed! Enter something:");
    if (userInput == 'Reggae') {
      window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }
    else{
      alert("Wrong");
    }
  }
});
const titleElement = document.getElementById('typing-title');
                        let textIndex = 0;
                        const textToType = 'Reggae';
                        let isDeleting = false; // Flag to control typing direction
                        
                        function typeWriter() {
                          if (!isDeleting && textIndex < textToType.length) {
                            titleElement.innerHTML += textToType.charAt(textIndex);
                            textIndex++;
                          } else if (isDeleting && textIndex > 0) {
                            titleElement.innerHTML = titleElement.innerHTML.slice(0, -1);
                            textIndex--;
                          }
                        
                          if (!isDeleting && textIndex === textToType.length) {
                            isDeleting = true; // Start deleting after typing
                            setTimeout(typeWriter, 1000); // Pause before deleting
                          } else if (isDeleting && textIndex === 0) {
                            isDeleting = false; // Start typing again
                            setTimeout(typeWriter, 500); // Pause before typing
                          } else {
                            setTimeout(typeWriter, 100); // Normal typing/deleting speed
                          }
                        }
typeWriter(); // Start the effect
                        