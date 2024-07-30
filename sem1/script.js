// TASK 1

function addMetaData(book, metaDataType, value) {
    if (book[metaDataType]) {
        book[metaDataType].push(value)
    } else {
        book[metaDataType] = [value]
    }
}

function getMetaData(book, metaDataType) {
    return book[metaDataType]
}

const book = {
    title: '1984',
    author: 'George Orwell'
}

const reviewSymbol = Symbol('review')
const ratingSymbol = Symbol('rating')
const tagsSymbol = Symbol('tags')


addMetaData(book, reviewSymbol, 'very interesting book')
addMetaData(book, ratingSymbol, 4.8)
addMetaData(book, tagsSymbol, 'dystopia')

console.log(getMetaData(book, reviewSymbol))
console.log(getMetaData(book, ratingSymbol))
console.log(getMetaData(book, tagsSymbol))


// TASK 2

const books = [
    { title: "1984", author: "George Orwell" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "Fahrenheit 451", author: "Ray Bradbury"}
]

books[Symbol.iterator] = function() {
    return {
        current: 0,
        last: this.length - 1,
        next() {
            return this.current <= this.last ? {done: false, value: books[this.current++]} : {done: true}
        }
    }
}

// console.log(books)

for (const book of books) {
    console.log(book)
}

// books.push({ title: "Fahrenheit 451", author: "Ray Bradbury"})

// console.log(books)


// TASK 3

const divAll = Array.from(document.querySelectorAll('div')).filter(element => element.hasAttribute('data-active'))

divAll.forEach(el => console.log(el))


// TASK 4

const courses = new Map()
courses.set("Математика", "Смирнов")
courses.set("История", "Иванова")

console.log(courses)


const students = new Map()
students.set('Иван', new Set(['История', 'История', 'История', 'ИЗО']))

console.log(students)