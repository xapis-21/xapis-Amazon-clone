const product_container = document.getElementById('products_container')
const categories = document.querySelectorAll('.categories button')
const categories_container = document.querySelector('.categories')
const first_slide = document.getElementById('first-hero-slide')
const logo = document.querySelector('.header_logo')
const total_items = document.getElementById('total-items')
const count_total = document.querySelector('.count-total')
const count = document.getElementById('basket_count')
const home = document.querySelector('.home-container')
const basket_option = document.querySelector('.header_basket_option')
const total_cost = document.getElementById('total_price')
const search = document.getElementById('search')
const search_form = document.querySelector('.header_search')
let basket = []
let newBasket = []
let total_price = 0
let search_terms,search_value
let search_results=[]

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

// formatter.format(1000) // "$1,000.00"
// formatter.format(10) // "$10.00"
// formatter.format(123233000) // "$123,233,000.00"

const products = [
    {
        id: "A001",
        name: "Samsung Electronics Galaxy Buds Live, True Wireless Earbuds W/Active Noise Cancelling (Wireless Charging Case Included), Mystic Red",
        price: 104.99,
        image: 'https://m.media-amazon.com/images/I/71qsNVFefKL._AC_UL320_.jpg',
        category: 'Electronics',
        rating: 4,
        addedToCart:false
    },
     {
        id: "A002",
        name: "Maruchan Ramen Chicken, 3.0 Oz, Pack of 24",
        price: 104.99,
        image: 'https://m.media-amazon.com/images/I/91xajJWygpL._AC_UL320_.jpg',
        category: 'Food & health',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A003",
        name: "Zise Women's Emmy Loose Crop T-Shirt",
        price: 14.9,
        image: 'https://m.media-amazon.com/images/I/61MxBLZ5jnL._AC_UL320_.jpg',
        category: 'Fashion',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A004",
        name: 'Intoval Wireless Charger, 3 in 1 Charger for iPhone/iWatch/Airpods, Qi-Certified Charging Station ',
        price: 8218,
        image: 'https://m.media-amazon.com/images/I/61rn2trxswL._AC_UL320_.jpg',
        category: 'Electronics',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A005",
        name: 'OREO Original, OREO Golden, CHIPS AHOY! & Nutter Butter Cookie Snacks Variety Pack, School Lunch Box Snacks ',
        price: 14,
        image: 'https://m.media-amazon.com/images/I/81p8sciFxCL._AC_UL320_.jpg',
        category: 'Food & health',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A006",
        name: "Ecrocoo Women's Swiss Dot A-Line Dress Crew Neck Flare Short Sleeve Tie Waist See-Through Mesh Mini Dress"
        ,
        price:26.99,
        image: 'https://m.media-amazon.com/images/I/61TNfFDuD1L._MCnd_AC_UL320_.jpg',
        category: 'Fashion',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A007",
        name: 'Belifu Dual Channel TENS EMS Unit 24 Modes Muscle Stimulator for Pain Relief Therapy, Electronic Pulse',
        price: 35105,
        image: 'https://m.media-amazon.com/images/I/71EP8ds034L._AC_UL320_.jpg',
        category: 'Electronics',
        rating: 3,
        addedToCart:false
    },
    {
        id: "A008",
        name: 'Chef Boyardee Beef in Tomato & Meat Sauce Ravioli, 7.5 Oz. (Pack of 12)',
        price: 645,
        image: 'https://m.media-amazon.com/images/I/81za90qtEZL._AC_UL320_.jpg',
        category: 'Food & health',
        rating: 4,
        addedToCart:false
    },
    {
        id: "A009",
        name: 'Paitluc Womens Pullover Sweatshirts Womens Hoodies Crewneck Double Hoodied Long Sleeve Sweatshirts',
        price: 24,
        image: 'https://m.media-amazon.com/images/I/71mOXi6NwIL._AC_UL320_.jpg',
        category: 'Fashion',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A010",
        name: 'TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging ',
        price: 150,
        image: 'https://images-na.ssl-images-amazon.com/images/I/41LR93r46HL.jpg',
        category: 'Electronics',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A011",
        name: 'Knorr Pasta Sides For a Delicious Easy Pasta Meal Alfredo No Artificial Flavors 4.4 oz, 4 count',
        price: 150,
        image: 'https://m.media-amazon.com/images/I/91o5y9eZWCL._AC_UL320_.jpg',
        category: 'Food & health',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A012",
        name: 'Joviren Cotton Workout Crop Tank Top for Women Racerback Yoga Tank Tops Athletic Sports Shirts Exercise Undershirts 4 Pack ',
        price: 1150,
        image: 'https://m.media-amazon.com/images/I/61J8vriN8YL._AC_UL320_.jpg',
        category: 'Fashion',
        rating: 3,
        addedToCart:false
    },
    {
        id: "A013",
        name: 'Phone Card Holder, Phone Wallet, Phone Pocket, Leather Card Holder, Stick On Wallet, Adhesive Phone Wallet, Marble Card Holder, Black',
        price: 11.69,
        image: 'https://i.etsystatic.com/13645812/r/il/6995e4/2276990027/il_340x270.2276990027_qk4c.jpg',
        category: 'Electronics',
        rating:5,
        addedToCart:false
    },
    {
        id: "A014",
        name: "adidas Women's Puremotion Adapt Running Shoe",
        price: 59.95,
        image: 'https://m.media-amazon.com/images/I/61pW0bF4pzS._AC_UL320_.jpg',
        category: 'Fashion',
        rating:4,
        addedToCart:false
    },
    {
        id: "A015",
        name: "Starbucks, Refreshers with Coconut Water, 3 Flavor Variety Pack, 12 fl Oz. Cans (12 Pack)",
        price: 59.95,
        image: 'https://m.media-amazon.com/images/I/818pOvvxAPL._AC_UL320_.jpg',
        category: 'Food & health',
        rating:3,
        addedToCart:false
    },
    {
        id: "A016",
        name: 'Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-Year',
        price: 62.99,
        image: 'https://images-na.ssl-images-amazon.com/images/I/31jBba7+ySL.jpg',
        category: 'Electronics',
        rating: 4,
        addedToCart:false
    },
    {
        id: "A017",
        name: "Gildan Men's Fleece Hooded Sweatshirt, Style G18500",
        price: 12.29,
        image: 'https://m.media-amazon.com/images/I/611LES31cbS._AC_UL320_.jpg',
        category: 'Fashion',
        rating: 4,
        addedToCart:false
    },
    {
        id: "A018",
        name: 'Lenovo IdeaPad 5i Pro 16" Laptop, 16.0" QHD (2560 x 1600) Display, Intel Core i5-11300H Processor, 16GB',
        price: 929.99,
        image: 'https://m.media-amazon.com/images/I/718vTOENZ+L._AC_UY218_.jpg',
        category: 'Electronics',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A019",
        name: 'Care Package (40 Count) Snacks veriety pack Food Cookies Bars Chips Candy Back to School Prime Gift Basket',
        price: 929.99,
        image: 'https://m.media-amazon.com/images/I/91xr4Xul3hS._AC_UL320_.jpg',
        category: 'Food & health',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A020",
        name: 'Make It Real - Fashion Design Mega Set with Light Table. Kids Fashion Design Kit Includes Light Table, Colored',
        price: 435,
        image: 'https://m.media-amazon.com/images/I/71rquA5JT-L._AC_UL320_.jpg',
        category: 'Fashion',
        rating: 5,
        addedToCart:false
    },
     {
        id: "A021",
        name: 'Garlic Press, Upgrade Garlic Mincer Stainless Steel Garlic Press Rocker, Professional Kitchen Gadget with Ergonomic Handle,Garlic Peeler',
        price: 168,
        image: 'https://m.media-amazon.com/images/I/715gL4wJHdL._AC_UL320_.jpg',
        category: 'Food & health',
        rating: 4,
        addedToCart:false
    },
    {
        id: "A022",
        name: 'HP 15 Laptop, 11th Gen Intel Core i5-1135G7 Processor, 8 GB RAM, 256 GB SSD Storage, 15.6” Full HD IPS',
        price: 568,
        image: 'https://m.media-amazon.com/images/I/81skV7BufjL._AC_UY218_.jpg',
        category: 'Electronics',
        rating: 3,
        addedToCart:false
    },
       {
        id: "A023",
        name: 'Dash Rapid Egg Cooker: 6 Egg Capacity Electric Egg Cooker for Hard Boiled Eggs, Poached Eggs, Scrambled Eggs',
        price: 16.99,
        image: 'https://m.media-amazon.com/images/I/616CPzzjKmL._AC_UL320_.jpg',
        category: 'Food & health',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A024",
        name: 'Create Your Own Headband Hair Fashion DIY Arts Craft Kit for Girls - 60+ Craft Supplies Display Drawer Storage',
        price: 568,
        image: 'https://m.media-amazon.com/images/I/91Smd7Pjn5S._AC_UL320_.jpg',
        category: 'Fashion',
        rating: 4,
        addedToCart:false
    },
    {
        id: "A025",
        name: 'SAMSUNG Galaxy Z Flip 3 5G Factory Unlocked Android Cell Phone US Version Smartphone Flex Mode Intuitive',
        price: 974,
        image: 'https://m.media-amazon.com/images/I/81skV7BufjL._AC_UY218_.jpg',
        category: 'Electronics',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A026",
        name: 'Mueller Austria Pro-Series 8 Blade Egg Slicer, Onion Mincer Chopper, Slicer, Vegetable Chopper, Cutter, Dicer,',
        price: 82.6,
        image: 'https://m.media-amazon.com/images/I/91IkszFDn6S._AC_UL320_.jpg',
        category: 'Food & health',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A027",
        name: "Under Armour Men's Charged Assert 9 Running Shoe",
        price:65.10,
        image: 'https://m.media-amazon.com/images/I/51v1dR53epL._AC_UL320_.jpg',
        category: 'Fashion',
        rating: 4,
        addedToCart:false
    },
    {
        id: "A028",
        name: 'Samsung Galaxy A21S (64GB, 4GB) 6.5", Quad Camera, All Day Battery Dual SIM GSM Unlocked Global 4G LTE',
        price: 207,
        image: 'https://m.media-amazon.com/images/I/61HeM-Q0BML._AC_UY218_.jpg',
        category: 'Electronics',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A029",
        name: 'Real Littles Locker + Handbag Bundle Pack! Each Pack Contains an Exclusive Locker, Duffle Bag + 15 Surprises',
        price: 22,
        image: 'https://m.media-amazon.com/images/I/91A70RULEgL._AC_UL320_.jpg',
        category: 'Fashion',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A030",
        name: 'Healthy Snacks Gift Basket Care Package - 32 Health Food Snacking Choices - Quick Ready To Go - For Adults, College Students Gifts, Kids,',
        price: 22,
        image: 'https://m.media-amazon.com/images/I/A1JrxZB1l-L._AC_UL320_.jpg',
        category: 'Food & health',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A031",
        name: '5 VARIETY PACK - Unisex Cute Animal Fashion Breathable Washable Reusable Face Mask For Kids Boys & Girls',
        price: 5.9,
        image: 'https://m.media-amazon.com/images/I/81rdeFuqzxL._AC_UL320_.jpg',
        category: 'Fashion',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A032",
        name: 'PS5 Playstation 5 (US Plug) Blu-ray Disc Edition Console 4K-TV Gaming, 8K Output, Ultra-High Speed 825GB SSD, WiFi 6, Bluetooth 5.1, Etekdirect Accessory',
        price: 2265,
        image: 'https://m.media-amazon.com/images/I/31h1Ts8fBeL._AC_UY218_.jpg',
        category: 'Electronics',
        rating: 5,
        addedToCart:false
    }

];

