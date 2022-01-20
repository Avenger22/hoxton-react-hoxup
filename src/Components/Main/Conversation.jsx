function Conversation(props) {

    const {talkingToUser} = props
    
    return (

        <>

            <li>
                <button className="chat-button">
                    <img
                        className="avatar"
                        height="50"
                        width="50"
                        alt=""
                        src="https://robohash.org/2"
                    />
                    <div>
                        <h3>Tin Man</h3>
                        <p>Last message</p>
                    </div>
                </button>
            </li>

        </>

    )

}

export default Conversation