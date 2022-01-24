import Conversation from '../../Components/Main/Conversation'
import NewChatBtn from './NewChatBtn'

function SideChatList(props) {

    const randomId = Math.random()
    const {conversations, currentUser, users, setModal} = props

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

                <NewChatBtn
                    key={randomId}
                    setModal = {setModal}
                />

                {
                    conversations.map(conversation => {

                        // const storeId = talkingConversation(Conversation)

                        return <Conversation 
                            talkingToUser = {talkingConversation(conversation)}
                            key = {talkingConversation(conversation).id}
                        />
                        
                    })  

                }

            </ul>

        </>

    )

}

export default SideChatList