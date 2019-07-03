import React from 'react';
import Background from './assets/SignUpBackground.jpg';

const signupStyles = {
    backgroundImage: `url(${Background})`,
    width: '100%',
    height: '500px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    color: 'white'

};

function SignUp() {
    return (
        <div id='signup' style={signupStyles}>
            <h1>Find The Job That Fits Your Life</h1>
            <p className='small'>By continuing, you agree to our Terms of Use and Privacy Policy.</p>
            <button>Continue with Facebook</button>
            <button>Continue with Google</button>
            <hr/>
            <input type="text" placeholder='Create account with Email'/><br />
            <input type="text" placeholder='Password'/>
            <p className='small'>Password must be at least 8 characters, no spaces</p>
            <button>Continue with Email</button>
            <h3>Are you Hiring? Post Jobs for free!</h3>
        </div>
    );
}

export default SignUp;