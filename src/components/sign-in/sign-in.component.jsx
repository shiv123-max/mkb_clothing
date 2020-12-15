import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { signInWithGoogle } from '../../firebase/firebase.utils.js'

import './sign-in.styels.scss';

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
      const { value, name } = event.target;

      this.setState({ [name]: value })
    }

    render () {
        return (
            <div className='sign-in'>
              <h3>I already have an account</h3>
              <h5>Sign in with your email and password</h5>

              <form onSubmit={this.handleSubmit}>
                <FormInput 
                  name="email" 
                  type="email" 
                  value={this.state.email}
                  label="email" 
                  required 
                  handleChange={this.handleChange} />
                <FormInput 
                  name="password" 
                  type="password" 
                  value={this.state.password} 
                  required 
                  label='password'
                  handleChange={this.handleChange} />
                  <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                    Sign In With Google
                    </CustomButton>
                  </div>
               </form>
            </div>
        );
    }     
}

export default SignIn;