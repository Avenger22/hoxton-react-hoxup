function Conversation(props) {

    const {conv} = props

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
                        <h3>{conv.}</h3>
                        <p>Last message</p>
                    </div>
                </button>
            </li>

        </>

    )

}

export default Conversation