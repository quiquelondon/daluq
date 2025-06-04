function toggleSidebar() {
const sidebar = document.querySelector('.sidebar');
sidebar.classList.toggle('active');
}

document.addEventListener("click", (event) => {
const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger');

if (sidebar.classList.contains('active') && 
!sidebar.contains(event.target) && 
!hamburger.contains(event.target)) {
sidebar.classList.remove('active');
}
});;

fetch('header-mobile.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('header-mobile').innerHTML = html;
    })
    .catch(error => console.error('Error loading header-mobile:', error));

    // Load the navbar HTML into the page
fetch('navbar.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('navbar').innerHTML = html;
    })
    .catch(error => console.error('Error loading navbar:', error));
    // Navbar dropdown functionality
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('dropdown-btn')) {
            const button = event.target;
            const subnav = button.nextElementSibling;
            const isOpen = subnav.classList.contains('show');
    
            document.querySelectorAll('.subnav').forEach((menu) => {
                if (menu !== subnav) {
                    menu.classList.remove('show');
                }
            });
    
            if (isOpen) {
                subnav.classList.remove('show');
            } else {
                subnav.classList.add('show');
            }
        }
    });


    

    // Load the carousel HTML into the page
    fetch('carousel.html')
    .then((response) => response.text())
    .then((html) => {
        document.getElementById('carousel').innerHTML = html;

        // Initialize the carousel after loading
        const slider = document.querySelector('.slider');
        const slideWidth = slider.children[0].offsetWidth + 20; // Include margin
        let isTransitioning = false; // Prevent overlapping transitions
        let startX = 0;
        let isDragging = false;

function rotateLeft() {
    if (isTransitioning) return;
    isTransitioning = true;

    // Move first item to end instantly before starting the transition
    const firstChild = slider.children[0];
    slider.appendChild(firstChild);

    slider.style.transition = 'none';
    slider.style.transform = `translateX(${slideWidth}px)`;
    void slider.offsetWidth; // Force browser repaint

    // Start animation
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = 'translateX(0)';

    slider.addEventListener('transitionend', function handleLeft() {
        slider.removeEventListener('transitionend', handleLeft);
        isTransitioning = false;
    });
}

        function rotateRight() {
            if (isTransitioning) return; // Prevent rapid clicks
            isTransitioning = true;

            // Move the last item to the beginning
            const lastChild = slider.children[slider.children.length - 1];
            slider.insertBefore(lastChild, slider.children[0]); // Move the last child to the beginning
            slider.style.transition = 'none'; // Disable transition for immediate reposition
            slider.style.transform = `translateX(-${slideWidth}px)`; // Start shifted left
            void slider.offsetWidth; // Force browser repaint
            // Trigger the slide to the right
            setTimeout(() => {
                slider.style.transition = 'transform 0.5s ease-in-out';
                slider.style.transform = 'translateX(0)'; // Slide to the original position
            });

            // After the transition, reset the state
            slider.addEventListener('transitionend', function handleRight() {
                slider.removeEventListener('transitionend', handleRight); // Avoid duplicate calls

                isTransitioning = false; // Transition complete
            });
        }

        // Handle arrow clicks
        document.querySelector('.carousel-btn.left').addEventListener('click', rotateRight);
        document.querySelector('.carousel-btn.right').addEventListener('click', rotateLeft);

        // Drag/Swipe functionality
        slider.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX; // Capture the initial X position
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const moveX = e.pageX - startX; // Calculate the distance moved
            if (moveX > 50) {
                isDragging = false; // End dragging
                rotateRight(); // Trigger rotation to the right
            } else if (moveX < -50) {
                isDragging = false; // End dragging
                rotateLeft(); // Trigger rotation to the left
            }
        });

        slider.addEventListener('mouseup', () => {
            isDragging = false; // Reset dragging state
        });

        slider.addEventListener('mouseleave', () => {
            isDragging = false; // Reset dragging state if mouse leaves the slider
        });

        slider.addEventListener('touchstart', (e) => {
            isDragging = true;
            startX = e.touches[0].pageX; // Capture the initial X position on touch
        });

        slider.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const moveX = e.touches[0].pageX - startX; // Calculate the distance moved
            if (moveX > 50) {
                isDragging = false; // End dragging
                rotateRight(); // Trigger rotation to the right
            } else if (moveX < -50) {
                isDragging = false; // End dragging
                rotateLeft(); // Trigger rotation to the left
            }
        });

        slider.addEventListener('touchend', () => {
            isDragging = false; // Reset dragging state
        });
    })
    .catch((error) => console.error('Error loading carousel:', error));


    // Ligthbox scripts
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'alwaysShowNavOnTouchDevices': true,
        'showImageNumberLabel': false
    })

function transitionToPage(href) {
  document.querySelector(".sidebar").classList.remove('active');
  setTimeout(() => {
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = href;
      
    }, 500); // Adjust for the fade-out timing
  }, 300); // Adjust for sidebar animation timing
    document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});
}



