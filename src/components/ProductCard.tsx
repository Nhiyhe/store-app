import { Product } from "../interfaces";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <li className={styles.card}>
      <h2>Name: {product.name}</h2>
      <p>Price: {`£${product.price.toFixed(2)}`}</p>
    </li>
  );
};

export default ProductCard;
