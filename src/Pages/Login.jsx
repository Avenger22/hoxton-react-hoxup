import User from '../Components/Login/User'
import UserButton from '../Components/Login/UserButton'


function Login(props) {

    const {users} = props 

    return (

        <>

            <div className="main-wrapper login">

                <section className="login-section">

                    <h2>Choose your user!</h2>

                    <ul>

                        {users.map(user => 

                                <User 
                                    user = {user}
                                />
                        
                            )

                        }

                        <UserButton />

                    </ul>

                </section>

            </div>

        </>

    )

}

export default Login