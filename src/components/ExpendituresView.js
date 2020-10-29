import React from 'react';
import ExpenditureCategoryCard from './ExpenditureCategoryCard';

function ExpendituresView() {
  return <div>
    <ExpenditureCategoryCard category="Food" />
    <ExpenditureCategoryCard category="Amazon" />
    <ExpenditureCategoryCard category="" />
    <ExpenditureCategoryCard category="" />
  </div>
}

export default ExpendituresView;
