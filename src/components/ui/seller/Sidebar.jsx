import { Link } from "react-router-dom";
import { fetchAccessToken, setAuthUsername, storeUserId } from "../../../helper/Auth.helper";

export default function Sidebar() {
  const userId = sessionStorage.getItem('userId');
    fetchAccessToken(sessionStorage.getItem('token'))
    storeUserId(sessionStorage.getItem("userId"));
    setAuthUsername(sessionStorage.getItem("uname"));

  
    const handleLogout = () => {
      fetchAccessToken(undefined);
      sessionStorage.clear();
    }
  return (
    <nav className="relative h-screen w-60 bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)]">
      {/* Sidebar content */}
      <div className="flex-shrink-0 flex items-center">
        {/* <span className="text-xl font-bold">Logo</span> */}
        <img
          className="object-fill w-[13rem] h-28"
          src="assets/logo.png"
          alt="website-logo"
        />
      </div>
      <div className="flex flex-col justify-between">
        <Link
          className="flex items-center px-6 py-4 text-gray-100 bg-gray-700 bg-opacity-25"
          to="/seller-dashboard"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
            />
          </svg>

          <span className="mx-3">Dashboard</span>
        </Link>

        <Link
          className="flex items-center px-6 py-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
          to="/seller-dashboard/shop"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
            />
          </svg>

          <span className="mx-3">Products</span>
        </Link>

        <Link
          className="flex items-center px-6 py-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
          to="/seller-dashboard/add-product"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>

          <span className="mx-3">Add Product</span>
        </Link>
        <Link
          to="/seller-dashboard/profile"
          class="flex items-center px-6 py-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>
          <span className="mx-3">Profile</span>
        </Link>

        <Link to='/seller-dashboard/login'
          onClick={userId &&  handleLogout}
          href="#"
          class="flex items-center px-6 py-4 active:text-red text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
        >

          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            ></path>
          </svg>
          <span className="mx-3">Logout</span>
        </Link>
      </div>      
    </nav>
  );
}
