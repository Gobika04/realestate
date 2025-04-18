import React, { useState } from 'react';
import AddProperty from './AddProperty';
import ViewProperty from '../ViewProperty';

const OwnerDashboard = () => {
  const [currentView, setCurrentView] = useState('addProperty'); // 'addProperty' or 'viewProperty'

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <div>
      <h1>Owner Dashboard</h1>
      <div>
        <button onClick={() => handleViewChange('addProperty')}>Add Property</button>
        <button onClick={() => handleViewChange('viewProperty')}>View Property</button>
      </div>

      {currentView === 'addProperty' && <AddProperty />}
      {currentView === 'viewProperty' && <ViewProperty />}
    </div>
  );
};

export default OwnerDashboard;
