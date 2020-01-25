import React, { useState, useEffect } from 'react';
import api from './services/api';


const Users = () => {
  const [usersList, setUsersList] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const getUsers = await api.get('users');
      setUsersList(getUsers.data)

    }
    loadData()

  }, []);
  console.log(usersList)

  return (
    <div className="App">
      <h1>Lista de contatos</h1>
      <div className='form'>
        <form >
          <input type='text' placeholder='Pesquisar...' />
          <button>Enviar</button>
        </form>
      </div>
      <div className='main-info-cards'>
        {usersList.map((users, name) =>
          <div className='info-cards' key={name.name}>
            <h3>Dados do cliente</h3>
            <p >Name: {users.name}</p>
            <p>Username: {users.username}</p>
            <p>Email: {users.email}</p>
            <h3>Endereço</h3>
            <p>street: {users.address.street}</p>
            <p>Suite: {users.address.suite}</p>
            <p>City: {users.address.city}</p>
            <p>Zipcode: {users.address.zipcode}</p>
            <h3>Contatos</h3>
            <p>Phone: {users.phone}</p>
            <p>website: {users.website}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;
