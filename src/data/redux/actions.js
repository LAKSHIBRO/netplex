import * as actionTypes from '../redux/actionTypes';
import fetchGoogleSheetData from "../api/Google_sheet_api_call";
import fetchTmdbData from "../api/Tmdb_api_call";


export const fetchCarouselData = () => {
  return async (dispatch) => {
    try {
      const api1Data = await fetchGoogleSheetData({
        limit: 5,
        columns: "B-C",
      });

      const api2Data = await Promise.all(
        api1Data.map(async (item) => {
          const data = await fetchTmdbData(item.B, item.C);
          return {
            name: data.title || data.original_name,
            backdrop: `https://image.tmdb.org/t/p/w780/${data.backdrop_path}`,
            date: data.release_date || data.first_air_date,
            tags: data.genres.map((genre) => genre.name),
          };
        })
      );

      dispatch(setCarouselData(api2Data)); 
    } catch (error) {
      console.error("Data from API Error: ", error);
    }
  };
};

export const setCarouselData = (data) => ({
  type: actionTypes.SET_CAROUSEL_DATA,
  data,
});