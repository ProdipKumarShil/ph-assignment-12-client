import React from 'react';

const Header = ({title, subtitle}) => {
  return (
    <div className='mx-auto text-center my-6'>
      <p className='text-white'>{subtitle}</p>
      <p className='text-primary italic uppercase font-bold text-4xl'>_____{title}_____</p>
    </div>
  );
};

export default Header;