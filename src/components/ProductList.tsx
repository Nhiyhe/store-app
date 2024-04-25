import { Product } from "../interfaces";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  return (
    <article className={styles.products}>
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </article>
  );
};

export default ProductList;
