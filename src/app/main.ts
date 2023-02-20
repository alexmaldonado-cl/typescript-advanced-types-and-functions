import { addProduct } from "./products/product.service";


addProduct({
  id: 1,
  title: 'P1',
  stock: 10,
  createdAt: new Date(),
  updatedAt: new Date(),
  category: {
    id: 1,
    title: "Category 001",
    createdAt: new Date(),
    updatedAt: new Date(),
  }
});
