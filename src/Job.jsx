import React from 'react';
import PropTypes from "prop-types";
import {jobData} from './assets/JobData';
import NewMessageControl from './NewMessageControl';

function Job(props){
 
  return (
    <div>
         
    <h3>{props.title}</h3>
    <p><em>{props.company}</em></p>
    <p><em> $ {props.salary}</em></p>
    <button onClick={props.pressButton}>Add Message</button>
    <br/><br/>

    <hr/>

  
    </div>
  );
}

Job.propTypes = {
  title: PropTypes.string,
  company: PropTypes.string,
  salary: PropTypes.string,
  pressButton: PropTypes.func
};

export default Job;