import JobListItem from "./JobListItem"


const JobList = ({ data }) => {

  const renderedJobList = data.map(job => {
    return <JobListItem  key={job.id} job={job} />
  })
  return (
    <div className="flex flex-col gap-4">
      {renderedJobList}
    </div>
  )
}

export default JobList