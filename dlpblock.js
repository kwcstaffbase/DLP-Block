(function () {
  var redirected = false;

  function checkAndRedirect() {
    if (!redirected && document.querySelector('[aria-label="Download"][role="dialog"]')) {
      redirected = true;
      observer.disconnect();
      window.location.href = 'companyportal://apps';
    }
  }

  var observer = new MutationObserver(checkAndRedirect);
  observer.observe(document.body, { childList: true, subtree: true });

  checkAndRedirect();
})();
