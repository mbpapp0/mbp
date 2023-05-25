import backButton from '../icons/back.png';

export default function Back() {

    const back = () => {
        history.back();
    }


    return(
        <div>
            <div onClick={back}>
                <img src={backButton} style={{width: '1.5rem', margin: '0.5rem'}}/>
            </div>
        </div>
    )
}