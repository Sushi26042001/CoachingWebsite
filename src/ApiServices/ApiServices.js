import axios from "axios";

/**
 * Base API URL from .env
 * Example:
 * REACT_APP_API_BASE_URL=http://localhost:8080
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

/* =====================================================
   REQUEST INTERCEPTOR
   ===================================================== */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    // 🔒 STRICT LOGIN CHECK (NO TOKEN FOR LOGIN)
    const isLoginRequest =
      config.url === "/api/v1/auth/login" ||
      config.url?.endsWith("/api/v1/auth/login");

    if (token && !isLoginRequest) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* =====================================================
   RESPONSE INTERCEPTOR
   ===================================================== */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("401 Unauthorized – clearing token");
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

/* =====================================================
   COMMON API METHODS
   ===================================================== */

/**
 * GET API
 */
export const getApi = async (url, success, failure) => {
  try {
    const response = await api.get(url);
    success?.(response.data);
    return response.data;
  } catch (error) {
    failure?.(error);
    throw error;
  }
};

/**
 * POST API
 */
export const postApi = (url, data, success, failure) => {
  const isFormData = data instanceof FormData;

  api
    .post(url, data, {
      headers: isFormData
        ? { "Content-Type": "multipart/form-data" }
        : { "Content-Type": "application/json" },
    })
    .then((res) => {
      success?.(res.data);
      return res.data;
    })
    .catch((error) => {
      failure?.(error);   // ✅ handled
      return null;        // ✅ promise resolved, NOT rejected
    });
};


/**
 * PUT API
 */
export const putApi = async (url, data, success, failure) => {
  try {
    const response = await api.put(url, data);
    success?.(response.data);
    return response.data;
  } catch (error) {
    failure?.(error);
    throw error;
  }
};

/**
 * DELETE API
 */
export const deleteApi = async (url, success, failure) => {
  try {
    const response = await api.delete(url);
    success?.(response.data);
    return response.data;
  } catch (error) {
    failure?.(error);
    throw error;
  }
};

/* =====================================================
   DOMAIN-SPECIFIC APIs
   ===================================================== */

/**
 * USERS
 */
export const getUsersApi = (success, failure) =>
  getApi("/users", success, failure);

export const updateUserApi = (id, data, success, failure) =>
  putApi(`/users/${id}`, data, success, failure);

export const deleteUserApi = (id, success, failure) =>
  deleteApi(`/users/${id}`, success, failure);

/**
 * AUTH
 */
export const LoginApi = (data, success, failure) => postApi("/api/v1/auth/login", data, success, failure);
export const BannerSettings = (data, success, failure) => postApi("/api/v1/banner", data, success, failure);
export const BannerSettingsData = ( success, failure) => getApi("/api/v1/banner",  success, failure);
export const CourseSettings = (data, success, failure) => postApi("/api/v1/course", data, success, failure);
export const CourseSettingsData = ( success, failure) => getApi("/api/v1/course", success, failure);
export const TopperSettings = (data, success, failure) => postApi("/api/v1/toppers", data, success, failure);
export const TopperSettingsData = ( success, failure) => getApi("/api/v1/toppers", success, failure);
export const LocationsSettings = (data, success, failure) => postApi("/api/v1/location", data, success, failure);
export const LocationsSettingsData = ( success, failure) => getApi("/api/v1/location", success, failure);
export const FAQSettings = (data, success, failure) => postApi("/api/v1/faqs", data, success, failure);
export const FAQSettingsDatashow = ( success, failure) => getApi("/api/v1/faqs", success, failure);
export const ContactSettings = (data, success, failure) => postApi("/api/v1/contactInfo", data, success, failure);
export const ContactSettingsData = ( success, failure) => getApi("/api/v1/contactInfo", success, failure);
export const QuizSettingsApi = (data, success, failure) => postApi("/api/v1/quiz", data, success, failure);
export const PDFSettingsApi = (data, success, failure) => postApi("/api/v1/notes", data, success, failure);
export const ArticlesSettingsApi = (data, success, failure) => postApi("/api/v1/articles", data, success, failure);




