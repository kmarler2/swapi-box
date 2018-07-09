const fetchScrollData = async () => {
    try {
      const url = "https://swapi.co/api/films"
      const movie = await fetch(url);
      const response = await movie.json();
      const randomIndex = Math.floor(Math.random() * response.count);
      const obj = response.results;
      const crawl = obj[randomIndex].opening_crawl;
      const filmTitle = obj[randomIndex].title;
      const date = obj[randomIndex].release_date;
      return {crawl, filmTitle, date};
    } catch(error) {
      return error.message;
    }
  }

const fetchPeopleData = async () => {
    try {  
      const url = 'https://swapi.co/api/people';
      const response = await fetch(url);
      const peopleObj = await response.json();
      const peopleArr = peopleObj.results.map(async (person) => {
        const name = person.name;
        const { planetName, population } = await fetchHomeWorldData(person);
        const species = await fetchSpeciesData(person);
        const personInfo = {name, planetName, population, species};
        return personInfo;
      })
      return Promise.all(peopleArr);
    } catch(error) {
      return error.message
    }
  }

  const fetchVehiclesData = async () => {
    try {  
      const url = 'https://swapi.co/api/vehicles/';
      const response = await fetch(url);
      const vehiclesObj = await response.json();
      const vehicleArr = vehiclesObj.results.map(async (vehicle) => {
      const {name, model, vehicle_class, passengers} = await vehicle;
        return ({
          name,
          model,
          vehicle_class,
          passengers
        })
      })
      return Promise.all(vehicleArr);
    } catch(error) {
      return error.message
    }
  }

const fetchPlanetsData = async () => {
    try {
      const url = 'https://swapi.co/api/planets/';
      const response = await fetch(url);
      const planet = await response.json();
      const planetArr = planet.results.map(async (planet) => {
      const {name, population, climate, residents} = await planet;
      return({
        name, 
        population,
        climate,
        residents
      })
    })
      return Promise.all(planetArr)
    } catch(error) {
      return error.message;
    }
  }

const fetchHomeWorldData = async (person) => {
    const response = await fetch(person.homeworld);
    const planet = await response.json();
    const planetName = planet.name;
    const population = planet.population;
    return {planetName, population};
  }

const fetchSpeciesData = async (person) => {
    const response = await fetch(person.species[0]);
    const species = await response.json();
    const speciesName = species.name;
    return speciesName;
  }

const helper = {fetchPeopleData, fetchSpeciesData, fetchHomeWorldData, fetchScrollData, fetchVehiclesData, fetchPlanetsData}

export default helper;