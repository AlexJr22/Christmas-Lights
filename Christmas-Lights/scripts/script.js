const input = document.getElementById('On_Off');

const red = document.querySelectorAll('.red');
const blue = document.querySelectorAll('.blue');
const yellow = document.querySelectorAll('.yellow');
const green = document.querySelectorAll('.green');
const white = document.querySelectorAll('.white');


input.onclick = () => {
  
  
  red.forEach(lamps => {
    addAnimation(lamps, 'redAnimation');
  });

  blue.forEach(lamps => {
    addAnimation(lamps, 'blueAnimation');
  });

  yellow.forEach(lamps => {
    addAnimation(lamps, 'yellowAnimation');
  });

  green.forEach(lamps => {
    addAnimation(lamps, 'greenAnimation');
  });

  white.forEach(lamps => {
    addAnimation(lamps, 'whiteAnimation');
  });
  
  document.body.classList.toggle('black');

};

  function addAnimation(lamps, color = '') {
    lamps.classList.toggle(color)
  };
