import { Product } from "./product.model";
import { CreateProductDTO, FindProductDto, UpdateProductDTO } from "./product.dto";
import { faker } from "@faker-js/faker";

export const products: Product[] = [];

export const addProduct = (data: CreateProductDTO): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.number(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.datatype.number(),
      title: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct)

  return newProduct;
}

export const updateProduct = (id: Product['id'], changes: UpdateProductDTO): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  }

  return products[index];
}

export const listProducts = (): Product[] => {
  return products;
}


export const findProducts = (dto: FindProductDto): Product[] => {

  // dto.color = 'red';
  // dto.isNew = true;
  // dto.tags = [];
  // dto.tags?.pop();
  // dto.tags?.push();

  return products;
}
