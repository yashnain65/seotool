// Common functions for all tools

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    // Add mobile menu functionality if needed
    console.log('SEO Tools Website Loaded');
});

// Form validation
function validateUrl(url) {
    const pattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return pattern.test(url);
}

// Show loading spinner
function showLoader(element) {
    element.innerHTML = '<div class="loader"></div>';
}

// Hide loading spinner
function hideLoader(element) {
    element.innerHTML = '';
}

// Copy to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        alert('Copied to clipboard!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}
