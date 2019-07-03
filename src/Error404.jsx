import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



function Error404(props){
    return(
        <div id ="errorContainer">
            <h2>The page {props.location.pathname} does not exist!</h2>
            <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
            <style jsx>{`
        #errorContainer {
            height: 40vh;
            color: orange;
            font-size: 2em;
            background-color: #ffffff30;
            padding-top: 20%;
        }
        `}  
        </style>
        </div>
    );
}

Error404.propTypes = {
    location: PropTypes.object
  };

export default Error404;