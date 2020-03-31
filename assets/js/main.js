document.addEventListener("DOMContentLoaded", () => {
    const d = new Date();
    const hours = d.getHours();
    const night = hours >= 19 || hours <= 7; // between 7pm and 7am
    const body = document.querySelector('body');
    const toggle = document.getElementById('toggleId');
    const input = document.getElementById('switch');

    /* Dark-Mode */

    if (night) {
      input.checked = true;
      body.classList.add('night');
    }
  
    toggle.addEventListener('click', function() {
      const isChecked = input.checked;
      if (isChecked) {
        body.classList.remove('night');
      } else {
        body.classList.add('night');
      }
    });

    /* Break-Point */

    if (screen.width >= 450) {
      document.getElementById("break").style.display = "none"; 
   }
    else {
      document.getElementById("break").style.display = "null"; 
    }

    /* Jump-Animation */

  const goomba = document.querySelector('.emoji.goomba');

  function jumpOnLoad() {
    goomba.classList.add('jump');
    setTimeout(function() {
      goomba.classList.remove('jump');
    }, 2000);
  }

  setTimeout(function() {
    jumpOnLoad();
  }, 1000);

  goomba.addEventListener('mouseover', function() {
    goomba.classList.add('jump');
  });

  goomba.addEventListener('mouseout', function() {
    goomba.classList.remove('jump');
  });

  /* Section-Fade */

  AOS.init({
    duration: 1000,
    once: true,
    mirror: true,
  })

});

$(function(){

  /* To top button */

  const introHeight = document.querySelector('.intro').offsetHeight;
  const topButton = document.getElementById('top-button');
  const $topButton = $('#top-button');

  window.addEventListener(
    'scroll',
    function() {
      if (window.scrollY > introHeight) {
        $topButton.fadeIn();
      } else {
        $topButton.fadeOut();
      }
    },
    false
  );

  topButton.addEventListener('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });
})