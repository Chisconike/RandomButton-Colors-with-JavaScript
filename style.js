const buttons = document.querySelectorAll('button')
const h1 = document.querySelector('h1')
const body = document.querySelector('body')

for (let btn of buttons) {
    btn.addEventListener('click', () => {
        const r = Math.floor(Math.random() * 255) + 1
        const g = Math.floor(Math.random() * 255) + 1
        const b = Math.floor(Math.random() * 255) + 1
        const newColor = `rgb(${r}, ${g}, ${b})`
        btn.style.backgroundColor = newColor;
        h1.innerText = newColor;
        h1.style.backgroundColor = newColor;

    })
}