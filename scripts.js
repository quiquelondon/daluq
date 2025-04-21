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
    .catch(error => console.error('Error loading navbar:', error));

fetch('navbar.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('navbar').innerHTML = html;
    })
    .catch(error => console.error('Error loading navbar:', error));


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


    document.addEventListener("DOMContentLoaded", function() {
        const links = document.querySelectorAll(".navbar ul li a");
      
        links.forEach(link => {
          /*let slug = link.getAttribute("href").split("/").reverse()[0];
          if (window.location.href.indexOf(slug) > -1) {
            link.classList.add('active');
          }*/
      
          if (window.location.href === link.getAttribute("href")) {
            link.classList.add('bold-menu');
          }
        });
      });


