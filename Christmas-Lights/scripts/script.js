const input = document.getElementById('On_Off');

input.onclick = () => {
  
  document.querySelector('.red').classList.toggle('redAnimation');
  document.querySelector('.blue').classList.toggle('blueAnimation');
  document.querySelector('.yellow').classList.toggle('yellowAnimation');
  document.querySelector('.green').classList.toggle('greenAnimation');
  document.querySelector('.white').classList.toggle('whiteAnimation');

  document.querySelector('.red2').classList.toggle('redAnimation');
  document.querySelector('.blue2').classList.toggle('blueAnimation');
  document.querySelector('.yellow2').classList.toggle('yellowAnimation');
  document.querySelector('.green2').classList.toggle('greenAnimation');
  document.querySelector('.white2').classList.toggle('whiteAnimation');

  document.querySelector('.red3').classList.toggle('redAnimation');
  document.querySelector('.blue3').classList.toggle('blueAnimation');
  document.querySelector('.yellow3').classList.toggle('yellowAnimation');
  document.querySelector('.green3').classList.toggle('greenAnimation');
  document.querySelector('.white3').classList.toggle('whiteAnimation');
  document.body.classList.toggle('black');

};


