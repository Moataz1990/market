let carts = document.querySelectorAll('.btn-primary');

let products =[

    {
         name: 'Mango',
         price: 100,
         inCart:0
    },
    {
        name: 'Melon',
        price: 100,
        inCart:0
   },
   {
    name: ".card-title",
    price: ".card-text",
    inCart:0
},
{
    name: 'Strawberries',
    price: 80,
    inCart:0
}
];

for (i=0; i < carts.length; i++){
    carts[i].addEventListener('click',() => {
        cartNumbers(products[i]);
    })
    
}


function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.fa-shopping-cart span ').textContent = productNumbers;

    }


}

function cartNumbers(product){
   
     let productNumbers = localStorage.getItem('cartNumbers');


     productNumbers = parseInt(productNumbers);


if(productNumbers){
    localStorage.setItem('cartNumbers',productNumbers + 1);
    document.querySelector('.fa-shopping-cart span ').textContent = productNumbers + 1 ; 

}
else {


localStorage.setItem('cartNumbers',1);
document.querySelector('.fa-shopping-cart span').textContent = 1 ; 
}
            setItems(product);
}

function setItem(product){
    console.log("inside of setItems function");
    console.log("my product ", product);
}
onLoadCartNumbers(); 