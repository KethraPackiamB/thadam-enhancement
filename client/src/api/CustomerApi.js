import axios from "axios";
const BACKEND_LIVE_BASE_URL= import.meta.env.BACKEND_LIVE_BASE_URL;
 
const API_URL = `https://thadam-bsba.onrender.com/api/customers`;
 
const getAuthConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getCustomerById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`, getAuthConfig());
  return res.data.data[0];
};

export const getCustomers = async () => {
  const res = await axios.get(API_URL, getAuthConfig());
  return res.data.data;
};
 
export const addCustomer = async (data) => {
  const res = await axios.post(API_URL, data, getAuthConfig());
  return res.data;
};
 
export const updateCustomer = async ({ id, data }) => {
  const res = await axios.put(`${API_URL}/${id}`, data, getAuthConfig());
  return res.data;
};
 
export const deleteCustomer = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`, getAuthConfig());
  return res.data;
};
 