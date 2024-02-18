import { Auth0Provider } from "@auth0/auth0-react";
import { useAdminRoutes, usePublicRoutes } from "./helper/PublicRoute";
import Layout from "./components/ui/Layout";
import Layout2 from "./components/ui/seller/Layout2";
import { Routes, Route } from "react-router-dom";
import { ROUTES_ARR } from "./constants/routes.constants";
import SuspenseWrapper from "./lib/utils/routing/SuspenseWrapper";
import NotFound from "./pages/NotFound";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/cart";
import SellerDashboard from "./pages/seller/SellerDashboard";
import AddProduct from "./pages/seller/AddProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Plantdecor from "./pages/categories/Plantdecor";
import Artsframes from "./pages/categories/Artsframes";
import Adminlayout from "./components/ui/admin/Adminlayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProductsList from "./pages/admin/ProductsList";
import SellersList from "./pages/admin/SellersList";
import CustomersList from "./pages/admin/CustomersList";
import OrdersList from "./pages/admin/OrdersList";
import AddUserForm from "./pages/admin/AddUserForm";
import ViewUser from "./pages/admin/ViewUser";
import Profile from "./pages/seller/Profile";
import UserProfile from './pages/Profile';
import ProductCard from "./pages/ProductCard";
import Interiorlights from "./pages/categories/Interiorlights";
import Mirrors from "./pages/categories/Mirrors";
import Showpieces from "./pages/categories/Showpieces";
import Checkout from "./pages/Checkout";

const Authentication = () => {
  const domain = "dev-72e1ark1yfj8hz53.us.auth0.com";
  const clientId = "aOghGIpqsYAVtv3HzCXATZXXDBgWMJGn";
  //const audience = 'YOUR_AUTH0_API_IDENTIFIER';
  const redirectUri = window.location.origin;
  const isPublicRoute = usePublicRoutes();
  const isAdminRoute = useAdminRoutes();

  return (
    <Auth0Provider
          domain={domain}
          clientId={clientId}
          redirectUri={redirectUri}
        //  audience={audience}
        >
      {/* If User is !(seller& admin) , routes for user */}
      {!isPublicRoute && !isAdminRoute ? (
         <> {window.location.pathname.includes("/login") ||
          window.location.pathname.includes("/Register") ? (
            <Routes>
              <Route path="/login" exact element={<Login />} />
              <Route path="/Register" exact element={<Register />} />
            </Routes>
          ) : (
            <Layout>
              <Routes>
                {ROUTES_ARR.map((item, idx) => (
                  <Route
                    key={idx}
                    path={item.path}
                    element={
                      <SuspenseWrapper>
                        <item.component />
                      </SuspenseWrapper>
                    }
                  />
                ))}
                <Route element={NotFound} />
                <Route path="/profile" exact element={<UserProfile />} />
                <Route path="/wishlist" exact element={<Wishlist />} />
                <Route path="/cart" exact element={<Cart />} />
                <Route path="/singleproduct/:productid" element={<ProductCard />} />
                {/* Categories Routing */}
                <Route path="/shop/plant-decor" exact element={<Plantdecor />}/>
                <Route path="/shop/arts-frame" exact element={<Artsframes />} />
                <Route path="/shop/interior-lights" exact element={<Interiorlights/>} />
                <Route path="/shop/mirrors" exact element={<Mirrors/>} />
                <Route path="/shop/showpieces" exact element={<Showpieces/>} />
                {/* <Route path="/profile" exact element={<UserProfile/>} /> */}
                <Route path="/ordercheckout/:totalprice" exact element={<Checkout/>} />
              </Routes>
            </Layout>
          )}
        </>
      ) : isAdminRoute ? 
        (window.location.pathname.includes("/admin-dashboard/login") ||
          window.location.pathname.includes("/admin-dashboard/Register")) ? (
        <Routes>
          <Route
            path="/admin-dashboard/login"
            exact
            element={
              <SuspenseWrapper>
                <Login />
              </SuspenseWrapper>
            }
          />
          <Route
            path="/admin-dashboard/Register"
            exact
            element={
              <SuspenseWrapper>
                <Register />
              </SuspenseWrapper>
            }
          />
        </Routes>
      ) : (
        <Adminlayout>
          <Routes>
            <Route
              path="/admin-dashboard"
              exact
              element={
                <SuspenseWrapper>
                  <AdminDashboard />
                </SuspenseWrapper>
              }
            />
            <Route
              path="/admin-dashboard/sellers"
              element={
                <SuspenseWrapper>
                  <SellersList />
                </SuspenseWrapper>
              }
            />
            <Route
              path="/admin-dashboard/customers"
              element={
                <SuspenseWrapper>
                  <CustomersList />
                </SuspenseWrapper>
              }
            />
            <Route
              path="/admin-dashboard/products"
              exact
              element={
                <SuspenseWrapper>
                  <ProductsList />
                </SuspenseWrapper>
              }
            />
            <Route
              path="/admin-dashboard/orders"
              exact
              element={
                <SuspenseWrapper>
                  <OrdersList />
                </SuspenseWrapper>
              }
            />
            <Route
              path="/admin-dashboard/adduser"
              exact
              element={<AddUserForm />}
            />
            <Route
              path="/admin-dashboard/viewuser/:userId"
              exact
              element={<ViewUser />}
            />
          </Routes>
        </Adminlayout>
      )
      : (
      <>
        {window.location.pathname.includes("/seller-dashboard/login") ||
        window.location.pathname.includes("/seller-dashboard/Register") ? (
          <Routes>
            <Route
              path="/seller-dashboard/login"
              exact
              element={
                <SuspenseWrapper>
                  <Login />
                </SuspenseWrapper>
              }
            />
            <Route
              path="/seller-dashboard/Register"
              exact
              element={
                <SuspenseWrapper>
                  <Register />
                </SuspenseWrapper>
              }
            />
          </Routes>
        ) : (
          <Layout2>
            <Routes>
              <Route
                path="/seller-dashboard"
                exact
                element={
                  <SuspenseWrapper>
                    <SellerDashboard />
                  </SuspenseWrapper>
                }
              />
              <Route
                path="/seller-dashboard/shop"
                element={
                  <SuspenseWrapper>
                    <ProductsList />
                  </SuspenseWrapper>
                }
              />
              <Route
                path="/seller-dashboard/add-product"
                element={
                  <SuspenseWrapper>
                    <AddProduct />
                  </SuspenseWrapper>
                }
              />
              <Route
                path="/seller-dashboard/profile"
                exact
                element={
                  <SuspenseWrapper>
                    <Profile />
                  </SuspenseWrapper>
                }
              />
            </Routes>
          </Layout2>
        )}
      </>
      )}
    </Auth0Provider>
  );
};

export default Authentication;
