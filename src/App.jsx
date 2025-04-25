import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import { MERGED_ROUTES, ROUTES_ARR } from "./utils/constants/globalConstants";
import { Suspense } from "react";


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Layout /> */}
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {MERGED_ROUTES.map((item, index) =>(
                // item?.component ? (
                //   <Route
                //     key={index}
                //     path={item.path}
                //     element={<item.component />}
                //     exact
                //   />
                // ) : null
                <Route
                key={index}
                path={item.path}
                element={<item.component />}
                exact
              />
              ))}
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
