import React, { useEffect, useState } from 'react';
import Top from '../../shared/Top/Top';
import axios from 'axios';

const ManagePeople = () => {
  const [peoples, setPeoples] = useState([])
  useEffect(() => {
    axios.get('users').then(data => setPeoples(data.data))
  }, [])
  console.log(peoples[1])
  
  return (
    <div>
      <Top title="Manage People"></Top>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {peoples.map(people => <>
                <tr >
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={people.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{people.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {people.email}
                    <br />
                  </td>
                  <td>{people.role}</td>
                  <th className='grid grid-cols-1'>
                    <button className="btn btn-ghost btn-xs">Make Admin</button>
                    <button className="btn btn-ghost btn-xs">Make Instructors</button>
                  </th>
                </tr>
              </>)}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagePeople;