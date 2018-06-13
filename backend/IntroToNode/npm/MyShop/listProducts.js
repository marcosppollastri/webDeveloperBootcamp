var faker = require("faker");

var product;

for(var i = 0; i<10; i++){
    product = faker.commerce.productName() + "\t\t\t" + faker.commerce.price();
    console.log(product);
}