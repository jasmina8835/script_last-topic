// BROUZERDA XOTIRA TUSHUNCHASI
// Lokal xotira
// localStorage.setTime('kalit', "malumot") malumot saqlash
// localStorage.setTime('kalit', "malumot2") malumot o'zgartirish
// localStorage.setTime('kalit2', "malumot2") yangi malumot saqlash
// let h = localStorage.getItem('kalit') malumotni kalit orqali olish
// console.log(h);
// localStorage.removeItem('kalit') malumotni kalit orqali ochirish
// localStorage.clear() local xotirani tozalash
// SESSIYA XOTIRASI
// sessionStorage.setItem('abc', 'acd')
// console.log(sessionStorage.getItem('abc'));
// sessionStorage.removeItem('abc')
// sessionStorage.clear()

let cart = localStorage.getItem('products')
if(cart){
    renderCart()
}else {
    localStorage.setItem('products', JSON.stringify([]))
}

function renderCart() {
    document.querySelector('ul').innerHTML = ''
    let p = JSON.parse(localStorage.getItem('products'))
    p.map((prd) => {
        let li = document.createElement('li')
        li.innerHTML = prd.name + ' | Soni: ' + prd.count
        document.querySelector('ul').append(li)
    })
}

let product = {
    id: 1,
    name: 'televisor',
    price: 1500000
}

let d = document.querySelector('button')
d.addEventListener('click', () => {
    let prd = {
        name: product.name,
        price: product.price,
        count: 1
    }
    let Ip = JSON.parse(localStorage.getItem('products'))
    if(Ip.length >= 1){
        Ip.forEach(t=> {
            if(t.name === product.name){
                t.count= t.count + 1
            }else {
                Ip.push(prd)
            }
        })
    }else {
        Ip.push(prd)
    }
    localStorage.setItem('products', JSON.stringify([...Ip]))
    renderCart()
})