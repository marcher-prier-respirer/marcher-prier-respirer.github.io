const nav = document.querySelector('nav');
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a');

// Get the height of the header and of the nav
const headerHeight = header.offsetHeight;
const navHeight = nav.offsetHeight;

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;

    nav.style.width = '100%'; // Ensure width consistency
    nav.style.maxWidth = '1024px'; // Limit width to match the design
    nav.style.margin = '0 auto'; // Center the nav

    if (currentScrollPosition < headerHeight) {
        // Scroll within the header: position the nav menu below the header
        nav.style.position = 'fixed';
        nav.style.top = `${headerHeight - currentScrollPosition}px`; // Adjust dynamically to header height
        nav.style.transition = 'none';
    } else {
        // Scroll past the header: make the menu stick to the top & hide it
        nav.style.position = 'fixed';
        nav.style.top = '-25px'; // Keeps a small visible edge
        nav.style.transition = 'top 0.3s ease';

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
    }
});

// When Mouse out event completes, restore the fast transition effect, as mentionned in the CSS
nav.addEventListener('transitionend', (event) => {
    nav.style.transition = 'top 0s ease'; // Smooth transition
});

/* // When click on h3 title toggle visibility
document.querySelectorAll('#events ul > li').forEach(item => {
    item.addEventListener('click', () => {
        const details = item.querySelector('ul');
        if (details) {
            details.classList.toggle('visible');
        }
    });
});
 */

document.addEventListener('DOMContentLoaded', () => {
    const eventTitles = document.querySelectorAll('.event-title');

    eventTitles.forEach(title => {
        title.addEventListener('click', () => {
            const eventDiv = title.nextElementSibling;

            if (eventDiv.style.display === 'none' || eventDiv.style.display === '') {
                eventDiv.style.display = 'block';
            } else {
                eventDiv.style.display = 'none';
            }
        });
    });
});


// Add a click event listener to each link where smooth transitions happen when clicking on the nav links, and viewing the anchors with the title visible
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior

        // Get the target anchor
        const targetId = link.getAttribute('href').substring(1); // Remove the '#' from the href
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Calculate the target position higher than the anchor with the height of the nav menu height, because in this website the nav is constantly visible while scrolling, and otherwise Anchor titles are hidden 
            const targetPosition = targetElement.offsetTop - navHeight;

            // Scroll to the calculated position smoothly
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});