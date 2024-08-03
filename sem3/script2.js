const inputText = document.querySelector('#input-text')
const btnSave = document.querySelector('.btn-save')
const btnLoad = document.querySelector('.btn-load')
const btnClear = document.querySelector('.btn-clear')
const workText = document.querySelector('.work-text')

const keyStorage = 'work-text'

const createMsg = (msg) => {
    let msgItem = document.querySelector('#msg-item')
    if (!msgItem) {
        msgItem = document.createElement('p')
        msgItem.setAttribute('id', 'msg-item')
    }
    msgItem.textContent = msg
    return msgItem
}

btnSave.addEventListener('click', () => {
    localStorage.setItem(keyStorage, inputText.value)
    inputText.value = ''
    workText.insertAdjacentElement('beforeend', createMsg('saved'))
})

btnLoad.addEventListener('click', () => {
    inputText.value = localStorage.getItem(keyStorage)
    workText.insertAdjacentElement('beforeend', createMsg('loaded'))
})

btnClear.addEventListener('click', () => {
    inputText.value = ''
    localStorage.removeItem(keyStorage)
    workText.insertAdjacentElement('beforeend', createMsg('deleted'))
})

