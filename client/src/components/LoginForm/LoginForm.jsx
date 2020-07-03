import React, { useState } from 'react';
import InputField from '../InputField/InputField';
import SubmitButton from '../CustomButton/CustomButton';
import { loginUser } from '../../redux/user/user.actions';
import './LoginForm.styles.css';
import { connect } from 'react-redux';

const LoginForm = ({ submitUserDetails }) => {
  const [loginInfo, setloginInfo] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setloginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitUserDetails(loginInfo);
  };

  return (
    <div className="login-form-container">
      <div className="login-form">
        <h1>Log into your account.</h1>
        <form onSubmit={handleSubmit} method="POST">
          <InputField
            name="username"
            label="Username"
            type="text"
            required
            placeholder=" "
            onChange={handleChange}
          />
          <InputField
            name="password"
            label="Password"
            type="password"
            required
            placeholder=" "
            onChange={handleChange}
          />
          <SubmitButton type="submit">Login</SubmitButton>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  submitUserDetails: (userData) => dispatch(loginUser(userData)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
