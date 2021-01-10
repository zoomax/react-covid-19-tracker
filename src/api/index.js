import axios from "axios";

const url = "https://covid19.mathdro.id/api";

const fetchData = async (country ) => {
  let customUrl  = url  ;
  if(country && country !== "Global") { 
    customUrl = `${url}/countries/${country}`
  }
  try {
    const {
      data: { recovered, deaths, confirmed, lastUpdate },
    } = await axios.get(customUrl);
    return {
      recovered,
      confirmed,
      deaths,
      lastUpdate,
    };
  } catch (error) {}
};

const fetchDailyData = async function () {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => {
      return {
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
      };
    });
    return modifiedData;
  } catch (error) {}
};

const fetchCountries = async function () {
  try {
    const {data} = await axios.get(`${url}/countries`);
    console.log(data.countries);
    return data.countries.map((country) => country.name);
  } catch (err) {}
};
export { fetchData, fetchDailyData, fetchCountries };
