import React, { useState, useEffect } from 'react';
import api from './services/api';

const Users = () => {
  const [usersList, setUsersList] = useState([])
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const getUsers = await api.get('users')
      setUsersList(getUsers.data)
      setFilteredList(getUsers.data);

    }
    loadData()

  }, []);

  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const filtered = usersList.filter(user => user.name.toLowerCase().includes(inputValue));
    setFilteredList(filtered);
  }

  return (
    <div className="App">
      <h1>Ficha de dados dos clientes</h1>
      <div className='form'>
        <form >
          <input type='text'
            placeholder='Pesquisar...'
            onChange={handleChange}
          />
          <i className="fa fa-search search-icon" ></i>
        </form>
      </div>
      <div  className='main-info-cards'>
        {filteredList.map(users =>
          <div key={users.id} className='info-cards'>
            <h3 >Dados do cliente</h3>
            <p >Nome: {users.name}</p>
            <p>Sobrenome: {users.username}</p>
            <p>Email: {users.email}</p>
            <h3>Endereço</h3>
            <p>Rua: {users.address.street}</p>
            <p>Número: {users.address.suite}</p>
            <p>Cidade: {users.address.city}</p>
            <p>Cep: {users.address.zipcode}</p>
            <h3>Contatos</h3>
            <p>Telefone: {users.phone}</p>
            <p>Website: {users.website}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;
