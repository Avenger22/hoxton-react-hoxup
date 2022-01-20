import { useNavigate } from "react-router-dom"

function Conversation(props) {

    const {talkingToUser} = props
    const navigate = useNavigate()

    return (

        <>

            <li>
                <button className="chat-button" onClick={() => navigate(`/logged-in/${talkingToUser.id}`)}>
                    <img
                        className="avatar"
                        height="50"
                        width="50"
                        alt=""
                        src={talkingToUser.avatar}
                    />
                    <div>
                        {talkingToUser.firstName} {talkingToUser.lastName}
                        <p>Last message</p>
                    </div>
                </button>
            </li>

        </>

    )

}

export default Conversation