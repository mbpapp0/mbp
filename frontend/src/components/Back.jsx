import backButton from '../icons/back.png';

export default function Back() {

    const back = () => {
      window.history.go(-1)
    }


    return(
        <div>
            <div onClick={back}>
                <img src={backButton} style={{width: '1.5rem', margin: '0.5rem'}}/>
            </div>
        </div>
    )
}
