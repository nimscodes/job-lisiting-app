import JobListItem from './JobListItem';
import PropTypes from 'prop-types'

const JobList = ({ data, updatedSelectedFilters, selectedFilters }) => {
  
  const filteredJobs = data.filter((job) => {
    return selectedFilters.every(filter => (
      filter === job.role ||
      filter === job.level ||
      job.languages.includes(filter) ||
      job.tools.includes(filter)
    ));
  });

  const jobsToRender = selectedFilters.length > 0 ? filteredJobs : data;


  const renderedJobList = jobsToRender.map((job) => {
    return (
      <JobListItem
        key={job.id}
        job={job}
        updatedSelectedFilters={updatedSelectedFilters}
      />
    );
  });
  return <div className="flex flex-col gap-4  mt-8">{renderedJobList}</div>;
};

JobList.propTypes = {
  data: PropTypes.array.isRequired,
  updatedSelectedFilters: PropTypes.func.isRequired,
  selectedFilters: PropTypes.array.isRequired,
}

export default JobList;
