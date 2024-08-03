import { keyStorage } from "./variables.js"


const productsBox = document.querySelector('.products-box')
const storage = JSON.parse(localStorage.getItem(keyStorage))


storage.forEach(product => {
    const newProduct = document.createElement('div')
    newProduct.classList.add('product')
    const title = document.createElement('p')
    title.classList.add('title')
    title.textContent = product.name
    newProduct.insertAdjacentElement('afterbegin', title)

    title.addEventListener('click', (e) => {
        const parent = e.target.parentElement
        if (parent.querySelector('.reviews-box')) {
            parent.querySelector('.reviews-box').remove()
        } else {
            const reviewsBox = document.createElement('div')
            reviewsBox.classList.add('reviews-box', 'show-reviews')
            product.reviews.forEach(review => {
                const newReview = document.createElement('div')
                newReview.classList.add('review')
                newReview.innerHTML = `
                <p class="review-text">${review}
                </p>
                <svg class="delete-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
                `
                const delIcon = newReview.querySelector('.delete-icon')
                delIcon.addEventListener('click', (e) => {
                    const parentIcon = e.target.tagName === 'svg' ?
                        e.target.parentElement : e.target.parentElement.parentElement
                    const productName = parentIcon.parentElement.parentElement
                        .querySelector('.title').textContent
                    const reviewText = parentIcon.querySelector('.review-text').textContent
                    const indProd = storage.findIndex(prod => prod.name.trim() === productName.trim())
                    const indReview = storage[indProd].reviews.findIndex(rev => rev.trim() === reviewText.trim())
                    storage[indProd].reviews.splice(indReview, 1)
                    if (storage[indProd].reviews.length === 0) {
                        storage.splice(indProd, 1)
                        parentIcon.parentElement.parentElement.remove()
                    } else {
                        parentIcon.remove()
                    }
                    localStorage.setItem(keyStorage, JSON.stringify(storage))
                })
                reviewsBox.insertAdjacentElement('beforeend', newReview)
            })
            parent.insertAdjacentElement('beforeend', reviewsBox)
        }
    })

    productsBox.insertAdjacentElement('beforeend', newProduct)
})