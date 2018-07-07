const fetchScroll = async () => {
    try {
      const url = "https://swapi.co/api/films"
      const filmData = await fetch(url);
      const response = await filmData.json();
      const count = response.count;
      const random = Math.floor(Math.random() * count);
      const crawl = response.results[random].opening_crawl;
      const filmTitle = response.results[random].title;
      const date = response.results[random].release_date;
      const Info = {crawl, filmTitle, date};
      return Info;
    } catch(error) {
      return error.message;
    }
  }

export {fetchScroll}