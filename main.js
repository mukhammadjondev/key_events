const insert = document.querySelector('#insert')
const keyEvent = document.querySelector('.keyEvent')
const keyCode = document.querySelector('.keyCode')
const code = document.querySelector('.code')

document.addEventListener('keydown', (e) => {
    document.querySelector('.key').classList.add('hidden')
    document.querySelector('.key-container').classList.remove('hidden')

    keyEvent.textContent = e.key
    keyCode.textContent = e.keyCode
    code.textContent = e.code
})