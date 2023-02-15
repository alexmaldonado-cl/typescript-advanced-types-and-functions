
export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10,
) => {
  return {
    id, stock, isNew
  }
}

const product1 = createProduct(1);
console.log(product1);

const product2 = createProduct(2);
console.log(product2);

const product3 = createProduct(3, false, 0);
console.log(product3);

const product4 = createProduct(4, true, 100);
console.log(product4);
