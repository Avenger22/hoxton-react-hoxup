import User from '../Components/Login/User'
import UserButton from '../Components/Login/UserButton'


function Login(props) {

    const {users, setModal, logIn} = props 

    return (

        <>

            <div className="main-wrapper login">

                <section className="login-section">

                    <h2>Choose your user!</h2>

                    <ul>

                        {users.map(user => 

                                <User 
                                    key = {user.id}
                                    user = {user}
                                    logIn = {logIn}
                                />
                        
                            )

                        }

                        <UserButton 
                            setModal = {setModal}
                        />

                    </ul>

                </section>

            </div>

        </>

    )

}

export default Login