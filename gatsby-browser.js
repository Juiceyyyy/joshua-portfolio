// Remove service workers from the retired Gatsby offline plugin so cached older
// portfolio versions and favicons no longer override the current site.
exports.onClientEntry = () => {
  if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      registrations.forEach(registration => registration.unregister());
    }).catch(() => {});
  }
};
