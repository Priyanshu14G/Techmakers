import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {

  const bloodPressureData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Systolic',
        data: [120, 125, 123, 118, 130, 128, 126],
        borderColor: '#FF6384',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
      {
        label: 'Diastolic',
        data: [80, 82, 81, 78, 85, 83, 82],
        borderColor: '#36A2EB',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
    ],
  };

  const bloodPressureOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Blood Pressure This Week',
      },
    },
  };


  const bmiData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'BMI',
        data: [23.5, 24.0, 23.8, 23.7, 24.1, 24.3, 23.9],
        backgroundColor: '#FFCE56',
        borderColor: '#FFCE56',
        borderWidth: 1,
      },
    ],
  };

  const bmiOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'BMI This Week',
      },
    },
  };


  const cholesterolData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Cholesterol Level',
        data: [180, 190, 175, 185, 200, 210, 195],
        backgroundColor: '#FF6384',
        borderColor: '#FF6384',
        borderWidth: 1,
      },
    ],
  };

  const cholesterolOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Cholesterol Level Over Time',
      },
    },
  };


  const insulinData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Insulin Level',
        data: [150, 160, 145, 155, 170, 165, 160],
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EB',
        borderWidth: 1,
      },
    ],
  };

  const insulinOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Insulin Level Over Time',
      },
    },
  };

  return (
    <div className="h-screen overflow-y-auto bg-gray-100 ml-[150px]">
      <div className="flex-1 p-4 md:p-6">
        <header className="text-center mb-4 md:mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Health Tracking Dashboard</h1>
        </header>


        <section className="mb-6 flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-4">
          <img
            src="https://i.pinimg.com/564x/9f/93/ae/9f93ae8f39417cd575e735bf5f1b1505.jpg"
            alt="User Profile"
            className="w-24 h-24 rounded-full border-2 border-gray-300"
          />
          <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">John Doe</h2>
            <p className="text-gray-600">Active Member</p>
            <p className="text-gray-400 mt-2">Joined: January 2023</p>
          </div>
        </section>


        <section className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Steps</h2>
            <p className="text-2xl md:text-4xl font-bold">8,432</p>
            <p className="text-gray-600">Today</p>
          </div>


          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Calories Burned</h2>
            <p className="text-2xl md:text-4xl font-bold">530</p>
            <p className="text-gray-600">Today</p>
          </div>


          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Heart Rate</h2>
            <p className="text-2xl md:text-4xl font-bold">72 bpm</p>
            <p className="text-gray-600">Resting</p>
          </div>


          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Sleep</h2>
            <p className="text-2xl md:text-4xl font-bold">7h 45m</p>
            <p className="text-gray-600">Last Night</p>
          </div>


          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Water Intake</h2>
            <p className="text-2xl md:text-4xl font-bold">2.5 L</p>
            <p className="text-gray-600">Today</p>
          </div>
        </section>


        <section className="mt-6 md:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
        
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg md:text-xl font-semibold mb-4">Blood Pressure</h2>
            <div className="w-full">
              <Line data={bloodPressureData} options={bloodPressureOptions} />
            </div>
          </div>


          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg md:text-xl font-semibold mb-4">BMI This Week</h2>
            <div className="w-full">
              <Bar data={bmiData} options={bmiOptions} />
            </div>
          </div>


          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg md:text-xl font-semibold mb-4">Cholesterol Level</h2>
            <div className="w-full">
              <Bar data={cholesterolData} options={cholesterolOptions} />
            </div>
          </div>


          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg md:text-xl font-semibold mb-4">Insulin Level</h2>
            <div className="w-full">
              <Bar data={insulinData} options={insulinOptions} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;