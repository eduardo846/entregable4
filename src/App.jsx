import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'
import './styles.css'

function App() {
const [users, setUsers]= useState([])
const [userSelected, setUserSelected]=useState(null)
useEffect(()=>{
axios.get('https://users-crud1.herokuapp.com/users/')
.then(res => setUsers(res.data))
},[])
const getUsers =()=>{
  axios.get('https://users-crud1.herokuapp.com/users/')
.then(res => setUsers(res.data))
}
const selectUser=(user)=>{
  setUserSelected(user)
}

const deselectUser = ()=>setUserSelected(null)

return (
    <div className="App">
      <h2>Usuarios</h2>
      <UsersForm 
      deselectUser={deselectUser}
      getUsers={getUsers} userSelected={userSelected}/>
      <UsersList users={users} selectUser={selectUser} getUsers={getUsers}/>
    </div>
  )
}

export default App
