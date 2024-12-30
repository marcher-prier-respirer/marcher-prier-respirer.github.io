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
    } else if (currentScrollPosition <= headerHeight) {
        // Scroll within the header: position the nav menu below the header
        nav.style.position = 'absolute';
        nav.style.top = `${headerHeight-currentScrollPosition/2}px`; // Adjust dynamically to header height
    }

    lastScrollPosition = currentScrollPosition;
});


// Mouseover event to show the menu
nav.addEventListener('mouseover', () => {
    const currentScrollPosition = window.pageYOffset;
    
    if (currentScrollPosition > headerHeight) {
        // Show the menu when hovering near the top
        nav.style.top = '0';
    }
});


// Mouseout event to partially hide the menu again
nav.addEventListener('mouseout', () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > headerHeight) {
        // Hide part of the menu again if scrolled down
        nav.style.top = '-50px'; // Ensure it returns to the partially hidden state
    } else {
        // Return the menu to its default position below the header
        nav.style.position = 'absolute';
        nav.style.top = `${headerHeight}px`;
    }
    
});
