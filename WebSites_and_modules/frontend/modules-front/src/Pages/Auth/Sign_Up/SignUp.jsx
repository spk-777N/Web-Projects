import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./SignUp.css"



function SignUp() {

    // page functions

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        "username": "",
        "email": "",
        "password": ""
    }
    );


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    };



    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(formData);
    };


    // page Body 
    return (
        <div className='sign-up-page'>

            <form className='form' onSubmit={handleSubmit}>
                <div className='signup-div-title'>
                    <p className='signup-title'>Sign up</p>
                    <p className='signup-description'>Create and account or <span onClick={() => navigate("/sign-in")}>Sign in</span ></p>
                </div>
                <div className='form-filds'>
                    <div className='signup-email'>
                        <p>Email address</p>
                        <input type='text' name='email' required value={formData.email} onChange={handleChange} />
                    </div>
                    <div className='signup-username'>
                        <p>Username</p>
                        <input type='text' name='username' required value={formData.username} onChange={handleChange} />
                    </div>
                    <div className='signup-password'>
                        <p>Password</p>
                        <input type='password' name='password' required value={formData.password} onChange={handleChange} />
                    </div>
                </div>
                <div className='sign-up-button-div'>
                    <button className='sign-up-button' type='submit'>Sign up</button>
                    <p>
                        By signing up to create an account, you are accepting our terms of service and privacy policy
                    </p>
                </div>
            </form>
        </div>
    )
}

export default SignUp
