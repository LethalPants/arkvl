import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { toast, Slide } from 'react-toastify';
import { motion } from 'framer-motion';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { unsetError } from '../../redux/user/user.actions';
import './LoginRegister.styles.css';

function LoginRegister({ error, removeError, pageVariants, pageTransition }) {
  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      });
    }

    removeError();
  }, [error, removeError]);
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="login-register-container"
    >
      <LoginForm />
      <RegisterForm />
    </motion.div>
  );
}

const mapStateToProps = (state) => ({
  error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
  removeError: () => dispatch(unsetError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginRegister);
