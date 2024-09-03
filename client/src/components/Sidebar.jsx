import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faHeartbeat, faBrain, faSyringe, faVial, faVirus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormClick = (e) => {
    e.preventDefault();
    setIsFormOpen(!isFormOpen);
  };

  return (
    <aside className="w-64 fixed bg-gray-800 text-white h-full flex flex-col">
      <div className="p-4 flex items-center">
        <img
          src="https://i.pinimg.com/564x/9f/93/ae/9f93ae8f39417cd575e735bf5f1b1505.jpg"
          alt="User Profile"
          className="w-12 h-12 rounded-full"
        />
        <div className="ml-4">
          <p className="font-semibold">John Doe</p>
          <p className="text-sm text-gray-400">John1980</p>
        </div>
      </div>
      <ul className="p-4 flex-1">
        <li className="mb-4">
          <Link to="/" className="hover:text-blue-400">Home</Link>
        </li>
        <li className="mb-4">
          <Link to="/Profile" className="hover:text-blue-400">Profile</Link>
        </li>
        <li className="mb-4">
          <Link to="/Dashboard" className="hover:text-blue-400">Dashboard</Link>
        </li>
        <li className="mb-4">
          <Link to="#" className="hover:text-blue-400">Activity</Link>
        </li>
        <li className="mb-4">
          <Link to="#" className="hover:text-blue-400">Nutrition</Link>
        </li>
        <li className="mb-4 cursor-pointer" onClick={handleFormClick}>
          <div className="flex items-center justify-between">
            <span className="hover:text-blue-400">Disease Detection System</span>
            <FontAwesomeIcon icon={faChevronDown} className={`transition-transform ${isFormOpen ? 'rotate-180' : ''}`} />
          </div>
        </li>
        {isFormOpen && (
          <ul className="text-xs pl-6">
            <li className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faVial} className="mr-2 text-purple-500" />
              <Link to="/DiabetesDiseaseForm" className="hover:text-blue-400">Diabetes Detection</Link>
            </li>
            <li className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faHeartbeat} className="mr-2 text-red-500" />
              <Link to="/HeartDiseaseForm" className="hover:text-blue-400">Heart Disease Detection</Link>
            </li>
            <li className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faBrain} className="mr-2 text-purple-500" />
              <Link to="/ParkinsonsDiseaseForm" className="hover:text-blue-400">Parkinson's Disease Detection</Link>
            </li>
            <li className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faSyringe} className="mr-2 text-blue-500" />
              <Link to="/HepatitisDiseaseForm" className="hover:text-blue-400">Hepatitis Disease Detection</Link>
            </li>
            <li className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faVirus} className="mr-2 text-green-500" />
              <Link to="/Covid19DiseaseForm" className="hover:text-blue-400">Covid-19 Disease Detection</Link>
            </li>
            <li className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faVial} className="mr-2 text-purple-500" />
              <Link to="/MalariaDiseaseForm" className="hover:text-blue-400">Malaria Disease Detection</Link>
            </li>
            <li className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faBrain} className="mr-2 text-purple-500" />
              <Link to="/AlzheimersDiseaseForm" className="hover:text-blue-400">Alzheimer's Disease Detection</Link>
            </li>
          </ul>
        )}
        <li className="mb-4">
          <Link to="/Appointment" className="hover:text-blue-400">Appointment</Link>
        </li>
        <li className="mt-4">
          <Link to="/Payments" className="hover:text-blue-400">Payment</Link>
        </li>
        <li className="mt-4">
          <Link to="/Settings" className="hover:text-blue-400">Settings</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
