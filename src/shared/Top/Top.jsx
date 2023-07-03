import React from 'react';

const Top = ({title}) => {
  return (
    <>
    <p className='text-5xl font-bold text-primary mb-4'>{title}</p>
    <hr className='border-gray-500' />
    </>
  );
};

export default Top;