import axios from "axios";
const APP_SCRIPT_URL = import.meta.env.VITE_REACT_APP_APP_SCRIPT_URL;
const GOOGLESHEET_ID = import.meta.env.VITE_REACT_APP_MAIN_GOOGLESHEET_ID;

async function Google_sheet_api_call(obg) {
  const {
    sheetid = GOOGLESHEET_ID,
    offset = "1",
    limit = 10,
    columns = "A-B-C-D",
    row = "",
    search = "",
  } = obg;

  const url = `${APP_SCRIPT_URL}?sheetid=${sheetid}&offset=${offset}&limit=${limit}&columns=${columns}&row=${row}&search=${search}`;
  try {
    const response = await axios.get(url);
    const Data = response.data;

    return Data;
  } catch (error) {
    console.log("Google sheet data fetch error", error.config.url);
  }
}

export default Google_sheet_api_call;
