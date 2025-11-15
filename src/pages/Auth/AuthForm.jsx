import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";

const AuthForm = () => {
  // getting params
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "login";
  console.log("mode", mode);

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("login data", data);
  };

  return (
    <>
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row w-full h-auto lg:h-screen lg:rounded-2xl lg:shadow-2xl overflow-hidden bg-white">
            {/* Left Side - Image (Hidden on mobile and tablet) */}
            <div className="hidden lg:flex xl:w-1/2 bg-cover bg-center relative">
              <img
                src="./assets/login-background.jpg"
                alt="Login background"
                className="w-full h-full object-fill"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-4 py-8 sm:px-6 md:px-8 lg:px-12 lg:py-0">
              <div className="w-full max-w-sm">
                <div className="mb-6 md:mb-8">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-2">
                    {mode === "login"
                      ? "Welcome Back 👋"
                      : "Create Your Account ✨"}
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">
                    Sign in to your account to continue
                  </p>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-3 md:space-y-5"
                >
                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 md:mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email address",
                        },
                      })}
                      className={`w-full px-3 sm:px-4 py-2 md:py-3 border rounded-lg text-sm sm:text-base text-gray-900 placeholder-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                        errors.email
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 bg-gray-50 hover:bg-white"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-xs sm:text-sm mt-1 md:mt-2 flex items-center gap-1">
                        <span>⚠</span> {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Password Field */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 md:mb-2"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                          },
                        })}
                        className={`w-full px-3 sm:px-4 py-2 md:py-3 pr-10 sm:pr-12 border rounded-lg text-sm sm:text-base text-gray-900 placeholder-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                          errors.password
                            ? "border-red-500 bg-red-50"
                            : "border-gray-300 bg-gray-50 hover:bg-white"
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                        aria-label="Toggle password visibility"
                      >
                        {showPassword ? (
                          <EyeOff size={18} className="sm:w-5 sm:h-5" />
                        ) : (
                          <Eye size={18} className="sm:w-5 sm:h-5" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-600 text-xs sm:text-sm mt-1 md:mt-2 flex items-center gap-1">
                        <span>⚠</span> {errors.password.message}
                      </p>
                    )}
                  </div>

                  {/* Remember & Forgot */}
                  <div className="flex items-center justify-between text-xs sm:text-sm gap-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register("remember")}
                        className="w-4 h-4 border-gray-300 rounded text-indigo-600 focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                      />
                      <span className="text-gray-600">Remember me</span>
                    </label>
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors whitespace-nowrap"
                    >
                      Forgot Password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-2 md:py-3 px-4 rounded-lg transition-all duration-200 transform disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        Logging in...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </form>

                {/* Divider */}
                <div className="my-4 md:my-6 flex items-center gap-3">
                  <div className="flex-1 h-px bg-gray-200"></div>
                  <span className="text-gray-500 text-xs sm:text-sm">OR</span>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* Google Sign In */}
                <button className="w-full border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 md:py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm md:text-base">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Continue with Google
                </button>

                <p className="text-center text-gray-600 text-xs sm:text-sm mt-4 md:mt-6">
                  {mode === "login" ? (
                    <>
                      Don't have an account?{" "}
                      <Link
                        to="/auth?mode=register"
                        className="text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
                      >
                        Create one
                      </Link>
                    </>
                  ) : (
                    <>
                      Already have an account?{" "}
                      <Link
                        to="/auth?mode=login"
                        className="text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
                      >
                        Login
                      </Link>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
