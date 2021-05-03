
const data = [
    {id: 1, title: "Восхождение Короля Лича", name: "Christie Golden", price: 100, coverImage: 'https://media.oki.by/img/catalog/177000/177482_532412.jpg'},
    {id: 2, title: "Иллидан", name: "Christie Golden", price: 200, coverImage: 'https://s4-goods.ozstatic.by/2000/927/515/10/10515927_0.jpg'},
    {id: 3, title: "Хроники: Том 1", name: "Christopher Vincent Metzen", price: 120, coverImage: 'https://s1-goods.ozstatic.by/2000/930/515/10/10515930_0.jpg'},
    {id: 4, title: "Хроники: Том 2", name: "Christopher Vincent Metzen", price: 130, coverImage: 'https://igromaster.by/upload/iblock/89e/89eea69e72383d297d943590fee65e3a.webp?1582252860'},
    {id: 5, title: "Хроники: Том 3", name: "Christopher Vincent Metzen", price: 110, coverImage: 'https://images.noob-club.ru/news/2018/03/3kwhq9xb0d.jpg'},
]

export default class BookStore {
    getBooks () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Ошибка загрузки'))
                } else {
                    resolve(data)
                }
            }, 1000)
        })
    }
}