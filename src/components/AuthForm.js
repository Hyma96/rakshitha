// src/components/AuthForm.js
import { Form } from 'formik'; // Import Form from Formik

const AuthForm = ({ children }) => {
  return (
    <Form> {/* Wrap the form fields in Formik's Form component */}
      <div className="form-content">
        {children}
      </div>
    </Form>
  );
};

export default AuthForm;
