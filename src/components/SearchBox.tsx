import styles from "./SearchBox.module.css";

interface Props {
  term: string;
  setTerm: (v: string) => void;
}

const SearchBox = ({ term, setTerm }: Props) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Browse items by name"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className={styles.input}
      />
    </form>
  );
};

export default SearchBox;
