// src/pages/auth/custom-signup.js
import { Formik, Field, ErrorMessage } from 'formik';
import Link from 'next/link';
import '../../styles/auth.css';
import { signupValidationSchema } from '../../validations/authValidation';
import AuthForm from '../../components/AuthForm';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

const CustomSignup = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('/api/signup', values);
      setErrorMessage('');
      router.push('/auth/welcome'); // Redirect to the welcome page

    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Unknown error');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2 className="auth-heading">Custom Sign Up</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <Formik
          initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
          validationSchema={signupValidationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <AuthForm>
              <div className="field-container">
                <label htmlFor="name" className="field-label">Name</label>
                <Field name="name" type="text" placeholder="Enter your name" className="auth-input" />
                <ErrorMessage name="name" component="div" className="error-message" />
              </div>

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

              <div className="field-container">
                <label htmlFor="confirmPassword" className="field-label">Confirm Password</label>
                <Field name="confirmPassword" type="password" placeholder="Confirm Password" className="auth-input" />
                <ErrorMessage name="confirmPassword" component="div" className="error-message" />
              </div>

              <button type="submit" className="auth-button">Sign Up</button>

              <div className="signup-text">
                Already have an account? <Link href="/auth/login" className="signup-link">Login</Link>
              </div>
            </AuthForm>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CustomSignup;
