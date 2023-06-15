import { useEffect, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

export default function SignForm() {
  const [sign, setSign] = useState();
  const [signDate, setSignDate] = useState('')
  const [image, setImage] = useState();
  const [signature, setSignature] = useState('');
  
  const [sign1, setSign1] = useState();
  const [signDate1, setSignDate1] = useState('')
  const [image1, setImage1] = useState();
  const [signature1, setSignature1] = useState('');
  
  const [sign2, setSign2] = useState();
  const [signDate2, setSignDate2] = useState('')
  const [image2, setImage2] = useState();
  const [signature2, setSignature2] = useState('');
  
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
    
    
    const handleClear1 = () => {
        sign1.clear();
        setImage1('');
        setSignature1('');
    }

    const handleSave1 = () => {
        const saved = sign1.getTrimmedCanvas().toDataURL('image/png');

        if(saved){
            setImage1(saved);
            sign1.clear();

            setSignature1(saved);
        }

    }   
    
    const handleClear2 = () => {
        sign2.clear();
        setImage2('');
        setSignature2('');
    }

    const handleSave2 = () => {
        const saved = sign2.getTrimmedCanvas().toDataURL('image/png');

        if(saved){
            setImage2(saved);
            sign2.clear(); 

            setSignature3(saved);
        }

    }   
  
  return(
    <div>
    
      <div className='signform'>
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
             
             
        // Sign Two
        
        <div className='signform'>
          <label>Signature</label>
          <div style={{border: '2px solid black', width: '12rem', height: '96px'}} className='sign_pad'>    
            <SignatureCanvas 
              ref={data => setSign1(data)}
              canvasProps={{width: 287, height: 92, className: 'sigCanvas'}}
             />

            { image1 && <div className='sign_preview'>
                <img src={image1} alt='signature' />
             </div> }
          </div>
           
          <div className='sign_buttons'>
            <button className='button' type='button' onClick={handleSave1}>Save</button>
            <button className='button' type='button' onClick={handleClear1}>Clear</button>
          </div>

        </div>
             

    </div>
  )
}
