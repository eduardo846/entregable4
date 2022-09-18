import React from "react";
import axios from 'axios'
const UsersList = ({ users, selectUser, getUsers }) => {

  const deleteUser =(id)=>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(()=>getUsers())
  }

  return (
    <div>
      <h1>Lista de usuarios</h1>
      <ul className="users-container">
        {users.map((user) => (
          <li className="conten-list user-container" key={user.id}>
            <b className="textname ">
              {user.first_name} {user.last_name}
            </b>
            <hr />
            <div>
              <b className="text-uppercase textUemail">Correo</b>
              <div>
                <label htmlFor="">{user.email}</label>
              </div>
            </div>
            <div>
              <b className="text-uppercase textUemail">Cumpleaños</b>
              <div>
                <label htmlFor="">
                  <i className="fa-solid fa-gift"></i> {user.birthday}
                </label>
              </div>
            </div>
            <hr />
            <div className="button-container">
              <button onClick={()=>deleteUser(user.id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
              <button onClick={() => selectUser(user)}
              type="button"
              data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <i className="fa-solid fa-pen"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
