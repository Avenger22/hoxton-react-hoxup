export default function newChatBtn({setModal}) {

    return (

        <>
        
            {/* <!-- This first item should always be present --> */}
            <li>
                
                <button className="chat-button" onClick={function() {
                    setModal("start-chat")
                }}>

                    <div>

                        <h3>
                            + Start a new Chat
                        </h3>

                    </div>

                </button>

            </li>

        </>

    )

}