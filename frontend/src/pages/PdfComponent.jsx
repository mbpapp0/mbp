import React, {useState, useEffect} from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'

export default function PdfComponent() {
  
  const [loading, setLoading] = useState(false);
  
  const download = () => {
    const capture = document.querySelector('hello');
    setLoading(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoading(false);
      doc.save('save.pdf')
     
    })
    
}v
  
  return(
    <>
      <h3 className='hello'>Hello, world</h3>
      <button 
      onClick={download}
      disabled={loading}>{loading ? 'Loading' : 'Submit'}</button>
    </>
  )
}
