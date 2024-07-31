const inputText = document.querySelector('#forChecking')
const checkingBtn = document.querySelector('#checking')
const message = document.querySelector('#message')


checkingBtn.addEventListener('click', () => {
    // const value = +inputText.value
    try {
        if (!+inputText.value) {
            throw new Error('Вы ввели не число')
        }
        message.textContent = `Ваше число равно: ${+inputText.value}`
        message.style.color = 'black'
    } catch (error) {
        message.textContent = error.message
        message.style.color = 'red'
    }
})