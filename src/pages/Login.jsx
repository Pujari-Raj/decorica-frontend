import cardImg from "./images/card1.jpg";
import { login } from "../services/auth.service";
import { useState } from "react";
import { Link } from "react-router-dom";
import { storeAcessPath } from "../helper/Auth.helper";

export default function Login() {
  const [email, setEmail] = useState();
  const [pswd, setPswd] = useState();

  // password hide/show
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  //
  const togglePassword = () => {
    // console.log('togglePassword called');
    setIsPasswordVisible(!isPasswordVisible);
  };

  const changeUrl = (link) => {
    var fullUrl = window.location.href;
    var path = new URL(fullUrl).pathname;
    var segments = path.split("/");
    if (segments.length > 1) {
      segments.pop();
    }
    var newPath = segments.join("/");
    storeAcessPath(newPath.concat(link));
    return newPath.concat(link);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, pswd);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 m-20 h-3/6 scale-x-75 scale-y-90">
      <div className="sm:block">
        <img className="w-full h-full object-cover" src={cardImg} alt="" />
      </div>
      <div className="bg-gray-800 flex flex-col justify-center font-montserrat">
        <form
          onSubmit={handleSubmit}
          className="max-w-[480px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
        >
          <h2 className="text-4xl text-white font-bold text-center">
            {" "}
            SIGN IN
          </h2>
          <div className="flex flex-col text-gray-300 py-2 ">
            <label className="font-medium text-[1.1rem]">
              Email or Username
            </label>
            <input
              className="rounded-lg text-lg bg-gray-700 mt-2 p-2  focus:bg-gray-800 focus:outline-none"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col text-gray-300 py-2">
            <label className="font-medium text-[1.1rem]">Password</label>
            <input
              className="rounded-lg text-lg bg-gray-700 text-gray-200 mt-2 p-2 focus:bg-gray-800 focus:outline-none"
              // type="password"
              required
              type={isPasswordVisible ? "text" : "password"}
              onChange={(e) => setPswd(e.target.value)}
            />
            <i
              className="absolute inset-y-0 right-16 top-4 flex items-center px-4 text-gray-600"
              onClick={togglePassword}
            >
              {isPasswordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#fff"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#fff"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </i>
          </div>
          <div className="flex justify-between text-gray-400 py-2 text-lg">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" />
              Remeber Me
            </p>
            <a className="text-teal-500" href="/reset-password">
              Forgot Password
            </a>
          </div>
          <button type="submit" className="w-full my-5 py-2 bg-teal-500">
            Sign In
          </button>

          <p className="text-gray-300 text-lg">
            Don&apos;t Have an Account?{" "}
            <Link className="text-teal-500" to={changeUrl("/Register")}>
              Register Now!!!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
