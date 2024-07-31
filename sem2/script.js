class BankAccount {
    #balance = 0

    constructor(value) {
        if (this.validValue(value)) {
            this.#balance = value
        }
    }

    get balance() { return this.#balance }
    // set balance(balance) {this.#balance = balance} // если убрать сеттер то изменение параметра вне методов класса становится не возможным

    deposit(value) {
        if (this.validValue(value)) {
            this.#balance += value
        }
        return this.#balance
    }

    withdraw(value) {
        if (this.validValue(value)) {
            if (this.#balance < value) {
                throw new Error("Снимаемая сумма больше суммы на счёте")
            }
            this.#balance -= value
        }
        return this.#balance
    }

    validValue(value) {
        if (value < 0) {
            throw new Error("Значение не должно быть отрицательным")
        }
        if (typeof value != 'number') {
            throw new Error("Значение должно быть числом")
        }
        return true
    }
}


let account = new BankAccount(500)
console.log(account)
// account.balance = 10000 // Uncaught TypeError: Cannot set property balance of #<BankAccount> which has only a getter
console.log(account.balance)

account.deposit(200)
console.log(account.balance)

account.withdraw(100)
console.log(account.balance)