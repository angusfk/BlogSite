function toggleMenu() {
    const menu = document.querySelector('.navbar-menu');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('expanded');
    hamburger.classList.toggle('active');
}

// JavaScript to fade the video as you scroll
window.addEventListener('scroll', function() {
    const video = document.querySelector('.video-loop'); // Select the video element
    const videoContainer = document.querySelector('.video-container'); // Select the video container
    const videoHeight = videoContainer.clientHeight; // Get the height of the video container
    const scrollPosition = window.scrollY; // Get the scroll position

    // Calculate the scroll offset where video is completely gone (3/4 of the video height)
    const fadeStart = 0; // Video starts fading as soon as you start scrolling
    const fadeEnd = videoHeight * 0.75; // Video is completely gone by 75% of the video container height

    // Calculate the opacity based on the scroll position
    let opacity = 1 - ((scrollPosition - fadeStart) / fadeEnd);

    // Ensure opacity never goes below 0
    opacity = Math.max(opacity, 0);

    // Set the video opacity
    video.style.opacity = opacity;
});
