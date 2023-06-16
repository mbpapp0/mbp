import { useEffect, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import Back from '../components/Back';
import { useParams } from 'react-router-dom';

export default function SignForm() {
  const { id } = useParams();
  
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('Approved');
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
  
  const getChildrenIds = async() => {
   const response = await fetch(`https://mbp-server.onrender.com/api/clients/${id}`);
    const json = await response.json();
  }
  
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
 
            setSignature2(saved);
        }

    }   
    
 const approveForm = async(e) => {
   e.preventDefault();
   setLoading(true);
   
  if(!signDate || !signature || !signDate1 || !signature1 || !signDate2 || !signature2){
   setLoading(false);
   return;
  }
   
   
  const form = {
   status,
   detOfficialSignDate: signDate,
   detOfficialSignature: signature,
   conOfficialSignDate: signDate1,
   conOfficialSignature: signature1,
   folOfficialSignDate: signDate2,
   folOfficialSignature: signature2
  }
  
  const response = await fetch(`https://mbp-server.onrender.com/api/clients/edit/${id}`, {
            method: 'PUT',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
    });
   
   if(response.ok){
     window.location.assign('/');
   }
   
   setLoading(false);
  
}
 
 useEffect(() => {
   
 },[])
  
  return(
    <div className='container'>
      <Back />
      <form>
      <div className='signform'>
        <label>Determining Official’s Signature:</label>
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
             
          <div className='flex align' style={{margin: '0'}}>
            <label>
                Date:
              <input type="date" required value={signDate} onChange={(e) => setSignDate(e.target.value)} style={{ width: '10.5rem'}} />
              </label>
           </div>

        </div>


             
            
        
        <div className='signform'>
          <label>Confirming Official’s Signature: </label>
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

          <div className='flex align' style={{margin: '0'}}>
           <label>
               Date:
             <input type="date" required value={signDate1} onChange={(e) => setSignDate1(e.target.value)} style={{ width: '10.5rem'}} />
              </label>
            </div>


        </div>
             
             
        <div className='signform'>
          <label>Follow Up Official’s Signature:</label>
          <div style={{border: '2px solid black', width: '12rem', height: '96px'}} className='sign_pad'>    
            <SignatureCanvas 
              ref={data => setSign2(data)}
              canvasProps={{width: 287, height: 92, className: 'sigCanvas'}}
             />

            { image2 && <div className='sign_preview'>
                <img src={image2} alt='signature' />
             </div> }
          </div>
           
          <div className='sign_buttons'>
            <button className='button' type='button' onClick={handleSave2}>Save</button>
            <button className='button' type='button' onClick={handleClear2}>Clear</button>
          </div>
             
          <div className='flex align' style={{margin: '0'}}>
           <label>
               Date:
             <input type="date" required value={signDate2} onChange={(e) => setSignDate2(e.target.value)} style={{ width: '10.5rem'}} />
              </label>
           </div>

        </div>

        <button className='button radius' onClick={approveForm} disabled={loading}>{ loading ? 'Loading...' : 'Approve Form'}</button>
      </form>
    </div>
  )
}
