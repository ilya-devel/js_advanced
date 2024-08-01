class MyLibrary {
    #books = []

    constructor (...books) {
        if(books.length !== new Set(books).size) {
            throw new Error('В списке присутствуют дубликаты')
        }
        books.forEach(book => this.#books.push(book))
    }

    get allBooks() {
        return this.#books.sort()
    }

    addBook(title) {
        if (!this.hasBook(title)) {
            this.#books.push(title)
        } else {
            throw new Error('Данная книга дубликат')
        }
    }

    removeBook(title) {
        if (this.hasBook(title)) {
            const book = this.#books.splice(this.#books.indexOf(title), 1)[0]
            console.log(`Из библиотеки удалена книга ${book}`)
        } else {
            console.log(`Книга ${title} отсутствует в библиотеке`)
        }
    }

    hasBook(title) {
        if (this.#books.includes(title)) {
            return true
        }
        return false
    }
}


const myLib = new MyLibrary(
    'Властелин колец'
    ,'Маноратха'
    ,'Ник'
    // ,'Ник' // вызывает ошибку из-за дублирующего названия
    ,'Дракула'
)

console.log(myLib.allBooks)

// myLib.addBook('Ник') // вызывает ошибку из-за дублирующего названия
// console.log(myLib.allBooks)

myLib.addBook('Бегущий по лезвию')
console.log(myLib.allBooks)


myLib.removeBook('Дракула')
console.log(myLib.allBooks)

myLib.removeBook('Стальная крыса')
console.log(myLib.allBooks)
