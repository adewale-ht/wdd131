// Hamburger menu toggle for responsive navigation
const menuBtn = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');
if (menuBtn && navList) {
    menuBtn.addEventListener('click', function() {
        const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !expanded);
        navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
    });
    window.addEventListener('resize', function() {
        if(window.innerWidth > 600) navList.style.display = 'flex';
        else navList.style.display = 'none';
    });
}
