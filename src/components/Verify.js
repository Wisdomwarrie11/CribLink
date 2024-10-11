import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const VerifyEmailPage = () => {
  const [seconds, setSeconds] = useState(60);  // Set initial countdown time to 1 minute (60 seconds)
  const [showResendLink, setShowResendLink] = useState(false);
  const [message, setMessage] = useState('');
  const [searchParams] = useSearchParams();  // To handle query params
  const email = searchParams.get('email');   // Extract email from query params (if sent via URL)
  

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);  // Countdown
      return () => clearTimeout(timer);
    } else {
      setShowResendLink(true);  // Show resend link when timer ends
    }
  }, [seconds]);

  const handleResendVerification = async () => {
    try {
      const response = await axios.post('http://localhost:5000', { email });
      setMessage('Verification email has been resent');
    } catch (error) {
      setMessage('Failed to resend verification email');
    }
  };

  return (
    <div className="verification-container">
      <h2>Verify your Email</h2>
      <p>Please check your email for the verification link. The link is valid for 1 minute.</p>
      {seconds > 0 ? (
        <p>Link will expire in: {seconds}s</p>  // Countdown display
      ) : (
        <p>The verification link has expired.</p>
      )}
      
      {showResendLink && (
        <button onClick={handleResendVerification}>Send Verification Code Again</button>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

export default VerifyEmailPage;
