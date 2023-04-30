// Handle form submission
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
    // Validate form fields
    const eventName = document.querySelector('#eventName');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const bookingDate = document.querySelector('#bookingDate');
    const eventTimeStart = document.querySelector('#eventTimeStart');
    const eventTimeEnd = document.querySelector('#eventTimeEnd');
    const message = document.querySelector('#message');
    
    if (eventName.value.trim() === '') {
        alert('Please enter an event name.');
        eventName.focus();
        return;
    }
    
    if (email.value.trim() === '') {
        alert('Please enter an email address.');
        email.focus();
        return;
    }
    
    if (!isValidEmail(email.value.trim())) {
        alert('Please enter a valid email address.');
        email.focus();
        return;
    }
    
    if (phone.value.trim() === '') {
        alert('Please enter a phone number.');
        phone.focus();
        return;
    }
    
    if (!isValidPhone(phone.value.trim())) {
        alert('Please enter a valid phone number.');
        phone.focus();
        return;
    }
    
    if (bookingDate.value.trim() === '') {
        alert('Please enter a booking date.');
        bookingDate.focus();
        return;
    }
    
    if (eventTimeStart.value.trim() === '') {
        alert('Please enter an event start time.');
        eventTimeStart.focus();
        return;
    }
    
    if (eventTimeEnd.value.trim() === '') {
        alert('Please enter an event end time.');
        eventTimeEnd.focus();
        return;
    }
    
    if (message.value.trim() === '') {
        alert('Please enter a message.');
        message.focus();
        return;
    }
    
    // Submit form
    // TODO: Implement form submission logic
}

// Validate email address format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate phone number format
function isValidPhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}
