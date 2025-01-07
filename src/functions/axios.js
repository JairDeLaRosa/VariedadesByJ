import axios from 'axios';


const BASE_URL = 'https://apirest-variedadesbyj.onrender.com'; 


export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
};


export const postData = async (endpoint, data) => {
  try {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};


export const deleteData = async (endpoint) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};