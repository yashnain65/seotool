// Common functions for all tools

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    console.log('SEO Tools Website Loaded');
});

// URL validation
function validateUrl(url) {
    const pattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return pattern.test(url);
}

// Email validation
function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
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
        alert('Failed to copy');
    });
}

// Character counter
function updateCharCount(element, maxLength) {
    const currentLength = element.value.length;
    const remaining = maxLength - currentLength;
    return remaining;
}
