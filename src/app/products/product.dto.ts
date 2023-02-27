import { Product } from "./product.model";

export interface CreateProductDTO extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

type examplePick = Pick<Product, 'color' | 'description'>;

export interface UpdateProductDTO extends Partial <CreateProductDTO> {}

type exampleRequired = Required<Product>;
