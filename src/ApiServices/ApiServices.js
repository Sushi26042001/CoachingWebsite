import axios from "axios";

/**
 * Base API URL from .env
 * Example:
 * REACT_APP_API_BASE_URL=https://api.yourdomain.com
 */
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

/**
 * Axios instance
 */
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Request Interceptor (Optional: Token)
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Response Interceptor
 */
api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response || error)
);

/* ===========================
   COMMON API METHODS
   =========================== */

/**
 * GET API
 */
export const getApi = async (
  url,
  success,
  failure
) => {
  try {
    const response = await api.get(url);
    success && success(response.data);
    return response.data;
  } catch (error) {
    failure && failure(error);
    throw error;
  }
};

/**
 * POST API
 */
export const postApi = async (
  url,
  data,
  success,
  failure
) => {
  try {
    const response = await api.post(url, data);
    success && success(response.data);
    return response.data;
  } catch (error) {
    failure && failure(error);
    throw error;
  }
};

/**
 * PUT API
 */
export const putApi = async (
  url,
  data,
  success,
  failure
) => {
  try {
    const response = await api.put(url, data);
    success && success(response.data);
    return response.data;
  } catch (error) {
    failure && failure(error);
    throw error;
  }
};

/**
 * DELETE API
 */
export const deleteApi = async (
  url,
  success,
  failure
) => {
  try {
    const response = await api.delete(url);
    success && success(response.data);
    return response.data;
  } catch (error) {
    failure && failure(error);
    throw error;
  }
};

/* ===========================
   DOMAIN-SPECIFIC APIS
   (OPTIONAL – BEST PRACTICE)
   =========================== */

/**
 * USERS
 */
export const getUsersApi = (success, failure) =>
  getApi("/users", success, failure);

export const createUserApi = (data, success, failure) =>
  postApi("/users", data, success, failure);

export const updateUserApi = (id, data, success, failure) =>
  putApi(`/users/${id}`, data, success, failure);

export const deleteUserApi = (id, success, failure) =>
  deleteApi(`/users/${id}`, success, failure);
