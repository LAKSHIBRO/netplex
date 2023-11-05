import axios from "axios";

async function Tmdb_api_call(id, type) {
  try {
    const apiKey = import.meta.env.VITE_REACT_APP_TMDB_API_KEY;
    const tmdbBaseUrl = "https://api.themoviedb.org/3";
    const tmdbUrl = `${tmdbBaseUrl}/${type}/${id}?api_key=${apiKey}&language=en-US`;
    const response = await axios.get(tmdbUrl);
    const data = response.data;

    return data;
  } catch (error) {
    console.log("Tmdb data fetch error", error);
  }
}

export default Tmdb_api_call;
