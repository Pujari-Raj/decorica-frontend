import axios from "axios";

export const api =axios.create({
    baseURL: "http://localhost:8082",
    headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`
    }
});

const errorHandler = (error) => {
    const statusCode = error.response?.status;

    if(statusCode && statusCode === 401) {
        window.location.hash = '/unauthorized'
    }

    return Promise.reject(error);
}

//registering the custom error handler to the api axios instance
api.interceptors.response.use(undefined, (error) =>{
    return errorHandler(error)
});

export function getHeaders() {
    const token = sessionStorage.getItem("token")
    const cleanedToken = token.replace(/^"(.*)"$/, "$1");
    const headers ={
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cleanedToken}` 
    }
    return {headers};
}



