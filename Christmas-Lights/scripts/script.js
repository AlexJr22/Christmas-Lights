const input = document.getElementById('On_Off');
const light = document.querySelectorAll('.light');

input.onclick = () => {
  
  light.forEach(lamp => {
    addAnimation(lamp)
  })
  
  document.body.classList.toggle('black');

};

  function addAnimation(lamps) {
    lamps.classList.toggle('animationOFF')
  };
