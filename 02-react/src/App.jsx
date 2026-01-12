import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Pagination from "./components/Pagination.jsx";
import SearchFormSection from "./components/SearchFormSection.jsx";
import { JobListings } from "./components/JobListings.jsx";
import jobsDta from "./data.json";

const RESULT_PER_PAGE = 5;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(jobsDta.length / RESULT_PER_PAGE);

  const pageResults = jobsDta.slice(
    (currentPage - 1) * RESULT_PER_PAGE,
    currentPage * RESULT_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Header />

      <main>
        <SearchFormSection />

        <section>
          <JobListings jobs={pageResults} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
