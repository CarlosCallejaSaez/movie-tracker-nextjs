import axios from 'axios';

const OMDB_API_KEY = "b0e929df";
const OMDB_API_URL = 'http://www.omdbapi.com/';

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(OMDB_API_URL, {
      params: {
        apikey: OMDB_API_KEY,
        s: query,
      },
    });

    
    if (response.data.Response === 'True') {
      return response.data.Search || [];
    } else {
      console.error('OMDB API error:', response.data.Error);
      return [];
    }
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
