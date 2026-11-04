import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get the token from localStorage
    const token = localStorage.getItem('token');

    if (!token) {
      // Agar token nahi hai to login page par redirect karo
      navigate('/login');
      return;
    }

    // Profile data ko fetch karo
    const fetchProfileData = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setProfileData(data);  // Profile data ko state me store karo
        } else {
          setError(data.message || 'Something went wrong!');
        }
      } catch (err) {
        setError('Error fetching profile!');
      }
    };

    fetchProfileData();
  }, [navigate]);

  return (
    <div className="profile-page">
      <h1>User Profile</h1>
      {error && <p className="error">{error}</p>}
      {profileData ? (
        <div>
          <p><strong>User ID:</strong> {profileData.userId}</p>
          <p><strong>Email:</strong> {profileData.email}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
