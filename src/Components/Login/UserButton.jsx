function UserButton(props) {

    const {setModal} = props

    return (

        <>

            <li>
                <button className="user-selection" onClick={function () {
                    setModal('newUser')
                }}>
                    <h3>+ Add a new user</h3>
                </button>
            </li>

        </>
        
    )

}

export default UserButton