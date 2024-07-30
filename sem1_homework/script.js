console.log('Seminar 1 - Homework - Task 2')

const musicCollection = {
    collection: [
        { title: "St. Anger", artist: "Metallica", year: "2003" },
        { title: "Some Kind Of Monster", artist: "Metallica", year: "2004" },
        { title: "Death Magnetic", artist: "Metallica", year: "2008" },
        { title: "Beyond Magnetic", artist: "Metallica", year: "2011" },
        { title: "The Wait", artist: "Metallica", year: "2018" }
    ],
    [Symbol.iterator]() {
        this.current = 0
        return this
    },
    next() {
        return this.current < this.collection.length ? { done: false, value: this.collection[this.current++] } : { done: true }
    }
}

const musicCollection2 = [
    { title: "St. Anger", artist: "Metallica", year: "2003" },
    { title: "Some Kind Of Monster", artist: "Metallica", year: "2004" },
    { title: "Death Magnetic", artist: "Metallica", year: "2008" },
    { title: "Beyond Magnetic", artist: "Metallica", year: "2011" },
    { title: "The Wait", artist: "Metallica", year: "2018" }
]

musicCollection2[Symbol.iterator] = () => {
    return {
        current : 0,
        next() {
            return this.current < musicCollection2.length ? { done: false, value: musicCollection2[this.current++] } : { done: true }
        }
    }
}

console.log(musicCollection)
console.log(musicCollection2)
console.log("---".repeat(10))

for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`)
}
console.log("---".repeat(10))

for (const album of musicCollection2) {
    console.log(`${album.title} - ${album.artist} (${album.year})`)
}