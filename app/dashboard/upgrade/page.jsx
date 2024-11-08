import React from 'react';

import planData from '@/utils/planData';
import PlanItemCard from './_components/PlanItemCard';

function Upgrade() {
  return (
    <div className='p-10'>
      <h2 className='font-bold text-3xl text-center'>Upgrade Today</h2>

      <h2 className=' bg-purple-200 rounded-xl p-6 mt-10 text-center'>
        {' '}
        Unfortunately, we are still working on adding member benefits. For now
        the app will remain free version only
      </h2>

      <h2 className=' p-10 mt-16 text-center  text-gray-500'>
        <strong className='text-black'>
          BUT DO NOT FEAR once its ready, user can upgrade to monthly plan to
          access the ability to create unlimited interviews, other benefits and
          more...
        </strong>
      </h2>
      {/*
      <div className='mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8'>
          {planData.map((plan, index) => (
            <PlanItemCard plan={plan} key={index} />
          ))}
        </div>
      </div>*/}
    </div>
  );
}

export default Upgrade;
