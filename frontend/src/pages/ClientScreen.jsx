import ClientForm from './ClientForm'

export default function ClientScreen() {
    const user = JSON.parse(localStorage.getItem('user'));

    if(user.role != 'Branch User'){
        return <Error />
    }

    return(
        <>
        <div className='container guideline_container'>
            <ClientForm />
        </div>
        </>
    )   
}