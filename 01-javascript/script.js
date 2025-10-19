// recupera solo el primer boton que encuentre
// const boton = document.querySelector('.button-apply-job')
// console.log(boton) // null si no lo encuentra

// if (boton !== null) {
//   boton.addEventListener('click', function() {
//     boton.textContent = '¡Aplicado!'
//     boton.classList.add('is-applied')
//     boton.disabled = true
//   })
// }

// const botones = document.querySelectorAll('.button-apply-job')
// // devuelve un NodeList (array-like) con todos los botones que encuentre
// // o una lista vacia [] si no encuentra ninguno

// botones.forEach(boton => {
//   boton.addEventListener('click', function() {
//     boton.textContent = '¡Aplicado!'
//     boton.classList.add('is-applied')
//     boton.disabled = true
//   })
// })

// formas de escuchar eventos en inputs

// const searchInput = document.querySelector("#empleos-search-input");

// searchInput.addEventListener('input', function () {
//   console.log(searchInput.value);
  
// })

// searchInput.addEventListener('blur', function () {
//   console.log("no esta activo el input");
  
// })

// const searchForm = document.querySelector("#empleos-search-form");

// searchForm.addEventListener('submit', function (event) {
//   event.preventDefault()
// })

// document.addEventListener("keydown", function (event) {
//   console.log(`Tecla presionada: ${event.key}`);
//   console.log("esta pulsando una tecla shitf", event.shiftKey);
//   console.log("esta pulsando una tecla ctrl", event.ctrlKey);
//   console.log("esta pulsando una tecla alt", event.altKey);
  
  
  
// });

const jobsListingSection = document.querySelector('.jobs-listings')

jobsListingSection.addEventListener('click', function(event) {
  const element = event.target

  if (element.classList.contains('button-apply-job')) {
    element.textContent = '¡Aplicado!'
    element.classList.add('is-applied')
    element.disabled = true
  }
})





const filter = document.querySelector('#filter-location')
const mensaje = document.querySelector('#filter-selected-value')


filter.addEventListener('change', function () {
  const jobs = document.querySelectorAll('.job-listing-card')
  const selectedValue = filter.value
  if(selectedValue) {
    mensaje.textContent = `Has seleccionado: ${selectedValue}`
} else{
  mensaje.textContent = ''
}

jobs.forEach(job =>{
  //const modalidad = job.dataset.modalidad
  const modalidad = job.getAttribute('data-modalidad')
  const isShown = selectedValue === "" || selectedValue === modalidad;
  job.classList.toggle('is-hidden', !isShown);

  // if (selectedValue === "" || selectedValue === modalidad){
  //   job.classList.remove('is-hidden')
  // } else {
  //   job.classList.add('is-hidden')
  // }
})
})









const container = document.querySelector('.jobs-listings')

fetch("./data.json")
  .then((response) => {
    return response.json()
  })
  .then((jobs) => {
    jobs.forEach((job) => {
      const article = document.createElement("article")
      article.classList.add("job-listing-card");

      article.dataset.modalidad = job.data.modalidad;
      article.dataset.nivel = job.data.nivel;
      article.dataset.tecnologia = job.data.tecnologia;
      article.innerHTML = `
      <div>
        <h3>${job.titulo}</h3>
        <small>${job.empresa} - ${job.ubicacion}</small>
        <p>${job.descripcion}</p>
      </div>
        <button class="button-apply-job">Aplicar</button>
        `
      container.appendChild(article)
    })
})