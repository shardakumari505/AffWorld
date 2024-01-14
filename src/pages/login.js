import React, { useEffect, useState } from 'react';
import './login.styles.scss'

const Login = () => {

    return (
        <div className='login-container'>
            <span className='login-input-boxes-container'>
                <input className='email-input' type='email' aria-label='Email' placeholder='Email' />
                <input className='password-input' type='password' placeholder='Password' />
                <button >Submit</button>
            </span>
        </div>
    );
};

export default Login;
