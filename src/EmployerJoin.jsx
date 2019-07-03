import React from 'react';
import Background from './assets/JoinBackground.jpg';

const joinStyles = {
    backgroundImage: `url(${Background})`,
    width: '100%',
    height: '500px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    color: 'white'

};

function EmployerJoin() {
    return (
        <div id='employerJoin' style={joinStyles}>
        <div id ='join-container'>
            <h3>Employer Branding</h3>
            <h1>Make a great first impression</h1>
            <h3>Your Glassdoor profile may be someone’s only exposure to your company. Make the most of it.</h3>
            <button>Join Grassdoor</button>
        </div>
        <style jsx>{`
        #join-container {
            position: relative;
            left: 40px;
            top: 40px;
            width: 500px;
            color: black;
            text-align: left;
            background-color: #ffffff30;
            padding: 15px;
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

export default EmployerJoin;