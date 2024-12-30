let lastScrollPosition = 0;
const nav = document.querySelector('nav');
const header = document.querySelector('header');

// Get the height of the header
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > headerHeight) {
        // Scroll past the header: make the menu stick to the top & hide it
        nav.style.position = 'fixed';
        nav.style.top = '-50px'; // Keeps a small visible edge
    } else {
        // Scroll within the header: position the nav menu below the header
        // nav.style.position = 'relative';
        nav.style.top = `${headerHeight}px`; // Adjust dynamically to header height
    }

    lastScrollPosition = currentScrollPosition;
});

nav.addEventListener('mouseover', () => {
    // Show the menu when hovering near the top
    nav.style.top = '0';
});

nav.addEventListener('mouseout', () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > header.offsetHeight) {
        // Hide part of the menu again if scrolled down
        nav.style.top = '-50px'; // Ensure it returns to the partially hidden state
    }
});
