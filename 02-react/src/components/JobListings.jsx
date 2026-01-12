import jobsDta from "../data.json";
import { JobCard } from "./JobCard";

export function JobListings() {
  return (
    <>
      <h2>Resultados de busquedas</h2>
      <div className="jobs-listings"></div>

      {jobsDta.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </>
  );
}
