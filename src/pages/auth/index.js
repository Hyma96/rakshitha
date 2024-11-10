// src/pages/index.js
import Link from 'next/link';

const HomePage = () => (
  <div className="auth-container">
    <style jsx>{`
      .auth-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f0f2f5;
      }
      .auth-form {
        text-align: center;
        padding: 2rem;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
      }
      .auth-heading {
        font-size: 2rem;
        color: #333;
        margin-bottom: 1rem;
      }
      .welcome-text {
        font-size: 1.2rem;
        color: #666;
        margin-bottom: 2rem;
      }
      .button-container {
        display: flex;
        justify-content: space-around;
      }
      .auth-button {
        background-color: #0070f3;
        color: #fff;
        padding: 0.5rem 1.5rem;
        border: none;
        border-radius: 4px;
        text-decoration: none;
        cursor: pointer;
        transition: background-color 0.2s;
        margin: 0 0.5rem;
      }
      .auth-button:hover {
        background-color: #1c86ee;
      }
      .auth-button:active {
        background-color: #005bb5;
      }
    `}</style>

    <div className="auth-form">
      <h1 className="auth-heading">Book Your Appointment with a Specialist Now</h1>
      <p className="welcome-text">Find the Right Doctor for Your Health Needs</p>

      <div className="button-container">
        <Link href="/auth/login" legacyBehavior>
          <a className="auth-button">Login</a>
        </Link>
        <Link href="/auth/custom-signup" legacyBehavior>
          <a className="auth-button">Sign Up</a>
        </Link>
      </div>
    </div>
  </div>
);

export default HomePage;
