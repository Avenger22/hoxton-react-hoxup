export default function NewChat({setModal}) {

    return (

        <>

            <div className='modal-wrapper'>

                <div className='modal'>

                    <button className='close-modal' onClick={() => setModal('')}>
                        X
                    </button>
                    
                    <h1>Start chat</h1>

                </div>

            </div>

        </>

    )

}