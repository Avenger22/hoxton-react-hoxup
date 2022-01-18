import Conversation from '../../Components/Main/Conversation'

function SideChatList(props) {

    const {conversations} = props

    return (

        <>

            <ul>

                {/* <!-- This first item should always be present --> */}
                <li>
                    <button className="chat-button">
                        <div><h3>+ Start a new Chat</h3></div>
                    </button>
                </li>

                {
                    conversations.map(conv => 
                        
                            <Conversation />
                        
                        )

                }

            </ul>

        </>

    )

}

export default SideChatList