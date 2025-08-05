import React from 'react'
import "./SignUp.css"

function SignUp() {
    return (
        <div className='sign-up-page'>
            <div className='form'>
                <div className='signup-div-title'>
                    <p className='signup-title'>Sign up</p>
                    <p className='signup-description'>Create and account or <span>Sign in</span></p>
                </div>
                <div className='form-filds'>
                    <div className='signup-email'>
                        <p>Email address</p>
                        <input type='text' />
                    </div>
                    <div className='signup-username'>
                        <p>Username</p>
                        <input type='text' required />
                    </div>
                    <div className='signup-password'>
                        <p>Password</p>
                        <input type='password' required />
                    </div>
                </div>
                <div className='sign-up-button-div'>
                    <button className='sign-up-button' type='submit'>Sign up</button>
                    <p>
                        By signing up to create an account, you are accepting our terms of service and privacy policy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp
