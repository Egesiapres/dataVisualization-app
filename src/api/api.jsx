import axios from 'axios';

export const baseUrl = 'https://pokeapi.co/api/v2/';

const request = async (url, options) => {
  try {
    let response = await axios.get(url, options);

    return response;
  } catch (error) {
    console.log(error);
  }
};

// HTTP methods
export const get = endpoint =>
  request(`${baseUrl}${endpoint}`, { method: 'GET' });

// main fetch f
export const fetchData = async (api, params) => {
  try {
    // TODO: study
    const response = await api.apply(null, params);

    const data = await response.json();

    return data[0] || data;
  } catch (error) {
    console.error(error);
  }
};
