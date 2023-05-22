import { ProductModel, Rating } from '@/models';

export const ratingAdapter = (ratingApi: any): Rating => {
  return {
    rate: ratingApi.rate,
    count: ratingApi.count,
  };
};
export const productAdapter = (productApi: any): ProductModel => {
  return {
    id: productApi.id,
    title: productApi.title,
    price: productApi.price,
    description: productApi.description,
    category: productApi.category,
    image: productApi.image,
    rating: ratingAdapter(productApi.rating),
  };
};
