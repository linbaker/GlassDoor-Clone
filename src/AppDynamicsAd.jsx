import React from 'react';
import Background from './assets/app-dynamics.png';

const appDynamicStyles = {
    backgroundImage: `url(${Background})`,
    width: '100%',
    height: '500px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    color: 'white'

};

function AppDynamicsAd() {
    return (
        <div id='appDynamicsAd' style={appDynamicStyles}>
        <div id ='dynamics-container'>
            <h1>Target Exactly the people you want</h1>
            <br/>
            <h4>App Dynamics is used Brand and Spotlight Ads to find and hire female software engineers</h4>
            <h3>Your Glassdoor profile may be someone’s only exposure to your company. Make the most of it.</h3>
            <button>Read Their Story</button>
        </div>
        <style jsx>{`
        #dynamics-container {
            position: relative;
            left: 55%;
            top: 28%;
            width: 500px;
            color: white;
            text-align: left;
            padding: 15px;
        }
        h1{
            padding-left: 0px;
        }
        button {
            background-color: green;
            color: white;
            font-size: 16px;
            border: none;
            padding: 8px;
        }
        `}  
        </style>
        </div>
    );
}

export default AppDynamicsAd;