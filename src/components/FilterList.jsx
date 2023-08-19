import remove from '/images/icon-remove.svg';

const FilterList = ({ filters, clearFilter }) => {
  const renderedList = filters.map((filter, index) => {
    return (
      <div key={index} className="h-8 flex items-center justify-center rounded-md overflow-hidden">
        <span className="flex items-center font-semibold justify-center h-full px-2 bg-light-grayish-cyan-bg text-desaturated-dark-cyan">
          {filter}
        </span>
        <span onClick={() => clearFilter(filter)} className="px-2 h-full flex items-center justify-center bg-desaturated-dark-cyan cursor-pointer">
          <img src={remove} alt="remove" className="" />
        </span>
      </div>
    );
  });
  return <>{renderedList}</>;
};

export default FilterList;
