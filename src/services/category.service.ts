const URL = 'https://fakestoreapi.com/products/categories';
export const getCategories = async () => fetch(URL).then((res) => res.json());
