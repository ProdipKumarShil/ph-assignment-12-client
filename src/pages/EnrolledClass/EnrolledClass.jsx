import React, { useContext, useEffect, useState } from 'react';
import Top from '../../shared/Top/Top';
import { AuthContext } from '../../provider/AuthProvider';
import axios from 'axios';

const EnrolledClass = () => {
  const [classes, setClasses] = useState([])
  const [items, setItems] = useState([])
  const {user} = useContext(AuthContext)
  

  useEffect( () => {
    axios.get(`/classByMail?email=${user.email}`).then(data => setItems(data.data))
  },[])
  console.log(items)
  
  useEffect(() => {
    axios.get('/class').then(data => setClasses(data.data))
  }, [])
  
  return (
    <div>
      <Top title='Enrolled Class'></Top>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Price</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {
                items.map(item => <>
                  <tr>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item.img} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.classname}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {item._id}
                    </td>
                    <td>${item.price}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">Pay</button>
                    </th>
                  </tr>
                </>)
              }
              
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default EnrolledClass;