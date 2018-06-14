var faker = require("faker");

var product;
var title= "===========\nMY SHOP\n===========";

console.log(title);

for(var i = 0; i<10; i++){
    product = faker.commerce.productName() + "\t\t$" + faker.commerce.price();
    console.log(product);
}



