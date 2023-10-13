import backButton from '../icons/back.png';

export default function RedirectHome() {
    // This redirects the user to the homepage 
    const back = () => {
        window.location.assign('/');
    }


    return(
        <div>
            <div onClick={back}>
                <img src={backButton} style={{width: '1.5rem', margin: '0.5rem'}}/>
            </div>
        </div>
    )
}
