<script>
  document.getElementById('jobForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = this;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert("Thank you for applying. We'll get in touch soon!");
        form.reset();
      } else {
        alert("Oops! There was a problem submitting your application.");
      }
    }).catch(error => {
      alert("Network error. Please try again later.");
    });
  });
</script>
