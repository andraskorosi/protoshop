import { useState } from 'react';
import { 
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { SignFormContainer } from './sign-forms.styles';

const defaultFormFields = { //unified object for default state due to name and value overlap
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields); //formFields will be the updated object
  const { displayName, email, password, confirmPassword } = formFields; //formFields destructure
  
  const handleChange = (event) => {
    const { name, value } = event.target; //input name and value destructure
    setFormFields({...formFields, [name]: value}); //update formField state with appropriate value
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields) //empties form fields to the default state
  }
  const handleSubmit = async (event) => { //async because it generates a user document inside an external service 
    event.preventDefault(); //prevents default form behaviour on submit

    if(password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { displayName }); //saves user to firebase db
      resetFormFields();

    } catch(error) {
      if(error.code === 'auth/email-already-in-use') {
        alert('cannot create user, email already in use')
      }
      console.log('error on user creation', error)
    }
  }

  return (
    <SignFormContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          type='password' 
          required 
          onChange={handleChange} 
          name='password'
          value={password}
        />
        <FormInput
          label='Confirm password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit' disabled>Sign Up</Button>
      </form>
    </SignFormContainer>
  )
}
export default SignUpForm