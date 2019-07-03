import React from 'react';
import Like from './assets/like.png';
import Resume from './assets/resume.png';
import Advertising from './assets/advertising.png';

const worksStyles = {
    backgroundColor: '#f5f6f7',
    margin: '0',
    paddingBottom: '21px'
};

function BrandAdvertising() {
    return (
        <div id='ad-panel' style = {worksStyles}>
            <h2>Brand Advertising</h2>
            <hr/>
            <h1>Reach the talent you're looking for</h1>
                <div id='ads'>
                <div id ='find'>
                    <img className = 'smallIcon' src={Like}></img>
                    <h3>Promote your jobs and company</h3>
                    <h5>Boost awareness of your company and brand on and off the Glassdoor platform.</h5>
                </div>
                <div id ='research'>
                    <img className= 'smallIcon' src={Resume}></img>
                    <h3>Target priority candidates</h3>
                    <h5>Build a customized brand advertising campaign targeted toward priority candidates based on occupation, demographic data and more.</h5>
                </div>
                <div id='compare'>
                    <img className= 'smallIcon' src={Advertising}></img>
                    <h3>Win them over</h3>
                    <h5>Advertise on competitor profiles to keep your brand top of mind as candidates research other companies.</h5>
                </div>
    
            <style jsx>{`
            .smallIcon {
                width: 20%;
            }
            #ads{
                display: flex;
            }
            h1{
                margin: 0px;
                padding: 21px;
            }

            div#ads div {
                padding: 15px;
            }
            #ad-panel {
                padding: 20px;
            }
            `}</style>
            
            </div>
        </div>
    );
}

export default BrandAdvertising;