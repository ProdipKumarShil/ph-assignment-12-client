import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TrainerCard from './TrainerCard';

const TrainerPage = () => {
  const [trainers, setTrainers] = useState([])
  useEffect(() => {
    axios.get('/trainer').then(data => setTrainers(data.data)).catch(err => console.log(err))
  }, [])
  console.log(trainers.length)

  return (
    <div className='max-w-screen-xl mx-auto p-8'>
      <div className="grid grid-cols-3 gap-4">
        {
          trainers.map(trainer => <TrainerCard key={trainer._id} trainer={trainer}></TrainerCard>)
        }
      </div>
    </div>
  );
};

export default TrainerPage;