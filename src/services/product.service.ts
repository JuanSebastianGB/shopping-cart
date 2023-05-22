const URL = 'https://fakestoreapi.com/products';
export const getProducts = async () => fetch(URL).then((res) => res.json());
