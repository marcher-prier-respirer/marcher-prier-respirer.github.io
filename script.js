const nav = document.querySelector('nav');
const header = document.querySelector('header');

// Get the height of the header
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;

    nav.style.width = '100%'; // Ensure width consistency
    nav.style.maxWidth = '1024px'; // Limit width to match the design
    nav.style.margin = '0 auto'; // Center the nav

    if (currentScrollPosition <= headerHeight) {
        // Scroll within the header: position the nav menu below the header
        nav.style.position = 'fixed';
        nav.style.top = `${headerHeight - currentScrollPosition}px`; // Adjust dynamically to header height
    } else {
        // Scroll past the header: make the menu stick to the top & hide it
        nav.style.position = 'fixed';
        nav.style.top = '-25px'; // Keeps a small visible edge

    }
});


// Mouseover event to show the menu
nav.addEventListener('mouseover', () => {
    const currentScrollPosition = window.pageYOffset;
    nav.style.transition = 'top 0.3s ease'; // Smooth transition
    
    if (currentScrollPosition > headerHeight) {
        // Show the menu when hovering near the top
        nav.style.top = '0';
    }
});


// Mouseout event to partially hide the menu again
nav.addEventListener('mouseout', () => {
    const currentScrollPosition = window.pageYOffset;
    nav.style.transition = 'top 0.3s ease'; // Smooth transition

    if (currentScrollPosition > headerHeight) {
        // Hide part of the menu again if scrolled down
        nav.style.top = '-25px'; // Ensure it returns to the partially hidden state
    } else {
        // Return the menu to its default position below the header
        nav.style.position = 'absolute';
        nav.style.top = `${headerHeight}px`;
    }
});

// When Mouse out event completes, restore the fast transition effect, as mentionned in the CSS
nav.addEventListener('transitionend', (event) => {
    nav.style.transition = 'top 0s ease'; // Smooth transition
});

// When click on h3 title toggle visibility
document.querySelectorAll('#events ul > li').forEach(item => {
    item.addEventListener('click', () => {
        const details = item.querySelector('ul');
        if (details) {
            details.classList.toggle('visible');
        }
    });
});
