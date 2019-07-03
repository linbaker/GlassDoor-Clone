import React from 'react';

let rows = [];
let row = 'Lorem Ipsum Thing';
for (let i = 0; i < 5; i++) {
    rows.push(row)
}

function Footer() {
    const footerStyles = {
        paddingLeft: '12%',
        paddingRight: '12%',
        backgroundColor: '#d0d4d9'
    }

    return (
        <div id='footer' style={footerStyles}>
            <p>Citations</p>

            <div id='list-container'>
                <div className="list">
                <hr/>
                    <h4>What We Do</h4>
                    {rows.map(element =>
                        <p>{row}</p>
                    )}
                </div>
                <div className="list">
                <h4>Community and Partners</h4>
                    {rows.map(element =>
                        <p>{row}</p>
                    )}   
                </div>
                <div className="list">
                <h4>Support</h4>
                    {rows.map(element =>
                        <p>{row}</p>
                    )}
                </div>
                <div className="list">
                <h4>Resource Library</h4>
                    {rows.map(element =>
                        <p>{row}</p>
                    )}
                </div>
                <div className="list">
                <h4>Contact Us</h4>
                    {rows.map(element =>
                        <p>{row}</p>
                    )}
                </div>
            </div>
                <div className="list">
                <h4>Our Product</h4>
                    {rows.map(element =>
                        <p>{row}</p>
                    )}
                </div>
                <div className="list">
                <h4>Follow Us</h4>
                    <div id="follow-icons">
                    <img src="https://img.icons8.com/material/24/000000/facebook-new.png"/>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/twitter.png"/>
                    <img src="https://img.icons8.com/ios/50/000000/youtube-squared-filled.png"/>
                    <img src="https://img.icons8.com/metro/26/000000/instagram-new.png"/>
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

                 p {
                    text-align: left;
                    margin-top: 0px;
                    padding-top: 16px;
                }

                #follow-icons img{
                    width: 25px;
                    margin: 2px;
                }
                
                #follow-icons{
                    text-align: left;
                }

                h4{
                    text-align: left;
                }
            `}</style>
        </div>
    );
}

export default Footer;