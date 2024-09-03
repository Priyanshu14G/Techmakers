import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import {registerDoctor} from '../redux/doctorSlice';


function DoctorRegis() {
    const [doctor,setDoctor]=useState({
        name:'',
        yearsOfExperience:'',
        email:'',
        speacializedIn:'',
        lincenseNumber:'',
        profilePhoto:null,
    });

    const dispatch=useDispatch();
    const handleChange=(e)=>{
        if (e.target.name === 'profilePhoto') {
            setDoctor({ ...doctor, profilePhoto: e.target.files[0] });
          } else {
            setDoctor({ ...doctor, [e.target.name]: e.target.value });
          }
      
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        for (const key in doctor) {
          formData.append(key, doctor[key]);
        }
    
        dispatch(registerDoctor(formData));
      };


  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={doctor.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Years of Experience:</label>
        <input type="number" name="yearsOfExperience" value={doctor.yearsOfExperience} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={doctor.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Specialized In:</label>
        <input type="text" name="specializedIn" value={doctor.specializedIn} onChange={handleChange} required />
      </div>
      <div>
        <label>License Number:</label>
        <input type="text" name="licenseNumber" value={doctor.licenseNumber} onChange={handleChange} required />
      </div>
      <div>
        <label>Profile Photo:</label>
        <input type="file" name="profilePhoto" onChange={handleChange} accept="image/*" required />
      </div>
      <button type="submit">Register Doctor</button>
    </form>
  )
}

export default DoctorRegis;
