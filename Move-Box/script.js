const box = document.querySelector('#box')
const btn = document.querySelector('.btn')


btn.addEventListener('click', function () {
    if ((box.classList.contains('box') && box.classList.length === 1)) {
      box.classList.add('initial-animation');
    }
    else if (box.classList.contains('initial-animation')) {
        box.classList.remove('initial-animation');
        box.classList.add('left-right-animation');
    }
    else if (box.classList.contains('right-left-animation')) {
          box.classList.remove('right-left-animation');
          box.classList.add('left-right-animation');
    }
    else if (box.classList.contains('left-right-animation')) {
         box.classList.remove('left-right-animation')
          box.classList.add('right-left-animation');
    }
})

