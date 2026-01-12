import { JobCard } from "./JobCard";

export function JobListings({ jobs }) {
  return (
    <>
      <h2>Resultados de busquedas</h2>
      <div className="jobs-listings"></div>

      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </>
  );
}
