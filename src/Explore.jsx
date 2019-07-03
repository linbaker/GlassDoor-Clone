import React from 'react';

let rows = [];
let row = 'Lorem Ipsum Thing';
for (let i = 0; i < 25; i++) {
    rows.push(row)
}

function Explore() {
    const exploreStyles = {
        paddingLeft: '12%',
        paddingRight: '12%'
    }

    return (
        <div id='explore' style={exploreStyles}>
            <h1>Explore</h1>
            <h3>Glassdoor has millions of jobs, salary information, company reviews, and interview questions – all posted anonymously by employees and job seekers. See what others are looking for on Glassdoor today.</h3>
            <div id='list-container'>
                <div className="list">
                    <h4>Popular Searches</h4>
                    {rows.map(element =>
                        <p>{row}</p>
                    )}
                </div>
                <div className="list">
                <h4>Jobs</h4>
                    {rows.map(element =>
                        <p>{row}</p>
                    )}   
                </div>
                <div className="list">
                <h4>Browse by City</h4>
                    {rows.map(element =>
                        <p>{row}</p>
                    )}
                </div>
                <div className="list">
                <h4>Salaries</h4>
                    {rows.map(element =>
                        <p>{row}</p>
                    )}
                </div>
            </div>
            <style jsx>{`
                #list-container {
                    display: flex;
                    text-align: left;
                }

                .list{
                    width: 25%;
                }

                .list p {
                    color: #1760bf;
                }
            `}</style>
            <h1>The Right Job Is Out There</h1>
            <button>Register for Free</button>
        </div>
    );
}

export default Explore;