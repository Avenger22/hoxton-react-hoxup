import '../Modals/NewUser.css'

export default function NewUser({setModal, users, setUsers}) {

    function handleSubmitNewUser(event) {

        const newObject = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            phoneNumber: event.target.phoneNumber.value,
            avatar: "https://avatars.dicebear.com/api/avataaars/EdPutans.svg"  
        }

        fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(newObject)
        })
        .then(responseItem => responseItem.json())

        const newArray = [...users, newObject]
        setUsers(newArray)

    }

    return (

        <>

            <div className="modal-wrapper">
                
                <div className="modal">

                    <div className="header-user-modal">
                        <h3>Enter your details</h3>
                    </div>

                    <button className="btn-remove" onClick={function () {
                        setModal('')
                    }}>
                        X
                    </button>

                    <form className="form-newUser" onSubmit={function (event) {
                        handleSubmitNewUser(event)
                    }}>

                        <div className="firstName-wrapper">
                            <span className="span-user-1">First Name:</span>
                            <input type="text" name="firstName" defaultValue='' required={true} placeholder="Enter Name: "/>
                        </div>

                        <div className="lastName-wrapper">
                            <label>Last Name:</label>
                            <input type="text" name="lastName" defaultValue='' required={true} placeholder="Enter SurName: "/>
                        </div>

                        <div className="phoneNumber-wrapper">
                            <label>Phone Number:</label>
                            <input type="text" name="phoneNumber" defaultValue='' required={true} placeholder="Enter Phone: "/>
                        </div>

                        <button className="btn-create">
                            Create User
                        </button>

                    </form>

                </div>

            </div>

        </>

    )

}