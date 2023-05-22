import { Container, Footer, Header } from '@/components';
import { Cart, Products, ProductsProvider } from '..';
import { CartProvider } from './context/CartProvider';

function ProductsPage() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Container>
          <Header />
          <Cart />
          <Products />
          <Footer />
        </Container>
      </CartProvider>
    </ProductsProvider>
  );
}

export default ProductsPage;
