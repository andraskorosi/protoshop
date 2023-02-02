import { Fragment } from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import './authentication.styles.scss'

const Authentication = () => {
  return (
    <Fragment>
      <div style={{textAlign: 'center', color: 'red'}}>
        <span>Signing up or signing in is disabled at this time!</span>
      </div>
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </Fragment>
  )
};

export default Authentication;