import React from 'react';
import { jobData } from './assets/JobData';
import Job from './Job';

function JobList(props) {
    return (
        <div>
           {jobData.map((job, index) =>
            <Job title={job.title}
              company={job.company}
              salary={job.salary}
              key={index}/>
          )}
        </div>
      );
}


export default JobList;