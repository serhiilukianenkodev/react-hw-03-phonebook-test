import css from './Filter.module.css';
export const Filter = ({ value, handleFilter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.filterInput}
        type="text"
        value={value}
        onChange={handleFilter}
      />
    </div>
  );
};
