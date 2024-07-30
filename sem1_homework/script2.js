console.log('==='.repeat(10))
console.log('Seminar 1 - Homework - Task 2')

const kitchenWorkers = new Map()
const orders = new Map()

const kitchenWorkerOne = Symbol('Виктор')
const kitchenWorkerTwo = Symbol('Ольга')
const kitchenWorkerThree = Symbol('Дмитрий')

kitchenWorkers.set(kitchenWorkerOne, {
    specialization: "Пицца",
    dishes: ['Маргарита', 'Пепперони']
})
kitchenWorkers.set(kitchenWorkerTwo, {
    specialization: "Суши",
    dishes: ['Филадельфия', 'Калифорния']
})
kitchenWorkers.set(kitchenWorkerThree, {
    specialization: "Десерты",
    dishes: ['Тирамису', 'Чизкейк']
})


function addOrder(clientName, ...dishes) {
    const client = Symbol(clientName)
    const lstDishes = [...dishes]
    lstDishes.forEach(dish => {
        const cook = kitchenWorkers.entries()
            .find(cock => cock[1].dishes.includes(dish))[0]
        if (orders.has(client)) {
            orders.get(client).push({
                cook: cook.description,
                type: kitchenWorkers.get(cook).specialization,
                dish: dish
            })
        } else {
            orders.set(client, [{
                cook: cook.description,
                type: kitchenWorkers.get(cook).specialization,
                dish: dish
            }])
        }
    })
}


addOrder('Алексей', 'Пепперони', 'Тирамису')
addOrder('Мария', 'Калифорния', 'Маргарита')
addOrder('Ирина', 'Чизкейк')

function showAllOrders() {
    console.log('Список заказов')
    for (const order of orders) {
        console.log(`Клиент ${order[0].description} заказал(а):`
            .concat(order[1]
                .map(el => ` ${el.type} ${el.dish} (приготовлено ${el.cook})`)))
    }
}

showAllOrders()