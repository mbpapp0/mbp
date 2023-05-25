import React from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { useState } from 'react'

export default function Signature(){
    const [sign, setSign] = useState();

    const [image, setImage] = useState();

    const handleClear = () => {
        sign.clear();
    }

    const handleSave = () => {
        const saved = sign.getTrimmedCanvas().toDataURL('image/png');

        if(saved){
            setImage(saved);
            sign.clear();
        }
    }   

    return(
        <div>

            <div style={{border: '2px solid black', width: '12rem', height: '96px', margin: '2rem'}}>
                <SignatureCanvas 
                ref={data => setSign(data)}
                canvasProps={{width: 288, height: 92, className: 'sigCanvas'}}
                />
            </div>
            <button className='button' onClick={handleClear}>Clear</button>
            <button className='button' onClick={handleSave}>Save</button>
            <img src={image} />
        </div>
    )
}