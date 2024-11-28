document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for reaching out! We will get back to you soon.');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const map = L.map('map').setView([8.359639, 124.869179], 18);  // Set the default view

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const locations = [
        { latitude: 8.359735, longitude: 124.869206, message: 'CCS Faculty Office' },
        { latitude: 8.359639, longitude: 124.869179, message: 'CCS Laboratory 1' },
        { latitude: 8.359554, longitude: 124.869153, message: 'CCS Laboratory 2' }
    ];

    locations.forEach(location => {
        const marker = L.marker([location.latitude, location.longitude]).addTo(map);
        marker.bindPopup(`<p>${location.message}</p>`);  // Show message on click
    });
});
