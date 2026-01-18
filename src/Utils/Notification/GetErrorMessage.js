// utils/errorHandler.js (or at top of same file)
export const GetErrorMessage = (error) => {
    if (error?.response?.data?.message) {
      return error.response.data.message;
    }
  
    if (error?.data?.message) {
      return error.data.message;
    }
  
    if (error?.message) {
      return error.message;
    }
  
    return "Something went wrong";
  };
  