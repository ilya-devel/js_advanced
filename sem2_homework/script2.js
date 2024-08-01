import { initialData } from './data.js'

document.addEventListener('DOMContentLoaded', () => {
    const productsBox = document.querySelector('.products-box')
    initialData.forEach(product => {
        const newProduct = document.createElement('div')
        newProduct.classList.add('product-box')
        newProduct.innerHTML = `
            <p class="title">${product.product}</p>
            <div class="reviews-box">
                <label for="product_${product.id}">Введите отзыв (Текущее количество символов: <span class="count">0</span>)</label>
                <textarea name="reviewInput" class="review-input" id="product_${product.id}" placeholder="Ваш отзыв" cols="60" rows="9"></textarea>
                <div class="message-err"></div>
                <div class="btn-send-review">Отправить</div>
            </div>
        `
        const reviewsBox = newProduct.querySelector('.reviews-box')
        product.reviews.forEach(review => {
            const reviewBox = document.createElement('div')
            reviewBox.classList.add('review')
            reviewBox.textContent = review.text
            reviewsBox.insertAdjacentElement('beforeend', reviewBox)
        })
        const btnSendReview = newProduct.querySelector('.btn-send-review')
        btnSendReview.addEventListener('click', () => {
            const errMsg = newProduct.querySelector('.message-err')
            const reviewText = newProduct.querySelector(`#product_${product.id}`)
            if (reviewText.value.length < 50 || reviewText.value.length > 500) {
                errMsg.textContent = 'Длина отзыва должна быть от 50 до 500 символов'
                return
            }
            if (reviewText.value) {
                const reviewBox = document.createElement('div')
                reviewBox.classList.add('review')
                reviewBox.textContent = reviewText.value
                reviewsBox.insertAdjacentElement('beforeend', reviewBox)
                reviewText.value = ''
                document.querySelector('.count').textContent = '0'
            }

        })
        productsBox.insertAdjacentElement('beforeend', newProduct)
    })

    document.querySelectorAll('.review-input').forEach(inp => {
        inp.addEventListener('input', (e) => {
            const value = e.target.parentElement.querySelector('.count')
            value.textContent = e.target.value.length
        })
    })
})