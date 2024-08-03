import { keyStorage } from "./variables.js"

function createMsg(parent, type, message) {
    const errMsg = document.createElement('div')
    errMsg.classList.add(type)
    errMsg.textContent = message
    parent.insertAdjacentElement('afterbegin', errMsg)
    setTimeout(() => {
        errMsg.remove()
    }, 3000)
}

const btnSendReviews = document.querySelector('.btn-send-review')

btnSendReviews.addEventListener('click', (e) => {
    const productName = document.querySelector('#productName')
    const reviewText = document.querySelector('#reviewText')

    try {
        if (!productName.value || !reviewText.value) {
            throw new Error(
                'Не обходимо заполнить поля "Название продукта" и "Отзыв"'
            )
        }
        const storage = JSON.parse(localStorage.getItem(keyStorage))
        console.log(storage)
        if (!storage) {
            const newProduct = {}
            newProduct.name = productName.value
            newProduct.id = 1
            newProduct.reviews = [reviewText.value,]
            const storage = [newProduct,]
            localStorage.setItem(keyStorage, JSON.stringify(storage))
        } else {
            const index = storage.findIndex(product =>
                product.name.toLowerCase().trim() === productName.value.toLowerCase().trim())
            if (index >= 0) {
                storage[index].reviews.push(reviewText.value)
            } else {
                const newProduct = {}
                newProduct.name = productName.value
                newProduct.id = storage.length + 1
                newProduct.reviews = [reviewText.value,]
                storage.push(newProduct)
            }
            localStorage.setItem(keyStorage, JSON.stringify(storage))
        }
        createMsg(btnSendReviews, 'successfully', 'Отзыв сохранён')
        productName.value = ''
        reviewText.value = ''
    } catch (error) {
        createMsg(btnSendReviews, 'err-msg', error.message)
    }
})