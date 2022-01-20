import Conversation from '../../Components/Main/Conversation'
import NewChatBtn from './NewChatBtn'

function SideChatList(props) {

    const {conversations, currentUser, users} = props

    function talkingConversation(conversation) {
        // which id am I talking to
        const talkingToId =
        currentUser.id === conversation.userId
        ? conversation.participantId
        : conversation.userId

        // what are their details?
        return users.find(user => user.id === talkingToId)

    }

    return (

        <>

            <ul>

                <NewChatBtn />

                {
                    conversations.map(conversation => {
                        
                        return <Conversation 
                            talkingToUser = {talkingConversation(conversation)}
                            // key = {talkingToUser.id}
                        />
                        
                    })  

                }

            </ul>

        </>

    )

}

export default SideChatList