function searchProduct(search) {
    products.map(pdt => {
        search_terms = pdt.name.toLowerCase().split(' ')
        let final_searchTerm
        for (var i = 0; i < search_terms.length; i++){
             final_searchTerm = search_terms[i].split(',')
            final_searchTerm.forEach(term => {
                if (term === search && search !== '') {
                    search_results.push(pdt)
                }
           })
        }
    })
    product_container.innerHTML=''
    if (search_results.length === 0 && search_results.includes('')) {
        product_container.innerHTML = `<h1 class='font-bold text-2xl text-gray-400'> 😥 The product you are looking for is not found, try using another term</h1>`
    } else {
        createProducts(search_results)
    }
    console.log(search_results)
}

// searchProduct('samsung')
search_form.addEventListener('submit', (e) => {
    e.preventDefault()
    search_value = search.value.toLowerCase().split(' ')
    search.value = ''
    for (let i = 0; i < search_value.length; i++){
        searchProduct(search_value[i])
    }
    search_results = []
    console.log(search_value)
})

function createSingleProduct(product) {
    let productEL = document.createElement('div')
    productEL.innerHTML=` <div  id=${product.id} class='product w-80 shadow-2xl pt-4 relative bg-white m-4'>
                <img class='h-40 m-auto' src=${product.image} alt=""/>
                <h1 class='font-semibold text-left mt-2 text-lg px-4'>${product.name}</h1>
               <div class="rate_price flex justify-between my-4 px-4">
                <p class='font-light text-gray-500 text-center'>⭐⭐⭐⭐</p>
                    <p class="font-bold text-2xl">$<span>${product.price}</span></p>
               </div>
               <button class="w-full left-0 bottom-0 text-lg font-semibold p-2 bg-yellow-600 absolute mt-auto">Add to Basket</button>
            </div>`
    product_container.appendChild(productEL)
    // getAvailableProducts() 
}

