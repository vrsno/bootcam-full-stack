import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Pagination from "./components/Pagination.jsx";
import SearchFormSection from "./components/SearchFormSection.jsx";
import { JobListings } from "./components/JobListings.jsx";

function App() {
  const handlePageChange = (page) => {
    console.log("Cambiando a la página:", page);
  };
  return (
    <>
      <Header />

      <main>
        <SearchFormSection />

        <section>
          <JobListings />
          <Pagination
            currentPage={1}
            totalPages={10}
            onPageChange={handlePageChange}
          />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
