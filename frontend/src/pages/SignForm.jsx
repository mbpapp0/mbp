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
    

    </div>
  )
}
