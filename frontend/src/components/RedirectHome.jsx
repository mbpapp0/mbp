import backButton from '../icons/back.png';

export default function RedirectHome() {

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