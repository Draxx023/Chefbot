import axios from 'axios';

// const baseURL = "http://localhost:4000/api";
const baseURL = "https://chefbot-api.onrender.com/api/"
// const baseURL = process.env.REACT_APP_API_URL;

// register request
const register = (newUser) => {
    // POST request on http://localhost:4000/api/register
    return axios.post(`${baseURL}/register`, newUser)
        .then(response => {
            if (response) {
                return Promise.resolve(response);
            }
        })
        .catch(error => {
            return Promise.reject(error.response);
        });
}

// login request
const login = (userCredentials) => {
    return axios.post(`${baseURL}/login`, userCredentials)
        .then(response => {
            if (response.data.token) {
                localStorage.setItem("x-access-token", response.data.token);
                localStorage.setItem("username", response.data.username)
            }
            return Promise.resolve(response.data);
        })
        .catch(error => {
            return Promise.reject(error.response.data);
        })
}

// logout service
const logout = () => {
    localStorage.removeItem('x-access-token')
    return { msg: "Logout Successfully...!" }
}

export {
    register,
    login,
    logout
}