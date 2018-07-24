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

  // counter

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const hoursSpans = $(clock).find('.hours__el');
    const minutesSpans = $(clock).find('.minutes__el');
    const secondsSpans = $(clock).find('.seconds__el');

    function updateClock() {
      const t = getTimeRemaining(endtime);
      const { hours, minutes, seconds, total } = t;

      const hoursArr = hours.toString().split('');
      const minutesArr = minutes.toString().split('');
      const secondsArr = seconds.toString().split('');

      hoursSpans[0].innerHTML = hoursArr.length > 1 ? hoursArr[0] : '0';
      hoursSpans[1].innerHTML = hoursArr.length > 1 ? hoursArr[1] : hoursArr[0];

      minutesSpans[0].innerHTML = minutesArr.length > 1 ? minutesArr[0] : '0';
      minutesSpans[1].innerHTML = minutesArr.length > 1 ? minutesArr[1] : minutesArr[0];

      secondsSpans[0].innerHTML = secondsArr.length > 1 ? secondsArr[0] : '0';
      secondsSpans[1].innerHTML = secondsArr.length > 1 ? secondsArr[1] : secondsArr[0];

      if (total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  // days * hours * minutes
  const deadline = new Date(Date.parse(new Date()) + 20 * 60 * 60 * 1000);
  initializeClock('js-timer', deadline);
});