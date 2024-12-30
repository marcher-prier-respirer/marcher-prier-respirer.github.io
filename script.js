let lastScrollPosition = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 172) {
        // Scrolling down - hide the menu
        // nav.style.position = 'fixed';
        nav.style.top = '-50px'; // Keeps a small visible edge
    } else {
        // Scrolling up - show the menu
        nav.style.position = 'fixed';
        nav.style.top = '0';
    }

    lastScrollPosition = currentScrollPosition;
});

nav.addEventListener('mouseover', () => {
    // Show the menu when hovering near the top
    nav.style.top = '0';
});

nav.addEventListener('mouseout', () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > 172) {
        // Hide part of the menu again if scrolled down
        nav.style.top = '-50px'; // Ensure it returns to the partially hidden state
    }
});
