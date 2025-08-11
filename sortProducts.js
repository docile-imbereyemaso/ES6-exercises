const sortProducts = products =>products.sort((a,b)=>a.price-b.price);

let products =[
    {name:"mangoes",price:300},
    {name:"potatoes",price:100},
    {name:"Irish potatoes",price:1000}
]

console.log(sortProducts(products))