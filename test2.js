document.getElementById('loadBtn').addEventListener('click', () => {
  fetch('./uploaded/test.php')
    .then(response => {
      if (!response.ok) throw new Error('Network error');
      return response.text();
    })
    .then(html => {
      document.body.innerHTML = html;
    })
    .catch(error => console.error(error));
});

