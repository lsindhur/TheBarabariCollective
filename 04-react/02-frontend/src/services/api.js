//This file exports reusable API functions that your frontend can call:

const baseURL = 'https://citisolve-smarter-complaint-resolution.onrender.com/api'

const getToken = () => {
    const token = localStorage.getItem("token");
    console.log('Token in local storage :', `${token? "exists" : "does not exist"}`);
    return token;
}


const callAPI = async (endpoint,options) => {

    //creating a copy of options object
    const config = {
        ...options,    
        headers : {
            ...options.headers
        }
    }

     const token = getToken();
     
     if(token) {
        config.headers.authorization = `Bearer ${token}`
    } 

    try {
        const response = await fetch(`${baseURL}${endpoint}`,config)

        if(!response.ok) {
            const errorData = await response.json().catch(() => {})
            //console.log(errorData.message)
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }
        //console.log(response);
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

  login: (loginData) => {
    return callAPI("/auth/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};


export const ComplaintAPI = {
    createComplaint : (complaintData) => {
        return callAPI('/complaints', {
            method: "POST",
            body: complaintData,
        })
    }
}

