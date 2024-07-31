class User {
    name
    surname
    mail

    constructor(name, surname, mail) {
        this.name = name
        this.surname = surname
        this.mail = mail
    }
}

class PremiumUser extends User {
    premiumAccount = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
}

class RegularUser extends User { }


function getAccountInfo(user) {
    if (user instanceof User) {
        if (user instanceof PremiumUser) {
            const dd = user.premiumAccount.getDate()
            const mm = user.premiumAccount.getMonth()
            const yyyy = user.premiumAccount.getFullYear()
            console.log(`Пользователь ${user.name} ${
                user.surname} имеет премиум подписку до ${
                    dd < 10 ? "0".concat(dd) : mm}.${
                        mm < 10 ? "0".concat(mm) : mm}.${yyyy} года`)
        } else {
            console.log(`Пользователь ${user.name} ${
                user.surname} не имеет премиум подписки`)
        }
    } else {
        console.log('Тип пользователя не определён')
    }
}


const vipUser = new PremiumUser('Ilya', 'Akhmetzyanova', 'mail@example.com')
const commonUser = new RegularUser('Ilyas', 'Akhmetzyanov', 'mail2@example.com')

getAccountInfo(vipUser)
getAccountInfo(commonUser)
