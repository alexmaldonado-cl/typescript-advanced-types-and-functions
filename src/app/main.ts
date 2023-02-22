import { faker } from '@faker-js/faker';
import { addProduct, products } from "./products/product.service";

for (let index = 0; index < 50; index++) {
  addProduct({
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    description: faker.commerce.productDescription(),
    stock: faker.datatype.number({min:10, max:100}),
    tags: faker.helpers.arrayElements(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.datatype.uuid(),
      title: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  });

}

console.log(products);
