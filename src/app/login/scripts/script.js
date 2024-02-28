document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('login-btn').style.display = 'none';
    document.getElementById('login-loader').style.display = 'block';
    
    // Simulating login process for 3 seconds
    setTimeout(function() {
      // Replace this with your login logic
      alert('Logged in successfully!');
      // Redirect to dashboard or desired page
      window.location.href = 'dashboard.html';
    }, 3000);
  });
  