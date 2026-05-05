(function () {
  var redirected = false;

  function checkAndRedirect() {
    var el = document.querySelector('[aria-label="Download"][role="dialog"]');
    console.log('[dlpblock] check fired | element found:', !!el, '| redirected:', redirected);
    if (!redirected && el) {
      redirected = true;
      observer.disconnect();
      console.log('[dlpblock] firing redirect');
      window.location.href = 'companyportal://apps';
    }
  }

  var observer = new MutationObserver(function (mutations) {
    console.log('[dlpblock] mutation fired | count:', mutations.length);
    checkAndRedirect();
  });

  observer.observe(document.body, { 
    childList: true, 
    subtree: true,
    attributes: true,
    attributeFilter: ['aria-label']
  });

  checkAndRedirect();
})();
