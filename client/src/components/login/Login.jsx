import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/authSlice';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useSelector((state) => state.auth);
  const [isFormOpen, setIsFormOpen] = useState(true); // State to control form visibility

  // Assume the sidebar width is 16rem (width-64 in Tailwind)
  const sidebarWidth = '8rem';

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className={`min-h-screen flex justify-center items-center ${isFormOpen ? '' : ''}`}>
      {isFormOpen && (
        <div
          className="bg-[#92dd90] rounded-2xl flex max-w-3xl p-5 items-center"
          style={{ marginLeft: sidebarWidth }} // Dynamic margin-left based on sidebar width
        >
          <div className="md:w-1/2 px-8">
            <h2 className="font-bold text-3xl text-[#002D74]">Login</h2>
            <p className="text-sm mt-4 text-[#002D74]">If you are already a member, easily log in now.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* SVG icons for password visibility toggle */}
              </div>
              <button
                type="submit"
                className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
              >
                Login
              </button>
            </form>
            <div className="mt-6 items-center text-gray-100">
              <hr className="border-gray-300" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-300" />
            </div>
            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium">
              {/* SVG for Google icon */}
              <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                {/* Paths for Google icon */}
              </svg>
              Login with Google
            </button>
            <div className="mt-10 text-sm border-b border-gray-500 py-5">
              Forget password?
            </div>
            <div className="mt-4 text-sm flex justify-between items-center">
              <p className="mr-3 md:mr-0">If you don't have an account..</p>
              <Link to="/register">
                <button className="hover:border register text-white bg-[#002D74] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300">
                  Register
                </button>
              </Link>
            </div>
          </div>
          <div className="md:block hidden w-1/2">
            <img
              className="rounded-2xl max-h-[1600px]"
              src="https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="login form image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
