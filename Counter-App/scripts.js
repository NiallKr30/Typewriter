
const body = document.querySelector('body')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const reset = document.querySelector('#reset')
const save = document.querySelector('#save')
const counterh2 = document.querySelector('#counterh2')
const resultsDisplay = document.querySelector('#resultsD')
const rod = document.querySelector('#rod')
let counter = 0
let results = []


function clickColorChange() {
    if (counter === 0) {
        rod.style.backgroundColor = '#BFC5CA'
        body.style.backgroundColor ='#f7f8f9'
    } else if (counter >= 1 && counter < 5) {
        body.style.background = '#dfebfb'
        counterh2.style.color = '#91C0FD'
        rod.style.backgroundColor = '#085EB4'
    } else if (counter >= 5) {
        rod.style.backgroundColor = '#07C924'
        body.style.background = '#e2f8e3'
        counterh2.style.color = '#76FD7D'
    } else if (counter <= -1) {
        body.style.background = '#fce7e7'
        counterh2.style.color = '#FD9595'
        rod.style.backgroundColor = '#C3141F'
    } 
}

function changeRods() {
    if (counter === 1) {
        rod.style.display = ''
   
    }
}



function click(modulus) {
    modulus
    counterh2.innerText = counter
    clickColorChange()
    changeRods()
}



save.addEventListener('click', function () {
    
    if (!results.includes(counter)) {
        results.push(counter)
    }
    resultsDisplay.innerText = 'Result: ' + results.join(', ')
    
    
});

reset.addEventListener('click', function () {
    resultsDisplay.innerText = 'Result: '
});



plus.addEventListener('click', () => {
    click(counter++)
    setInterval(() =>{
        rod.style.animation = (`rotate 0.4s linear`);
    },)
    rod.style.animation = 'none'
})



minus.addEventListener('click', () => {
    click(counter--)
    setInterval(() =>{
        rod.style.animation = (`rotate 0.4s linear`);
    },)
    rod.style.animation = 'none'
    
})




