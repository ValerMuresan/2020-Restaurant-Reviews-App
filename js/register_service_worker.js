/*Service worker registration*/
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service_worker.js')
  .then(function() {
    console.log('Registration is successful!');
  })
  .catch(function() {
    console.log('Registration failed!');
  });
}
