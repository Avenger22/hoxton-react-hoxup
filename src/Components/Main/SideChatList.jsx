import Conversation from '../../Components/Main/Conversation'
import NewChatBtn from './NewChatBtn'

function SideChatList(props) {

    const {conversations, currentUser, users} = props

    return (

        <>

            <ul>

                <NewChatBtn />

                {
                    conversations.map(conversation => {

                        // which id am I talking to
                        const talkingToId =
                        currentUser.id === conversation.userId
                        ? conversation.participantId
                        : conversation.userId

                        // what are their details?
                        const talkingToUser = users.find(user => user.id === talkingToId)
                        
                            // <Conversation 
                            //     talkingToUser = {talkingToUser}
                            // />
                        
                    })  

                }

            </ul>

        </>

    )

}

export default SideChatList