// src/pages/auth/login.js
import { SignInButton } from '@clerk/nextjs';
import { Formik, Field, ErrorMessage } from 'formik';
import Link from 'next/link';
import '../../styles/auth.css';
import { loginValidationSchema } from '../../validations/authValidation';

const Login = () => {
  const handleSubmit = async (values) => {
    console.log('Login request:', values);
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2 className="auth-heading">Login</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginValidationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <form>
              <div className="field-container">
                <label htmlFor="email" className="field-label">Email</label>
                <Field name="email" type="email" placeholder="Enter your email" className="auth-input" />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>

              <div className="field-container">
                <label htmlFor="password" className="field-label">Password</label>
                <Field name="password" type="password" placeholder="Password" className="auth-input" />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>

              <button type="submit" className="auth-button">Login</button>

              <SignInButton mode="oauth" strategy="oauth_google" redirectUrl="/dashboard">
                <button type="button" className="auth-button google-button">
                  Login with Google
                </button>
              </SignInButton>

              <div className="signup-text">
                Don't have an account? <Link href="/auth/custom-signup" className="signup-link">Sign Up</Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
