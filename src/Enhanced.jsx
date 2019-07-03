import React from 'react';
import Skyline from './assets/skyline.png';
import Graph from './assets/graph.png';
import bizCard from './assets/bizCard.png'; 


const profileStyles = {
    margin: '0',
    paddingBottom: '21px'
};

function Enhanced() {
    return (
        <div id='profile-panel' style = {profileStyles}>
            <h2>Enhanced Profile</h2>
            <hr/>
            <h1>Make an impact</h1>
                <div id='profile-icons'>
                <div id ='skyline'>
                    <img className = 'smallIcon' src={Skyline}></img>
                    <h3>Manage</h3>
                    <ul>
                        <li>Feature and respond to employee reviews</li>
                        <li>Feature and respond to employee reviews
                        </li>
                        <li>Feature and respond to employee reviews</li>
                    </ul>
                </div>
                <div id ='research'>
                    <img className= 'smallIcon' src={Graph}></img>
                    <h3>Analytics</h3>
                    <ul>
                        <li>Feature and respond to employee reviews</li>
                        <li>Feature and respond to employee reviews
                        </li>
                        <li>Feature and respond to employee reviews</li>
                    </ul>
                </div>
                <div id='compare'>
                    <img className= 'smallIcon' src={bizCard}></img>
                    <h3>Review Management</h3>
                    <ul>
                        <li>Feature and respond to employee reviews</li>
                        <li>Feature and respond to employee reviews
                        </li>
                        <li>Feature and respond to employee reviews</li>
                    </ul>
                </div>
            <style jsx>{`
            .smallIcon {
                width: 20%;
            }
            #profile-icons{
                display: flex;
                color: green;
            }
            hr {
                width: 75px;
                height: 3px;
                background-color: green;
            }
            ul {
                color: black;
                line-height: 2em;
                text-align: left;
                font-size: 18px;
            }
            `}</style>
            
            </div>
        </div>
    );
}

export default Enhanced;