function createProducts(pdts) {
    pdts.map(product => createSingleProduct(product))
    categories[0].classList.add('active')
    getAvailableProducts() 
}


categories.forEach(category => {
    category.addEventListener('click', () => {
        deactivateCategory()
        product_container.innerHTML = ''
        category.classList.add('active')
        if (category === categories[0]) {
            createProducts(products)
            // getAvailableProducts() 
        }else{
           createProducts( products.filter(product => {
            return product.category === category.textContent
            }))
        category.classList.add('active')
    }
   })
})


function deactivateCategory() {
    categories.forEach(btn => {
        btn.classList.remove('active')
    })
}

function createBasktetProduct(currentBasket) {
   currentBasket.map(product => {
        let pdtEl = document.createElement('div')
        pdtEl.innerHTML = `
            <div class='basket-product border-2 rounded-lg border-yellow-600 h-60 w-full flex shadow-lg items-center justify-start mx-auto  px-4 relative mb-4 bg-white'>
                <img class='h-40 w-40 object-contain'
                    src=${product.image} alt="" />
                <div class="info flex flex-col items-left px-4">
                    <h1 class='font-semibold text-left mt-2 text-lg'>${product.name}</h1>
                    <p class="font-bold text-2xl text-yellow-900"><span>$${product.price}</span></p>
                <button class="w-40 left-0 bottom-0 text-sm font-bold p-2 border-gray-900 border-2 text-gray-900  mt-4">Remove</button>
                </div>
            </div>`
        product_container.appendChild(pdtEl)
    })
}

