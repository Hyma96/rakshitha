// src/pages/auth/clerk-signup.js
import { SignUp } from '@clerk/nextjs';
import { useState } from 'react';
import { useRouter } from 'next/router';
import '../../styles/auth.css';

const ClerkSignup = () => {
  const [isVerified, setIsVerified] = useState(false);
  const router = useRouter();

  const handleSignupComplete = (user) => {
    // Check if the user's email is verified
    if (user && user.emailAddresses[0]?.verification?.status === 'verified') {
      setIsVerified(true);
      // Redirect to a success or welcome page after verification
      router.push('/auth/verification');
    } else {
      console.log("Email is not verified yet");
    }
  };

  return (
    <div className="auth-container">
      {!isVerified ? (
        <div className="auth-form">
          <h2 className="auth-heading">Sign Up</h2>
          {/* Clerk's SignUp component automatically saves user data and manages email verification */}
          <SignUp 
            path="/sign-up"
            routing="path"
            onSignupComplete={handleSignupComplete} 
          />
        </div>
      ) : (
        <div className="auth-form">
          <h2 className="auth-heading">Email Verified Successfully!</h2>
        </div>
      )}
    </div>
  );
};

export default ClerkSignup;
