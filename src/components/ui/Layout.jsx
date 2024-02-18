import Navbar from "./Navbar";
import Footer from "./Footer";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Navbar></Navbar>
      </div>
      <main>{children}</main>

      <Footer></Footer>
    </div>
  );
}

export default Layout;
