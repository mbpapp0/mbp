import { useEffect, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

export default function SignForm() {
  const [sign, setSign] = useState();
  const [signDate, setSignDate] = useState('')
  const [image, setImage] = useState();
  
  const handleClear = () => {
        sign.clear();
        setImage('');
        setSignature('');
    }

    const handleSave = () => {
        const saved = sign.getTrimmedCanvas().toDataURL('image/png');

        if(saved){
            setImage(saved);
            sign.clear();

            setSignature(saved);
        }

    }   
  
  return(
    <div>
    <label>Signature</label>
       <div style={{border: '2px solid black', width: '12rem', height: '96px'}} className='sign_pad'>    
          <SignatureCanvas 
              ref={data => setSign(data)}
                canvasProps={{width: 287, height: 92, className: 'sigCanvas'}}
                 />

                 { image && <div className='sign_preview'>
                      <img src={image} alt='signature' />
                   </div> }
                </div>
                    <div className='sign_buttons'>
                        <button className='button' type='button' onClick={handleSave}>Save</button>
                        <button className='button' type='button' onClick={handleClear}>Clear</button>
                    </div>

    </div>
  )
}
