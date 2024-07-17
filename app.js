let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Kottu',
        image: '1.PNG',
        price: 600
    },
    {
        id: 2,
        name: 'Egg Fried Rice',
        image: '2.PNG',
        price: 650
    },
    {
        id: 3,
        name: 'Pizza',
        image: '3.PNG',
        price: 1050
    },
    {
        id: 4,
        name: 'Club Sandwich',
        image: '4.PNG',
        price: 700
    },
    {
        id: 5,
        name: 'Pasta',
        image: '5.PNG',
        price: 300
    },
    {
        id: 6,
        name: 'Soup',
        image: '6.PNG',
        price: 200
    },
    {
        id: 7,
        name: 'French Fries',
        image: '7.PNG',
        price: 100
    },
        
    {
        id: 8,
        name: 'Burger',
        image: '8.PNG',
        price: 250
    },

    {
        id: 9,
        name: 'Taco',
        image: '9.PNG',
        price: 600
    },

    {
        id: 10,
        name: 'Buriyani',
        image: '10.PNG',
        price: 850
    },

    {
        id: 11,
        name: 'Cheese Cake',
        image: '11.PNG',
        price: 150
    },

    {
        id: 12,
        name: 'Steak',
        image: '12.PNG',
        price: 900
    }





];

let clearAllButton = document.querySelector('.clearAll');


clearAllButton.addEventListener('click', () => {
    listCards = []; 
    reloadCard();   
});

let backToHomeButton = document.querySelector('.backToHome');


backToHomeButton.addEventListener('click', () => {
    window.location.href = 'index.html'; 
});



let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${"Rs." + value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${"Rs." + value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = "Rs."+ totalPrice.toLocaleString() ;
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}


function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;

        
        const popup = document.getElementById('popup');
        popup.classList.add('show');
        setTimeout(() => {
            popup.classList.remove('show');
        }, 500); 
    }
    reloadCard();
}