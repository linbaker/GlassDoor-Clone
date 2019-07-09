import React from 'react';
import PropTypes from "prop-types";
import {jobData} from './assets/JobData'

function Job(props){
  console.log(props);
  return (
    <div>
         
    <h3>{props.title}</h3>
    <p><em>{props.company}</em></p>
    <p><em>{props.salary}</em></p>
    <br/><br/>
    <hr/>

  
    </div>
  );
}

Job.propTypes = {
  title: PropTypes.string,
  company: PropTypes.string,
  salary: PropTypes.number
};

export default Job;