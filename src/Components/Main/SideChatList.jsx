import Conversation from '../../Components/Main/Conversation'
import NewChatBtn from './NewChatBtn'

function SideChatList(props) {

    const {conversations, currentUser, users} = props

    function talkingConversation({ participantId, userId, id }) {

        const isCurrentUserSameAsUserId = currentUser.id === userId;

        const talkingToId = isCurrentUserSameAsUserId
            ? participantId
            : userId;

        const talkingToUser = users.find((user) => user.id === talkingToId);

        return talkingToUser
    }

    return (

        <>

            <ul>

                <NewChatBtn />

                {
                    conversations.map(({ participantId, userId, id }) => {
                        
                        return <Conversation 
                            talkingToUser = {talkingConversation({ participantId, userId, id })}
                            id = {id}
                            key = {id}
                        />
                        
                    })  

                }

            </ul>

        </>

    )

}

export default SideChatList