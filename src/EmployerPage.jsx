import React from 'react';
import EmployerJoin from './EmployerJoin'
import Enhanced from './Enhanced'
import BrandAdvertising from './BrandAdvertising';
import AppDynamicsAd from './AppDynamicsAd';
import Header from './Header';
import Footer from './Footer';

function EmployerPage() {
    return (
        <div>
           <EmployerJoin/>
           <Enhanced/>
           <BrandAdvertising/>
           <AppDynamicsAd/>
        </div>
    );
}

export default EmployerPage;