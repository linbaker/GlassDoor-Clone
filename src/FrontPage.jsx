import React from 'react';
import SignUp from './SignUp';
import WorksForYou from './WorksForYou'
import Explore from './Explore';

function FrontPage() {
    return (
        <div>
            <SignUp />
            <WorksForYou/>
            <Explore/>
        </div>
    );
}

export default FrontPage;