import React from 'react';
import Find from './assets/magnifying-glass.png';
import Research from './assets/speech-bubble.png';
import Compare from './assets/invoice.png';
import Apply from './assets/briefcase.png';

const worksStyles = {
    backgroundColor: '#f5f6f7',
    margin: '0',
    paddingBottom: '21px'
};

function WorksForYou() {
    return (
        <div id='work-panel' style = {worksStyles}>
            <h1>How Glassdoor Works For You</h1>
                <div id='works'>
                <div id ='find'>
                    <img className = 'smallIcon' src={Find}></img>
                    <h3>Find the Right Jobs</h3>
                </div>
                <div id ='research'>
                    <img className= 'smallIcon' src={Research}></img>
                    <h3>Research Companies</h3>
                </div>
                <div id='compare'>
                    <img className= 'smallIcon' src={Compare}></img>
                    <h3>Compare Salaries</h3>
                </div>
                <div id='apply'>
                    <img className= 'smallIcon' src= {Apply}></img>
                    <h3>Apply to Jobs</h3>
                </div>
            <style jsx>{`
            .smallIcon {
                width: 20%;
            }
            #works{
                display: flex;
            }
            h1{
                margin: 0px;
                padding: 21px;
            }
            `}</style>
            
            </div>
        </div>
    );
}

export default WorksForYou;