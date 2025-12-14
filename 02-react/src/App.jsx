import { useState } from "react";

function Header() {
  return (
    <header>
      <h1>
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        DevJobs
      </h1>

      <nav>
        <a href="empleos.html">Empleos</a>
      </nav>

      <div>
        <a href="">Publicar un empleo</a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <small>&copy; 2025 DevJobs. Todos los derechos reservados.</small>
    </footer>
  );
}

function Pagination() {
  return (
    <nav className="pagination">
      <a href="#">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 6l-6 6l6 6" />
        </svg>
      </a>
      <a className="is-active" href="#">
        1
      </a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </a>
    </nav>
  );
}

function SearchFormSection() {
  return (
    <section>
      <img src="./background.webp" width="200" />

      <h1>Encuentra el trabajo de tus sueños</h1>

      <p>
        Únete a la comunidad más grande de desarrolladores y encuentra tu
        próxima oportunidad.
      </p>

      <form role="search">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>

          <input
            required
            type="text"
            placeholder="Buscar empleos por título, habilidad o empresa"
          />

          <button disabled type="submit">
            Buscar
          </button>
        </div>
      </form>
    </section>
  );
}

function JobListings() {
  return (
    <>
      <h2>Resultados de busquedas</h2>
      <div className="jobs-listings"></div>
    </>
  );
}

function App() {
  return (
    <>
      <Header />

      <main>
        <SearchFormSection />

        <section>
          <JobListings />
          <Pagination />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
