import PropTypes from 'prop-types';

const JobListItem = ({ job, updatedSelectedFilters }) => {
  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;

  const handleFilterClick = (filter) => {
    updatedSelectedFilters(filter);
  };

  return (
    <div
      className={`md:w-full lg:w-5/6 w-[340px] mx-auto relative bg-white p-5 rounded-md shadow-xl border-l-4 border-desaturated-dark-cyan ${
        !featured && 'border-none'
      } mb-6 md:mb-0`}
    >
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex flex-col md:flex-row gap-3">
          <figure className="absolute md:static -top-6 flex items-center w-12 md:w-20">
            <img src={logo} alt="logo" />
          </figure>
          <div className="flex flex-col gap-2.5 md:gap-1 mt-4 md:mt-0">
            <div className="flex items-center gap-5">
              <h2 className="font-semibold text-desaturated-dark-cyan md:text-sm">
                {company}
              </h2>
              <div className="flex gap-3 text-sm md:text-xs">
                <h3
                  className={`${
                    !job.new && 'hidden'
                  } font-semibold bg-desaturated-dark-cyan rounded-full px-2 pt-0.5 text-white`}
                >
                  NEW!
                </h3>
                <h3
                  className={`${
                    !featured && 'hidden'
                  } font-semibold bg-very-dark-grayish-cyan rounded-full pt-0.5 px-2 text-white`}
                >
                  FEATURED
                </h3>
              </div>
            </div>
            <h1 className="text-lg font-bold text-very-dark-grayish-cyan tracking-wider">
              {position}
            </h1>
            <p className="text-dark-grayish-cyan">
              {postedAt}
              <span className="mx-3">·</span>
              {contract}
              <span className="mx-3">·</span>
              {location}
            </p>
            <hr className="md:hidden w-full h-[1px] bg-dark-grayish-cyan" />
          </div>
        </div>
        <div className="flex gap-3 flex-wrap items-center md:text-sm">
          {[role, level, ...languages, ...tools].map(filter => (
            <button
              className="text-desaturated-dark-cyan font-semibold py-1 px-1.5 bg-light-grayish-cyan-bg rounded cursor-pointer"
              key={filter}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

JobListItem.propTypes = {
  job: PropTypes.object.isRequired,
  updatedSelectedFilters: PropTypes.func.isRequired,
};

export default JobListItem;
