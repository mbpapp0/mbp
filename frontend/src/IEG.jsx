import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './IEG.css';

export default function IEG() {
  const user = JSON.parse(localStorage.getItem('user'));
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [branchName, setBrancName] = useState("")
  
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

    return(
    <div>
      <h3 clasName="center">{branchName} Branch.</h3>
      <h3 className="center">CACFP Meal Benefit Income Eligibility Statement</h3>
  <form>
    <table className="print_table">
      <tbody>
        
        <tr>
           <td colSpan={7} className="part_header">
    PART I: Child(ren) or Adult enrolled to receive day care
          </td>
         </tr>
         <tr>
           <td rowSpan={2} className="name">
    <strong>
      <p>Name: (Last, First and Middle Initial)</p>
    </strong>
  </td>
  <td rowSpan={2} className="case_number">
    SNAP, TANF, or FDPIR case number, or Client ID number for children only. All the above, or SSI or Medicaid case number for Adults. <strong>Note:</strong> Do not use EBT numbers. Write case number and proceed to Part III.
  </td>
  <td colSpan={5}>
    <strong>Children in Head Start, foster care and children who meet the definition of migrant, runaway, or homeless are eligible for free meals. Check () all that apply. </strong>
    <span id="red">(See definitions in FAQs)</span>
  </td>
</tr>

<tr>
  <td className="center"><span id="highlighted">Head Start</span></td>
  <td className="center"><span id="highlighted">Foster Child</span></td>
  <td className="center"><span id="highlighted">Migrant</span></td>
  <td className="center"><span id="highlighted">Runaway</span></td>
  <td className="center"><span id="highlighted">Homeless</span></td>
</tr>

<tr className="check_td">
        <td><input type="text" value={data.childOneName} /></td>
        <td><input type="text" value={data.childOneID} /></td>
        <td><input type="checkbox" checked={data.childOneHeadStart}/></td>
        <td><input type="checkbox" checked={data.childOneForsterChild}/></td>
         <td><input type="checkbox" checked={data.childOneMigrant}/></td>
        <td><input type="checkbox" checked={data.childOneRunaway}/></td>
        <td><input type="checkbox" checked={data.childOneHomeless}/></td>
       
      </tr>
      <tr className="check_td">
        <td><input type="text" value={data.childTwoName} /></td>
<td><input type="text" value={data.childTwoID} /></td>
<td><input type="checkbox" checked={data.childTwoHeadStart}/></td>
<td><input type="checkbox" checked={data.childTwoForsterChild}/></td>
<td><input type="checkbox" checked={data.childTwoMigrant}/></td>
<td><input type="checkbox" checked={data.childTwoRunaway}/></td>
<td><input type="checkbox" checked={data.childTwoHomeless}/></td>
      </tr>
      <tr className="check_td">
         <td><input type="text" value={data.childThreeName} /></td>
<td><input type="text" value={data.childThreeID} /></td>
<td><input type="checkbox" checked={data.childThreeHeadStart}/></td>
<td><input type="checkbox" checked={data.childThreeForsterChild}/></td>
<td><input type="checkbox" checked={data.childThreeMigrant}/></td>
<td><input type="checkbox" checked={data.childThreeRunaway}/></td>
<td><input type="checkbox" checked={data.childThreeHomeless}/></td>
      </tr>
      <tr className="check_td">
        <td><input type="text" value={data.childFourName} /></td>
<td><input type="text" value={data.childFourID} /></td>
<td><input type="checkbox" checked={data.childFourHeadStart}/></td>
<td><input type="checkbox" checked={data.childFourForsterChild}/></td>
<td><input type="checkbox" checked={data.childFourMigrant}/></td>
<td><input type="checkbox" checked={data.childFourRunaway}/></td>
<td><input type="checkbox" checked={data.childFourHomeless}/></td>
      </tr>
      <tr className="check_td">
       <td><input type="text" value={data.childFiveName} /></td>
<td><input type="text" value={data.childFiveID} /></td>
<td><input type="checkbox" checked={data.childFiveHeadStart}/></td>
<td><input type="checkbox" checked={data.childFiveForsterChild}/></td>
<td><input type="checkbox" checked={data.childFiveMigrant}/></td>
<td><input type="checkbox" checked={data.childFiveRunaway}/></td>
<td><input type="checkbox" checked={data.childFiveHomeless}/></td>
      </tr>

      </tbody>
    </table>
  </form>
    </div>
  )
  
}

