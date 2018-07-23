import 'ress';
import 'jquery.rateit/scripts/rateit.css';
import './index.sass';
import 'jquery.rateit';

$( document ).ready(function() {
  const infoGreen = document.getElementById('info-green');
  const infoOrange = document.getElementById('info-orange');

  const delayPopup = 3000;

  function showPopup() {
    $(infoGreen).addClass("is-visible");
    $(infoOrange).addClass("is-visible");
  }

  setTimeout(showPopup, delayPopup);
});