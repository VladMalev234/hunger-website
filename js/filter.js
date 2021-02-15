const showAllTab = document.querySelector('.show-all')
const carTab = document.querySelector('.car')
const movieTab =  document.querySelector('.movie')
const colorTab = document.querySelector('.color')

const allFilteredDivs = document.querySelectorAll('.filtered-div')

// Turns node list into an array для создания массива 
const allFilteredDivsArray = Array.from(allFilteredDivs)


showAllTab.addEventListener('click', showAll)
function showAll() {
  allFilteredDivsArray.forEach(div => {
    div.classList.remove('remove')
    div.classList.add('show')
  })
}

carTab.addEventListener('click', showCars)
function showCars() {
  allFilteredDivsArray.forEach(div => {
    div.classList.remove('remove')

    if (!div.dataset.car) {
      div.classList.add('remove')
    }

  })
}

movieTab.addEventListener('click', showMovies)
function showMovies() {
  allFilteredDivsArray.forEach(div => {
    div.classList.remove('remove')

    if (!div.dataset.movie) {
      div.classList.add('remove')
    }
  })
}

colorTab.addEventListener('click', showColors)
function showColors() {
  allFilteredDivsArray.forEach(div => {
    div.classList.remove('remove')
    
    if (!div.dataset.color) {
      div.classList.add('remove')
    }

  })
}