import { products } from "config";
import ProductCard from "./ProductCard";
import { ProductListGrid } from "./ProductList.styles";

const ProductList: React.FC = () => {
  return (
    <ProductListGrid>
      {products.map(({ id, name, picture, path }) => (
        <ProductCard key={id} name={name} picture={picture} path={path} />
      ))}
    </ProductListGrid>
  );
};

export default ProductList;
