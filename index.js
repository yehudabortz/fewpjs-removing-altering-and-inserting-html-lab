// Write your code here!
let element = document.createElement('div')

document.body.appendChild(element)
let ul = document.createElement('ul')
let h = document.createElement('h1')

for (let i = 0; i < 100; i++) {
    let li = document.createElement('li')
    li.innerHTML = (i+1).toString()
    ul.appendChild(li)
}

h.innerHTML = "Yehuda"
element.appendChild(ul)



ul.removeChild(ul.querySelector('li:nth-child(5)'))
ul.remove()

main = document.querySelector('main#main')
main.remove()


let newHeader = document.createElement('h1')
newHeader.setAttribute('id', 'victory')
newHeader.innerHTML = "Yehuda is the champion"
document.body.appendChild(newHeader)