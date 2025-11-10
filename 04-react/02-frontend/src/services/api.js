//This file exports reusable API functions that your frontend can call:

const baseURL = 'https://citisolve-smarter-complaint-resolution.onrender.com/api'

const callAPI = async (endpoint,options) => {

    try {
        const response = await fetch(`${baseURL}${endpoint}`,options)

        console.log(response.status, response.ok);

        if(!response.ok) {
            const errorData = await response.json().catch(() => {})
            console.log(errorData.message)
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }
        console.log(response);
        return await response.json();
    } catch (error) {
        throw new Error(error.message || 'Network error occurred');
    }
    
}

//register = https://citisolve-smarter-complaint-resolution.onrender.com/api/auth/register
//login = https://citisolve-smarter-complaint-resolution.onrender.com/api/auth/login

export const authAPI = {
  register: (userData) => {
    return callAPI("/auth/register", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

};