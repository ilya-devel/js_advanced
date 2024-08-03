function fetchNews() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.random() * 100 + 1
            if (randomNum > 10) {
                resolve(fetch('https://api.spacexdata.com/v3/history')
                    .then(response => (response.json())))
            } else {
                reject('Новости не загружены')
            }
        }, 2000)
    })
}

const btnLoadNews = document.querySelector('.load-button')
btnLoadNews.addEventListener('click', () => {
    const newsContainer = document.querySelector('.news-container')
    newsContainer.innerHTML = ''
    newsContainer.style.color = 'black'
    fetchNews().then(result => {
        result.forEach(element => {
            const newsBox = document.createElement('div')
            newsBox.innerHTML = `
            <div class="news">
                <h3 class="title">${element.title}</h3>
                <p class="text">${element.details}</p>
            </div>
            `
            newsContainer.insertAdjacentElement('beforeend', newsBox)
        })
        console.log('onload')
    }).catch((err) => {
        const newsBox = document.querySelector('.news-container')
        newsBox.style.color = 'red'
        newsBox.textContent = `Ошибка загрузки новостей: ${err}`
        console.log('error load')
    })
})