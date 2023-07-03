import React, { useEffect, useState } from 'react';
import Header from '../../shared/Header/Header';
import InstructorsCard from './InstructorsCard';
import axios from 'axios';

const Instructors = () => {
  const [trainers, setTrainers] = useState([])
  useEffect(() => {
    axios.get('/trainer').then(data => setTrainers(data.data)).catch(err => console.log(err))
  } ,[])

  return (
    <div className='max-w-screen-xl mx-auto p-8'>
      <Header subtitle={'Meet Our'} title={'trainer'}></Header>
      <div className="grid grid-cols-3 gap-4">
        {/* <InstructorsCard ></InstructorsCard> */}
        {
          trainers.map(trainer => <InstructorsCard key={trainer._id} trainer={trainer}></InstructorsCard>)
        }
      </div>
    </div>
  );
};

export default Instructors;