import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Authentication from "./Authentication.jsx";
import "react-toastify/dist/ReactToastify.css";
import { Toastcontainer } from "./components/Toastcontainer";


const App = () => {

  return (
    <BrowserRouter>
      {/* <Security {...oktaConfig}> */}
       <Authentication></Authentication>
       <Toastcontainer/>
      {/* </Security> */}
    </BrowserRouter>
  );
};

export default App;
