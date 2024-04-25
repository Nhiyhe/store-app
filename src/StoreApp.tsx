import ProductList from "./components/ProductList";
import SearchBox from "./components/SearchBox";
import { useProducts } from "./hooks/useProducts";
import Loading from "./components/Loading";
import Error from "./components/Error";
import FilterBox from "./components/FilterBox";
import useFilters from "./hooks/useFilters";

import styles from "./StoreApp.module.css";

const StoreApp = () => {
  const { products, loading, hasError } = useProducts();
  const { filteredProducts, term, setTerm, sortBy, setSortBy } =
    useFilters(products);

  if (loading) {
    return <Loading />;
  }

  if (hasError) {
    return <Error />;
  }

  return (
    <section>
      <header className={styles.header}>
        <SearchBox term={term} setTerm={setTerm} />
        <FilterBox sortBy={sortBy} setSortBy={setSortBy} />
      </header>
      <main className={styles.main}>
        <ProductList products={filteredProducts} />
      </main>
    </section>
  );
};

export default StoreApp;
