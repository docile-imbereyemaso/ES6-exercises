const shoppingCart = new Map(
    [
        [1,{name:"notebooks",quantity:3}],
        [2,{name:"books",quantity:3}],
        [3,{name:"pens",quantity:10}],
        [4,{name:"pencils",quantity:10}]
    ]
);

//Adding the element to Map
shoppingCart.set(5,{name:"hands bags",quantity:30});

// removing the element from Map
shoppingCart.delete(1)

//updating the element 
shoppingCart.set(2,{name:"mathematical set",quantity:50});
// console.log(shoppingCart);

//Total items in shopping cart;
  let sum =0;

for(let [key,value] of shoppingCart){


    sum += value.quantity; 
}

 let total =0;
shoppingCart.forEach((value,key)=>{
 total += value.quantity;
});

console.log(total)