function getTotalPrice(removedPdt) {
    for (var i = 0; i < basket.length; i++){
        total_price += parseInt(basket[i].price)
    }
    total_cost.textContent =  formatter.format(total_price)
}

function removeProductFromBasket() {
    const productsInBasket = document.querySelectorAll('.basket-product')
    let removeBtn
    productsInBasket.forEach(pdt => { removeBtn = pdt.children[1].children[2] })
        console.log(productsInBasket[0])
        // newBasket.push({
        //    image:pdt[0].src,
        //     name: pdt[1].textContent,
        //     price:pdt[2].children[1].textContent.split('$')[1],
        //     removed:true
        // })
        // console.log(newBasket)
  
    
}

function getAvailableProducts() {
const available_pdts = document.querySelectorAll('.product')
available_pdts.forEach(product => {
    let pdt = product.children
    let btn = pdt[3]
    btn.addEventListener('click',()=> {
        basket.push({
            image:pdt[0].src,
            name: pdt[1].textContent,
            price:pdt[2].children[1].textContent.split('$')[1],
            id: product.id,
            removed:false
        })
    getTotalPrice()
    count.textContent = basket.length
    total_items.textContent = basket.length
    })
})

}

createProducts(products)

logo.addEventListener('click', () => {
    deactivateCategory() 
    product_container.innerHTML = ''
    categories_container.classList.remove('deactive')
    createProducts(products)
    // getAvailableProducts()
    first_slide.classList.add('active')
    home.classList.remove('flex')
    count_total.classList.remove('active')
    product_container.classList.remove('basket')
})


basket_option.addEventListener('click', () => {

    categories_container.classList.add('deactive')
    product_container.innerHTML = ''
    product_container.classList.add('basket')
    first_slide.classList.remove('active')
    count_total.classList.add('active')
    createBasktetProduct(basket)
    removeProductFromBasket()
})



