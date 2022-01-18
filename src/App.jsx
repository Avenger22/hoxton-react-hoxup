// #region 'Importing'
import { Routes, Route, Navigate} from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

import MainMenu from './Pages/MainMenu'
import Login from './Pages/Login'
import Error from './Pages/Error'
// #endregion

function App() {

  // #region 'State Object'
  const [users, setUsers] = useState([])
  const [messages, setMessages] = useState([])

  const [conversations, setConversations] = useState([])
  const [modal, setModal] = useState('')
  // #endregion

  // #region 'Server Functions'
  function getUsersFromServer() {

    fetch('http://localhost:4000/users')
      .then(resp => resp.json())
      .then(usersFromServer => setUsers(usersFromServer))

  }

  function getMessagesFromServer() {

    fetch('http://localhost:4000/messages')
      .then(resp => resp.json())
      .then(messagesFromServer => setMessages(messagesFromServer))

  }

  function getConversationsFromServer() {

    fetch('http://localhost:4000/conversations')
      .then(resp => resp.json())
      .then(conversationsFromServer => setConversations(conversationsFromServer))

  }

  useEffect(getUsersFromServer, [])
  useEffect(getConversationsFromServer, [])
  useEffect(getMessagesFromServer, [])
  // #endregion

  // #region 'Returning Html'
  return (

      <>

        {
          // #region 'Routes of App'
        }
        <Routes>

          <Route
            index
            element={<Navigate replace to="/login" />}
          />

          <Route 
              path='*' 
              element = {<Error/>
          }>
          </Route>

          <Route 
            path='/main' 
            element = {<MainMenu 
            messages = {messages}
            conversations = {conversations}/>
          }>
          </Route>

          <Route 
            path='/login' 
            element = {<Login 
            users = {users}/>
          }>
          </Route>

        </Routes>
        {
          //#endregion
        }
  
      </>

  )
  // #region 'Returning Html'

}

export default App