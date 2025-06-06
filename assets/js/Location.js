// location.js
document.addEventListener('DOMContentLoaded', function() {
    const locationBtn = document.getElementById('show-location');
    
    if (locationBtn) {
        locationBtn.addEventListener('click', showUserLocation);
    }
});

function showUserLocation() {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
        showNotification('Geolocation is not supported by your browser', 'error');
        return;
    }

    // Show loading state
    const btn = document.getElementById('show-location');
    btn.classList.add('loading');
    btn.innerHTML = 'Detecting Location<span class="loading-dots"></span>';
    
    // Get current position
    navigator.geolocation.getCurrentPosition(
        (position) => {
            // Success callback
            const { latitude, longitude } = position.coords;
            fetchLocationDetails(latitude, longitude, btn);
        },
        (error) => {
            // Error callback
            btn.classList.remove('loading');
            btn.textContent = 'Show My Location';
            
            let errorMessage;
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage = "Location access was denied. Please enable permissions.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage = "Location information is unavailable.";
                    break;
                case error.TIMEOUT:
                    errorMessage = "The request to get location timed out.";
                    break;
                case error.UNKNOWN_ERROR:
                    errorMessage = "An unknown error occurred while getting location.";
                    break;
            }
            showNotification(errorMessage, 'error');
        }
    );
}

async function fetchLocationDetails(lat, lng, btn) {
    try {
        // Use OpenStreetMap Nominatim API for reverse geocoding
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
        const data = await response.json();
        
        // Create and show location display
        createLocationDisplay(lat, lng, data);
        
        // Reset button
        btn.classList.remove('loading');
        btn.textContent = 'Show My Location';
    } catch (error) {
        console.error('Error fetching location details:', error);
        btn.classList.remove('loading');
        btn.textContent = 'Show My Location';
        showNotification('Failed to fetch location details', 'error');
    }
}

function createLocationDisplay(lat, lng, locationData) {
    // Remove any existing location display
    const existingDisplay = document.querySelector('.location-display');
    if (existingDisplay) existingDisplay.remove();
    
    // Create location display element
    const display = document.createElement('div');
    display.className = 'location-display';
    
    // Extract location details
    const address = locationData.address || {};
    const locationName = locationData.display_name || 'Your Location';
    const city = address.city || address.town || address.village || '';
    const country = address.country || '';
    
    // Create a Google Maps link
    const mapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
    
    // Populate the display
    display.innerHTML = `
        <div class="location-card">
            <div class="location-icon">
                <ion-icon name="location"></ion-icon>
            </div>
            <div class="location-details">
                <h3>${locationName}</h3>
                <p>${city ? city + ', ' : ''}${country}</p>
                <p>Coordinates: ${lat.toFixed(4)}, ${lng.toFixed(4)}</p>
                <a href="${mapsUrl}" target="_blank" class="btn btn-secondary" style="margin-top: 10px;">
                    View on Google Maps
                </a>
            </div>
            <button class="close-location" aria-label="Close location display">
                <ion-icon name="close"></ion-icon>
            </button>
        </div>
    `;
    
    // Add to DOM (after the location button)
    const locationBtn = document.getElementById('show-location');
    locationBtn.parentNode.insertBefore(display, locationBtn.nextSibling);
    
    // Add close button event
    display.querySelector('.close-location').addEventListener('click', () => {
        display.remove();
    });
    
    // Add animation
    setTimeout(() => {
        display.style.opacity = '1';
        display.querySelector('.location-card').style.transform = 'translateY(0)';
    }, 10);
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type} bounce`;
    notification.innerHTML = `
        <div class="notification-icon">
            <ion-icon name="${type === 'success' ? 'checkmark-circle' : 'alert-circle'}"></ion-icon>
        </div>
        <div class="notification-content">${message}</div>
        <div class="notification-progress"></div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.remove('bounce');
        notification.classList.add('show');
    }, 10);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}