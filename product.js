products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]
console.log('-------------------------------------------------------------')
//1. print product name only
let productName = products.map((a)=>a.pName)
console.log(productName);
// console.log(products);

console.log('-------------------------------------------------------------')

//2. print all mobile details whose display is lcd
let lcdProduct= products.filter((a)=>a.display=="lcd")
console.log(lcdProduct);

console.log('-------------------------------------------------------------')


//3. print 5g mobile phone name
let bandProduct=products.filter((a)=>a.band=="5g")
let Name = bandProduct.map((a)=>a.pName)
console.log(Name);


console.log('-------------------------------------------------------------')
//4. filter mobile based on price

let priceSort = products.sort((a,b)=> {return a.price-b.price})
console.log(priceSort);

console.log('--------------------------------------------------------------');

//5. print costly mobile

let costlyMobile = products.reduce((a,b)=>a.price>b.price?a:b)
console.log(costlyMobile.pName);

console.log('---------------------------------------------------------------')

//6. print low cost mobile
let LowMobile = products.reduce((a,b)=>a.price<b.price?a:b)
console.log(LowMobile.pName);
console.log('---------------------------------------------------------------');