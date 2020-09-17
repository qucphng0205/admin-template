import React, { useState } from 'react';
import { Button } from '../../components/button/Button';
import { Form, FormGroup, FormInput, FormLabel } from '../../components/forms/Form';
import "./login.style.scss";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    //NEED UPDATE
    return email.length >= 6 && password.length >= 6;
  }

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {       

    }
  }

  return (
    <div className="login-section mx-auto">
      <Form onSubmit={handleSubmit} className="login-form">
        <h2 className="header-2 mb-4">Login PH-Admin</h2>

        <FormGroup>
          <FormLabel htmlFor="input-email">Email Address</FormLabel>
          <FormInput type="email" id="login-input-email" onChange={handleEmailChange} />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="input-email">Password</FormLabel>
          <FormInput type="password" id="login-input-password" onChange={handlePasswordChange} />
        </FormGroup>

        <Button type="submit" variant="primary">Login</Button>
        
      </Form>
    </div>
  );
}

export default LoginPage;