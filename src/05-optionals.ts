
//* Nullish Coalescing Operator (??) => Best Practice

//! Logical OR Operator (||)

export const createProduct = (
  id: string | number,
  isNew: boolean,
  stock?: number,
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true
  }
}

const product1 = createProduct(1, true, 12);
console.log(product1);

const product2 = createProduct(2, true);
console.log(product2);

const product3 = createProduct(2, false, 0);
console.log(product3);
