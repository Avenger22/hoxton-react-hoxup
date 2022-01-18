function Login(props) {

    const {user} = props
    
    let number = Math.random()
    const url = 'https://robohash.org/' + number

    return (

        <>

            <li>

                <button className="user-selection">
                    <img
                        className="avatar"
                        width="50"
                        height="50"
                        src= {url}
                        alt=""
                    />
                    <h3>{user.firstName} {user.lastName}</h3>
                </button>

            </li>

        </>

    )

}

export default Login