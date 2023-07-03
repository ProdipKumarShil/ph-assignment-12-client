import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ClassesPageCard from './ClassesPageCard';
import useCardAnimation from '../../hooks/Aos';

const ClassesPage = () => {
  const [classes, setClasses] = useState([])
  useEffect(() => {
    const url = '/class'
    axios.get(url).then(data => setClasses(data.data)).catch(err => console.log(err))
  }, [])
  console.log(classes)
  
  useCardAnimation()
  return (
    <div className='max-w-screen-xl mx-auto p-8 grid grid-cols-2 gap-4'>
      {
        classes.map(singleClass => <ClassesPageCard singleClass={singleClass} key={singleClass._id}></ClassesPageCard>)
      }
    </div>
  );
};

export default ClassesPage;