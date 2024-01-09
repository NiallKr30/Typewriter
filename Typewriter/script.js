const typed = document.querySelector('#typed');
const keysound = document.querySelector('#keysound');
const enter = document.querySelector('#enter');
const backspace = document.querySelector('#backspace');

document.addEventListener('keydown', function (e) {
  // Spacebar
  if (e.key === 'Space') {
    space = document.createElement('&nbsp;');
    space.classList = 'typed';
    typed.appendChild(space);
  }

  // Letters
  if (e.key !== 'Enter' && e.key !== 'Backspace') {
    letter = document.createElement('span');

    letter.innerText = e.key;
    letter.classList = 'typed';
    typed.appendChild(letter);
    
    //Sound
    if (!keysound.paused) {
        keysound.cloneNode(true).play();
    } else {
        keysound.play();
    }
    letter.classList.add('animation');
    setTimeout(() => {
      letter.classList.remove('animation');
    }, 100);
  }

  // Enter
  if (e.key === 'Enter') {
    br = document.createElement('br');
    br.classList = 'typed';
    typed.appendChild(br);
    // Sound
    if (!enter.paused) {
      enter.cloneNode(true).play();
    } else {
      enter.play();
    }
  }

  // Backspace
  if (e.key === 'Backspace') {
    typed.removeChild(typed.lastChild);
  }

  // Delete
  if (e.key === 'Delete') {
    while (typed.firstChild) typed.removeChild(typed.firstChild);
  }

  letter.classList.add('typed');
});
