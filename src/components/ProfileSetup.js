import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './student.css'



const ProfileSetup = ({ onProfileUpdate }) => {
  const [nickname, setNickname] = useState('');
  const [image, setImage] = useState(null);
  const [university, setUniversity] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const profileData = {
      nickname,
      image,
      university,
      country,
      state,
      phoneNumber,
    };

    try {
      await axios.post('/api/profile/setup', profileData);
      onProfileUpdate(profileData);
      navigate('/StudentDashboard');
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  return (
    <div className="profile-setup-container">
      <form onSubmit={handleSubmit} className="profile-setup-form">
        <h3>Setup Your Profile</h3>
        <input
          type="text"
          placeholder="Nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="file"
          onChange={handleImageChange}
          required
          className="form-input"
        />
        {image && <img src={image} alt="Profile Preview" className="image-preview" />}
        <select
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          required
          className="form-input"
        >
          <option value="">Select University</option>
          <option value="University of Calabar">University of Calabar</option>
        </select>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
          className="form-input"
        >
          <option value="">Select Country</option>
          <option value="Nigeria">Nigeria</option>
        </select>
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
          className="form-input"
        >
          <option value="">Select State</option>
          <option value="Cross River">Cross River</option>
        </select>
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          className="form-input"
        />
        <button type="submit" className="btn-save">Save Profile</button>
      </form>
    </div>
  );
};

export default ProfileSetup;
