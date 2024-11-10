// src/pages/auth/verification.js
import Image from 'next/image';
import Link from 'next/link';

const VerificationSuccess = () => {
  return (
    <div className="auth-container">
      <div className="auth-form verification-success">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
        <h2 className="auth-heading">Welcome to Our Platform!</h2>
        <p>Your email has been verified successfully.</p>
        <Link href="/dashboard" className="auth-button">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default VerificationSuccess;

