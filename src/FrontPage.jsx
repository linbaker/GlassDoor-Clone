import React from 'react';
import SignUp from './SignUp';
import WorksForYou from './WorksForYou'
import Explore from './Explore';
import Header from './Header';

function FrontPage() {
    return (
        <div>
             <Header/>
            <SignUp />
            <WorksForYou/>
            <Explore/>
        </div>
    );
}

export default FrontPage;