const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  // Get form fields
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validate form fields
  if (!username || !password) {
    alert('Please fill in all fields.');
    return;
  }

  // TODO: Authenticate user
  // ...
}
