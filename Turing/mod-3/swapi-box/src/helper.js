const fetchScrollData = async () => {
    try {
      const url = "https://swapi.co/api/films"
      const movie = await fetch(url);
      const response = await movie.json();
      const random = Math.floor(Math.random() * response.count);
      const obj = response.results;
      const crawl = obj[random].opening_crawl;
      const filmTitle = obj[random].title;
      const date = obj[random].release_date;
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
      const peopleArr = peopleObj.results.map(async(person) => {
        const name = person.name;
        const { planetName, population } = await fetchHomeWorldData(person);
        const species = await fetchSpeciesData(person);
        const personInfo = {name, planetName, population, species}
        return personInfo;
      })
      return Promise.all(peopleArr);
    } catch(error) {
      return error.message
    }
  }

const fetchHomeWorldData = async (person) => {
    const response = await fetch(person.homeworld);
    const planet = await response.json();
    console.log(planet)
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

const helper = {fetchPeopleData, fetchSpeciesData, fetchHomeWorldData, fetchScrollData}

export default helper;