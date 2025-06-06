// JavaScript to hide loading screen after a delay
window.addEventListener('load', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(function() {
        loadingScreen.style.display = 'none'; // Hide the loading screen after the delay
    }, 3000); // Change 3000 to the desired duration in milliseconds
});