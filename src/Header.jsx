import React from 'react';

const headStyles = {

}

function Header() {
    return (
        <div id='head-panel' style = {headStyles}>
            <h1>The Real GrassDoor</h1>
            <h5>Find a Job</h5>
            <h5>For Employers</h5>
            <button class ='buttons'>Sign In</button>
            <button class='buttons'> Post Jobs Free</button>
            <style jsx>{`
             #head-panel{
                display: flex;
                justify-content: space-evenly;
            }
            h1{
                margin: 0px;
                padding: 21px;
            }
            .buttons{
                background-color: #00000080;
                border: none;
                color: white;
                text-align: center;
                font-size: 15px;
                border-radius: 10px;
                height: 40px;
            }
            `}</style>
        
        </div>
    );
}

export default Header;