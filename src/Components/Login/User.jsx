function Login(props) {

    const {user, logIn} = props
    
    return (

        <>

            <li>

                <button className="user-selection" onClick={function () {
                    logIn(user)
                }}>

                    <img
                        className="avatar"
                        width="50"
                        height="50"
                        src= {user.avatar}
                        alt=""
                    />

                    <h3>{user.firstName} {user.lastName}</h3>

                </button>

            </li>

        </>

    )

}

export default Login