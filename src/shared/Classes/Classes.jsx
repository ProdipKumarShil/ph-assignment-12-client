import React, { useEffect, useState } from 'react';
import Header from '../../shared/Header/Header';
import ClassCard from './ClassCard';
import axios from 'axios';

const Classes = () => {

  const [classes, setClasses] = useState([])
  useEffect(() => {
    const url = '/class'
    axios.get(url).then(data => setClasses(data.data)).catch(err => console.log(err))
  }, [])
  
  return (
    <div className='max-w-screen-xl mx-auto p-8'>
      <Header subtitle={'Our Online'} title={'classes'}></Header>
      <div className="grid grid-cols-3 gap-4">
        {
          classes.slice(0, 6).map(item => <ClassCard key={item._id} singleClass={item}></ClassCard>)
        }
      </div>
    </div>
  );
};

export default Classes;