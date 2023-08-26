import ClientForm from './ClientUserForm'

export default function ClientUser() {
    const user = JSON.parse(localStorage.getItem('user'));

    if(user.role != 'Client'){
        return <h2>Error</h2>
    }

    return(
        <>
        <div className='container guideline_container'>
            <ClientForm />
        </div>
        </>
    )   
}
