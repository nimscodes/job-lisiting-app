import photosnap from '/images/photosnap.svg';

const JobListItem = ({ job }) => {
  return (
    <div className={`md:w-full lg:w-5/6 w-[340px] mx-auto relative bg-white p-5 rounded-md shadow-xl border-l-4 border-desaturated-dark-cyan ${!job.featured && 'border-none' } mb-6 md:mb-0`}>
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex flex-col md:flex-row gap-3">
          <span className="absolute md:static -top-6 flex items-center w-12 md:w-20">
            <img src={job.logo} alt="logo" />
          </span>
          <div className="flex flex-col gap-2.5 md:gap-1 mt-4 md:mt-0">
            <div className="flex items-center gap-5">
              <h2 className="font-semibold text-desaturated-dark-cyan md:text-sm">
                {job.company}
              </h2>
              <div className="flex gap-3 text-sm md:text-xs">
                <span className={`${!job.new && 'hidden'} font-semibold bg-desaturated-dark-cyan rounded-full px-2 pt-0.5 text-white`}>
                  NEW!
                </span>
                <span className={`${!job.featured && 'hidden'} font-semibold bg-very-dark-grayish-cyan rounded-full pt-0.5 px-2 text-white`}>
                  FEATURED
                </span>
              </div>
            </div>
            <h1 className="text-lg font-bold text-very-dark-grayish-cyan tracking-wider">
              {job.position}
            </h1>
            <span className="text-dark-grayish-cyan">
              {job.postedAt}<span className="mx-3">·</span>{job.contract}
              <span className="mx-3">·</span>{job.location}
            </span>
            <span className="md:hidden w-full h-[1px] bg-dark-grayish-cyan"></span>
          </div>
        </div>
        <div className="flex gap-3 flex-wrap items-center md:text-sm">
          <span className="text-desaturated-dark-cyan font-semibold py-1 px-1.5 bg-light-grayish-cyan-bg rounded">
            {job.role}
          </span>
          <span className="text-desaturated-dark-cyan font-semibold py-1 px-1.5 bg-light-grayish-cyan-bg rounded">
            {job.level}
          </span>
          { job.languages.map((language, index) => (<span key={index} className="text-desaturated-dark-cyan font-semibold py-1 px-1.5 bg-light-grayish-cyan-bg rounded">
            {language}
          </span>)) }
          { job.tools.map((tool, index) => (<span key={index} className="text-desaturated-dark-cyan font-semibold py-1 px-1.5 bg-light-grayish-cyan-bg rounded">
            {tool}
          </span>)) } 
        </div>
      </div>
    </div>
  );
};

export default JobListItem;
