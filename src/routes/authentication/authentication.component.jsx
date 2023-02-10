import { Fragment } from 'react';
import SignInForm from '../../components/sign-forms/sign-in-form.component';
import SignUpForm from '../../components/sign-forms/sign-up-form.component';
import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
  return (
    <Fragment>
      <div style={{textAlign: 'center', color: 'red'}}>
        <span>Authentication services are disabled at this time</span>
      </div>
      <AuthenticationContainer>
        <SignInForm />
        <SignUpForm />
      </AuthenticationContainer>
    </Fragment>
  )
};

export default Authentication;