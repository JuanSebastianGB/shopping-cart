import { ProductModel } from './product.model';

export interface CartElementModel extends ProductModel {
  qty: number;
}
