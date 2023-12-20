import React, { FunctionComponent } from 'react';
import "../../styles/main.css";
import LoginForm from '../../composants/login-form/LoginForm';
//import LogoFooter from '../';

const SignIn: FunctionComponent = () => {

  //const name: String = 'React';
  return (
    <main className="main bg-dark">
      <LoginForm />
    </main>
  );
}

export default SignIn;