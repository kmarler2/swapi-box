const fetchScrollData = async () => {
    try {
      const url = "https://swapi.co/api/films"
      const movie = await fetch(url);
      const response = await movie.json();
      const random = Math.floor(Math.random() * response.count);
      const crawl = response.results[random].opening_crawl;
      const filmTitle = response.results[random].title;
      const date = response.results[random].release_date;
      const filmData = {crawl, filmTitle, date};
      
      return filmData;
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
    const planetName = planet.name;
    const planetPopulation = planet.population;
    return ({planetName, planetPopulation});
  }

const fetchSpeciesData = async (person) => {
    const response = await fetch(person.species[0]);
    const species = await response.json();
    const speciesName = species.name;
    return speciesName;
  }

export {fetchPeopleData, fetchSpeciesData, fetchHomeWorldData, fetchScrollData}