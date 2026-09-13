(function(){
  var popup = document.getElementById('promoPopup');
  var KEY = 'hururuk_promo_hide_until';
  var hideUntil = localStorage.getItem(KEY);
  if (hideUntil && Date.now() < Number(hideUntil)) {
    popup.classList.add('hidden');
  }
  function close(){ popup.classList.add('hidden'); }
  document.getElementById('popupCloseBtn').addEventListener('click', close);
  document.getElementById('popupCta').addEventListener('click', close);
  document.getElementById('popupHideToday').addEventListener('click', function(){
    var oneDay = 24 * 60 * 60 * 1000;
    localStorage.setItem(KEY, Date.now() + oneDay);
    close();
  });
  popup.addEventListener('click', function(e){
    if (e.target === popup) close();
  });
})();
