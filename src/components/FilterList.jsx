import remove from '/images/icon-remove.svg';
import PropTypes from 'prop-types'

const FilterList = ({ filters, clearFilter }) => {
  const renderedList = filters.map((filter, index) => {
    return (
      <button key={index} className="h-8 flex items-center justify-center rounded-md overflow-hidden">
        <span className="flex items-center font-semibold justify-center h-full px-2 bg-light-grayish-cyan-bg text-desaturated-dark-cyan">
          {filter}
        </span>
        <span onClick={() => clearFilter(filter)} className="px-2 h-full flex items-center justify-center bg-desaturated-dark-cyan cu">
          <img src={remove} alt="remove" className="" />
        </span>
      </button>
    );
  });
  return <div>{renderedList}</div>;
};

FilterList.propTypes = {
  filters: PropTypes.array.isRequired,
  clearFilter: PropTypes.func.isRequired,
}

export default FilterList;
