import axios from "axios";
import { handleClick } from "../components/Toastcontainer";


async function login(usernameOrEmail, password) {

  await axios.post("http://localhost:8082/api/auth/login", { usernameOrEmail, password })
    .then(response => {
      if (response.status === 200) {
        console.log(response.data)
        sessionStorage.setItem("token", JSON.stringify(response.data.token));
        sessionStorage.setItem("uname", JSON.stringify(response.data.userName));
        sessionStorage.setItem("role", JSON.stringify(response.data.roleName));
        sessionStorage.setItem("userId", JSON.stringify(response.data.userId));
  
        let path = window.location.pathname;
        let redirect = path.includes("seller") ? "/seller-dashboard" : path.includes("admin") ? "/admin-dashboard" : "/";
        handleClick("success", "Logged In Successfully");
        setTimeout(() => {
          window.location.href = redirect;        
        }, 500);
      }
      else if (response.status === 401) {
        console.log(response);
      }

    })
    .catch(error => {
      // Handle any errors
      console.log(error);
      console.log(error.response.data.details[0]);
      handleClick("error",error.response.data.details[0]);
    })
}

// logout() {
//   localStorage.removeItem("user");
// }

//register

async function register(username, email, password, path, redirect) {
  let roleId = path.includes("seller") ? 2 : path.includes("admin") ? 1 : 3
  let role = path.includes("seller") ? "Seller" : path.includes("admin") ? "Admin" : "Customer"
  const userData = {
    "email": email,
    "userName": username,
    "password": password,
    "roleDto": {
      "roleId": roleId,
      "roleName": role
    }
  }

  return await axios.post("http://localhost:8082/api/auth/signup", userData, {
    headers: {
      'Content-Type': 'application/json',
      // Other headers if needed
    },
  })
    .then(response => {
      //TODO: add logic to display toast message on successful login 
      //if the page reloads and msg is not visible then we can add setTimeout to path change till then toast msg will display nad redirect to login page
       console.log(response)
      handleClick("success", 'Registration Successfully Completed');
      setTimeout(() => {
        window.location.href = redirect;        
      }, 500);
    })
    .catch(error => {
      // Handle any errors
      //console.log(error);
      console.log(error.response.data);
      handleClick("error", error.response.data);
    })
}

export { login, register };