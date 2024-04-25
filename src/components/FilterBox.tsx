import styles from "./FilterBox.module.css";

interface Props {
  sortBy: string;
  setSortBy: (v: string) => void;
}
const FilterBox = ({ sortBy, setSortBy }: Props) => {
  return (
    <select
      className={styles.select}
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
    >
      <option value="cheapitems">5 cheapest items</option>
      <option value="allitems">All items</option>
    </select>
  );
};

export default FilterBox;
