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


    var current = 0;
for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
        current = i;
    }
}
document.links[current].className = 'bold-menu';

