import PropTypes from 'prop-types';
import FilterList from './FilterList';

const Header = ({ filters, clearFilters, clearFilter }) => {
  return (
    <div
      role="banner"
      className="h-[150px] bg-desaturated-dark-cyan bg-header-mobile sm:bg-header-desktop"
    >
      <div
        className={`${
          filters.length === 0 && 'hidden'
        } relative md:w-full lg:w-5/6 w-[340px] mx-auto`}
      >
        <div className="w-full absolute transform -translate-x-1/2 top-[125px] left-1/2 flex items-center justify-between bg-white rounded-md shadow-xl p-3">
          <div className="flex flex-wrap items-center gap-2">
            <FilterList filters={filters} clearFilter={clearFilter} />
          </div>
          <button
            onClick={() => clearFilters()}
            className="text-dark-grayish-cyan cursor-pointer"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  filters: PropTypes.array.isRequired,
  clearFilter: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
};

export default Header;
