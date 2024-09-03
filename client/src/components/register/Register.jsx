import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/authSlice';
import { Link } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const auth = useSelector((state) => state.auth);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !gender || !email || !password || !profileImage) {
      alert("All fields are required");
      return;
    }
    const formData = new FormData();
    formData.append('name', name);
    formData.append('age', age);
    formData.append('gender', gender);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('profileImage', profileImage);

    dispatch(registerUser(formData));
  };

  return (
    <section className=" h-screen flex items-center justify-center p-5 relative">
      {/* Background Blur */}
      <div className="absolute inset-0  blur-sm"></div>

      <div className="relative bg-[#dfa674] rounded-2xl max-w-4xl mx-auto flex">
        <div className="w-full md:w-1/2 p-8 flex flex-col items-center">
          <h1 className="text-3xl font-bold text-[#002D74] mb-6">Register</h1>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-[#002D74]">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 mt-2 rounded-xl border border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#002D74]">Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="p-2 mt-2 rounded-xl border border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#002D74]">Gender</label>
              <input
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="p-2 mt-2 rounded-xl border border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#002D74]">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 mt-2 rounded-xl border border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#002D74]">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 mt-2 rounded-xl border border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#002D74]">Profile Image</label>
              <input
                type="file"
                onChange={(e) => setProfileImage(e.target.files[0])}
                className="p-2 mt-2 rounded-xl border border-gray-300"
              />
            </div>
            <button
              type="submit"
              className="bg-[#002D74] text-white py-2 rounded-xl hover:bg-[#206ab1] font-medium mt-4"
            >
              <Link to='/dashboard'>Register</Link>
            </button>
          </form>
          {auth.error && <p className="text-red-500 mt-4">{auth.error}</p>}
        </div>
        <div className="w-1/2 hidden md:block">
          <img
            className="w-full h-full object-cover rounded-r-2xl"
            src="https://plus.unsplash.com/premium_photo-1681996535883-97ceb10815d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Registration"
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
