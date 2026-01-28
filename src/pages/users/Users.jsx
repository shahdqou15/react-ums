
import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function Users() {
  const [users, setUser] = useState([]);
  const [error, setError] = useState('');
  const [isLouder, setLouder] = useState(true);

  const getUsers = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BURL}/users`);
      console.log(response.data.users);
      setUser(response.data.users);

    } catch (error) {

      setError("error!!! , please try again");
    } finally {
      setLouder(false);
    }


  }

  useEffect(() => {
    getUsers();
  }, [])

  if (isLouder) {
    return <>
     <div><span className="loader"></span></div> 
    </>
  }
  if (error) {
    return <h3 className='alert alert-danger'>{error}</h3>
  }

  return (
    <>
      <div className="users text-center py-4">
        <div className="container">
          <div className="row g-5">
            {
              users.map((user) =>
                <div className="col-md-3 bg-success mx-2">
                  <h3>{user.name}</h3>
                  <p>{user.age}</p>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}
