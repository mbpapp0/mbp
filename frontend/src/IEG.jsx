import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'

export default function IEG() {
  const user = JSON.parse(localStorage.getItem('user'));
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  
  const download = () => {
    const capture = document.querySelector('.container');
    setLoading(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pagesize.getwidth();
      const componentHeight = doc.internal.pagesize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoading(false);
      doc.save('form.pdf')
     
    })
    
}
  
  
   const getClient = async () => {
        const response = await fetch(`https://mbp-server.onrender.com/api/clients/client/${id}`);
        const json = await response.json();
        setData(json[0]);
     
       if(response.ok){
       window.print();
       }
    }

  
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
      useEffect(() => {
        getClient();
    }, [])
    
    if(user.role != 'Branch User'){
        window.location.assign('/');
    }
