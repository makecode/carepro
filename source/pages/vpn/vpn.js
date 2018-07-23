import 'ress';
import 'jquery.rateit/scripts/rateit.css';
import './vpn.sass';
import 'jquery.rateit';

$( document ).ready(function() {
  const popupOverlay = document.getElementById('popup-overlay');
  const popup = document.getElementById('popup');
  const btnPopup = document.getElementById('popup__close');

  // show popup
  $('body').mouseleave(function(event) {
    if(event.clientY <= 0 ) {
      $(popup).fadeIn('slow');
      $(popupOverlay).fadeIn('slow');
    }
  });

  // close popup
  $(btnPopup).click(function () {
    $(popup).toggle();
    $(popupOverlay).toggle();
  });


  $(document).on('mousedown', function (e) {
    if (e.target === popupOverlay) {
      $(popup).toggle();
      $(popupOverlay).toggle();
    }
  });
});