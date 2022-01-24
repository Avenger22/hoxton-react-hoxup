// #region 'Importing'
import SideChatList from '../Components/Main/SideChatList'
import MainMessagesList from '../Components/Main/MainMessagesList'

import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
// #endregion

function MainMenu(props) {

    // #region 'State and Decounstructing Objects'
    const {messages, conversations, logOut, users, 
        currentUser, setConversations, setModal} = props

    const [currentConversation, setCurrentConversation] = useState(null)

    const params = useParams()
    const navigate = useNavigate()
    // #endregion

    // #region 'Use Effect on some things'
    useEffect(() => {
        if (currentUser === null) {
            navigate('/')
        }
      }, [currentUser, navigate]) //dependencies if currentUser changes then i want also this to depend

    useEffect(() => {
        if (params.conversationId) {
            fetch(
            `http://localhost:4000/conversations/${params.conversationId}?_embed=messages`
            )
            .then(resp => resp.json())
            .then(conversation => setCurrentConversation(conversation))
        }
    }, [params.conversationId]) //array of dependencies

    useEffect(() => {
        if (currentUser === null) { 
            return
        } //here is the current user is not set then we return nothing so we dont execute the useEffect below

        fetch(`http://localhost:4000/conversations?userId=${currentUser.id}`)
            .then(resp => resp.json())
            .then(conversations => setConversations(conversations))

        }, [currentUser])
    }
    // #endregion

    const usersIHaveNotTalkedToYet = users.filter(user => {
       
        if (currentUser && user.id === currentUser.id) return false
    
        for (const conversation of conversations) {
          if (conversation.userId === user.id) return false
          if (conversation.participantId === user.id) return false
        }
       
        return true

      })
    
      function createConversation (participantId) {

        fetch('http://localhost:4000/conversations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userId: currentUser.id,
            participantId: participantId
          })
        })
          .then(resp => resp.json())
          .then(newConversation => {
            setConversations([...conversations, newConversation])
            setModal('')
          })

      }

    if (currentUser === null) {
        return <h1>Not signed in...</h1>
    }

    return (

        <>

            <div className="main-wrapper">

                {/* <!-- Side Panel --> */}
                <aside>

                    {/* <!-- Side Header --> */}
                    <header className="panel">

                        <img
                            className="avatar"
                            width="50"
                            height="50"
                            src={currentUser.avatar}
                            alt=""
                        />
                        <h3>{currentUser.firstName}</h3>
                        <button onClick={() => logOut()}>Log Out</button>


                    </header>

                    {/* <!-- Search form --> */}
                    <form className="aside__search-container">

                        <input
                            type="search"
                            name="messagesSearch"
                            placeholder="Search chats"
                            value=""
                        />

                    </form>

                    {/* <!-- Side Chat List goes here. Check side-chat-list.html--><!--  --> */}
                    <SideChatList 
                        conversations = {conversations}
                        currentUser = {currentUser}
                        users = {users}
                    />

                </aside>

                {/* <!-- Main Chat Section --> */}

                {params.conversationId ? (

                <main className="conversation">

                    {/* <!-- Chat header --> */}
                    <header className="panel"></header>

                    {/* <!-- The Messages List will go here. Check main-messages-list.html--> */}
                    <ul className="conversation__messages">

                        <MainMessagesList 
                            messages = {messages}
                        />

                    </ul>

                    {/* <!-- Message Box --> */}
                    <footer>

                        <form className="panel conversation__message-box">

                            <input
                                type="text"
                                placeholder="Type a message"
                                rows="1"
                                value=""
                            />
                            
                            <button type="submit">

                                {/* <!-- This is the send button --> */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
                                    ></path>
                                </svg>

                            </button>

                        </form>

                    </footer>

                </main>

            ) : null}

            {modal === 'start-chat' ? (

                <div className='modal-wrapper'>

                    <div className='modal'>

                        <button className='close-modal' onClick={() => setModal('')}>
                            X
                        </button>

                        <h1>Start chat</h1>

                        {/* 
                        this modal should display all users
                        I have no conversations with yet ✅
                        */}

                        {usersIHaveNotTalkedToYet.length > 0 ? (

                        <ul>

                            {usersIHaveNotTalkedToYet.map(user => (

                            <li key={user.id}>
                                <button
                                    className='chat-button'
                                    onClick={() => {
                                        // clicking on one of those users
                                        // should start a conversation with them
                                        // how do we start a conversation?
                                        // - create a conversation on the server
                                        // - update conversations state
                                        createConversation(user.id)
                                    }}
                                >

                                <img
                                    className='avatar'
                                    height='50'
                                    width='50'
                                    alt=''
                                    src={user.avatar}
                                />

                                <div>
                                    <h3>
                                    {user.firstName} {user.lastName}
                                    </h3>
                                </div>

                                </button>

                            </li>

                            ))}

                        </ul>

                        ) : (

                        <p>No new person to talk to</p>

                        )}

                    </div>

                </div>

                ) : null}

            </div>

        </>

    )

}

export default MainMenu