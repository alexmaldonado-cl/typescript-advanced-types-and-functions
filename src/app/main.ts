import { faker } from '@faker-js/faker';
import { addProduct, findProducts, products, updateProduct } from "./products/product.service";


for (let index = 0; index < 10; index++) {
  addProduct({
    title: faker.commerce.productName(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    description: faker.commerce.productDescription(),
    stock: faker.datatype.number({min:10, max:100}),
    tags: faker.helpers.arrayElements(),
    categoryId: faker.datatype.uuid()
  });

}

console.log(products);

const product = products[0];
const editP = updateProduct(product.id, {
  title: 'New title #2',
  stock: 155
});

console.log("======================");
console.log("PRODUCT", editP);

const findP = findProducts({
  color: 'red'
});

console.log(findP);
