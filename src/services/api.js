import axios from 'axios';

const API_URL = 'http://localhost:5000/agreements';

export const fetchAgreements = async () => axios.get(API_URL);
export const fetchAgreement = async (id) => axios.get(`${API_URL}/${id}`);
export const createAgreement = async (data) => axios.post('http://localhost:5000/agreements', data);
export const updateAgreement = async (id, data) => axios.put(`${API_URL}/${id}`, data);
