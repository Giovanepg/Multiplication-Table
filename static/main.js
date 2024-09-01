const button = document.querySelector('button')
const multi = document.querySelector('#mult')
const div = document.querySelector('#div')
const sum = document.querySelector('#sum')
const sub = document.querySelector('#sub')



 function calc() {
    const input = document.querySelector('input').value
    const select = document.querySelector('select').value
    multi.innerHTML = ''
    div.innerHTML = ''
    sum.innerHTML = ''
    sub.innerHTML = ''
    
for (let i = 1; i <=10; i++) {
    if (select === 'all' || select === 'mutiplication') {
        multi.innerHTML += `<h1>${i} x ${input} = ${Number(input) * i}</h1>`
    }

    if (select === 'all' || select === 'division'){
           div.innerHTML += `<h1>${i} / ${input} = ${(Number(input) / i).toFixed(2)}</h1>`
    }

    if (select === 'all' || select === 'sum'){
           sum.innerHTML += `<h1>${i} + ${input} = ${Number(input) + i}</h1>`
    }

    if (select === 'all' || select === 'subtration'){
           sub.innerHTML += `<h1>${i} - ${input} = ${Number(input) - i}</h1>`
    }

     }
    }
     
     button.addEventListener('click', calc )



