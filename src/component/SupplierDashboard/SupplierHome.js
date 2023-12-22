import React from 'react'
import UpcomingProject from './UpcomingProject.js'
import CompletedProject from './CompletedProject';
import OngoingProject from './OngoingProject.js';
const SupplierHome = () => {
  return (
    <div>
      <UpcomingProject/>
      <CompletedProject/>    
      <OngoingProject/>
    
    
    </div>

  )
}

export default SupplierHome