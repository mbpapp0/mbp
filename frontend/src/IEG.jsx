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
      <h3 className="center">{branchName} Branch.</h3>
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
        <td><input type="text" className="name_input" value={data.childOneName} /></td>
        <td><input type="text" className="name_input"  value={data.childOneID} /></td>
        <td><input type="checkbox" checked={data.childOneHeadStart}/></td>
        <td><input type="checkbox" checked={data.childOneForsterChild}/></td>
         <td><input type="checkbox" checked={data.childOneMigrant}/></td>
        <td><input type="checkbox" checked={data.childOneRunaway}/></td>
        <td><input type="checkbox" checked={data.childOneHomeless}/></td>
       
      </tr>
      <tr className="check_td">
        <td><input type="text" className="name_input"  value={data.childTwoName} /></td>
<td><input type="text" className="name_input" value={data.childTwoID} /></td>
<td><input type="checkbox" checked={data.childTwoHeadStart}/></td>
<td><input type="checkbox" checked={data.childTwoForsterChild}/></td>
<td><input type="checkbox" checked={data.childTwoMigrant}/></td>
<td><input type="checkbox" checked={data.childTwoRunaway}/></td>
<td><input type="checkbox" checked={data.childTwoHomeless}/></td>
      </tr>
      <tr className="check_td">
         <td><input type="text" className="name_input" value={data.childThreeName} /></td>
<td><input type="text" className="name_input" value={data.childThreeID} /></td>
<td><input type="checkbox" checked={data.childThreeHeadStart}/></td>
<td><input type="checkbox" checked={data.childThreeForsterChild}/></td>
<td><input type="checkbox" checked={data.childThreeMigrant}/></td>
<td><input type="checkbox" checked={data.childThreeRunaway}/></td>
<td><input type="checkbox" checked={data.childThreeHomeless}/></td>
      </tr>
      <tr className="check_td">
        <td><input type="text" className="name_input"  value={data.childFourName} /></td>
<td><input type="text" className="name_input"  value={data.childFourID} /></td>
<td><input type="checkbox" checked={data.childFourHeadStart}/></td>
<td><input type="checkbox" checked={data.childFourForsterChild}/></td>
<td><input type="checkbox" checked={data.childFourMigrant}/></td>
<td><input type="checkbox" checked={data.childFourRunaway}/></td>
<td><input type="checkbox" checked={data.childFourHomeless}/></td>
      </tr>
      <tr className="check_td">
       <td><input type="text" className="name_input" value={data.childFiveName} /></td>
<td><input type="text" className="name_input" value={data.childFiveID} /></td>
<td><input type="checkbox" checked={data.childFiveHeadStart}/></td>
<td><input type="checkbox" checked={data.childFiveForsterChild}/></td>
<td><input type="checkbox" checked={data.childFiveMigrant}/></td>
<td><input type="checkbox" checked={data.childFiveRunaway}/></td>
<td><input type="checkbox" checked={data.childFiveHomeless}/></td>
      </tr>

              
      <tr>
  <td colSpan={7} className="part_header">
    PART II: Report income for ALL Household Members (Skip this step if participant is categorically eligible as documented in Part I.) Are you unsure what income to include here? Flip the page and review the charts titled “Sources of Income” for more information.
  </td>
</tr>

<tr>
  <td colSpan={3} className="no_right">
    <strong><span id="highlighted">A. Child Income</span><sup>1</sup></strong> Sometimes children in the household earn or receive income. Please indicate the TOTAL income received by child household members listed in PART I here.
  </td>
  <td colSpan={4} className="no_left">
    <div>
      <label className="block"><span id="highlighted">Child Income/How often?</span></label>
      <input type="number" className="underline_input" value={data.childIncome}/>/<input type="text" className="underline_input" value={data.childIncomeFreq}/>
    </div>
  </td>
</tr>

<tr>
  <td colSpan={7}>
    <strong>
      <span id="highlighted">B. Other Household Members</span>
      <sup>1</sup>
      List all household members (including yourself) not listed in Part I even if they do not receive income. For each Household Member listed, if they do receive income, report total gross income (before taxes) for each source in whole dollars (no cents) only. If they do not receive income from any source, write ‘0’. If you enter “0” or leave any field blank you are certifying (promising) there is no income to report.
    </strong>
  </td>
</tr>

<tr className="size">
  <td colSpan={3}>Name of Other Household Members (First and Last)</td>
  <td className="padding">1. Earnings from work before deductions/How Often</td>
  <td className="padding">2. Welfare, child support, alimony / How Often</td>
  <td className="padding">3. Social Security, pensions, retirement / How Often</td>
  <td className="padding">4. All other income / How Often</td>
</tr>

<tr className="no_border">
  <td colSpan={3}>1. <input type="text" className="underline_input" value={data.HouseholdMemberOneName || '  '}/></td>
  <td>$<input type="number" className="underline_input" value={data.HouseholdMemberOneWorkEarnings || 0} />/<input type="text" className="underline_input" value={data.memberOneIncomeFreq} /></td>
  <td>$<input type="number" className="underline_input" value={data.HouseholdMemberOneWelfare_Alimony_CS  || 0}/>/<input type="text" className="underline_input" value={data.memberOneIncomeFreq} /></td>
  <td>$<input type="number" className="underline_input" value={data.HouseholdMemberOneSSPR || 0} />/<input type="text" className="underline_input" value={data.memberOneIncomeFreq} /></td>
  <td>$<input type="number" className="underline_input"  value={data.HouseholdMemberOneOther || 0} />/<input type="text" className="underline_input" value={data.memberOneIncomeFreq} /></td>
</tr>

<tr className="no_border">
  <td colSpan={3}>2. <input type="text" className="underline_input" value={data.HouseholdMemberTwoName || '  '}/></td>
  <td>$<input type="number" className="underline_input" value={data.HouseholdMemberTwoWorkEarnings || 0} />/<input type="text" className="underline_input" value={data.HouseholdMemberTwoName ? data.memberTwoIncomeFreq : ""} /></td>
  <td>$<input type="number" className="underline_input" value={data.HouseholdMemberTwoWelfare_Alimony_CS  || 0}/>/<input type="text" className="underline_input" value={data.HouseholdMemberTwoName ? data.memberTwoIncomeFreq: ""} /></td>
  <td>$<input type="number" className="underline_input" value={data.HouseholdMemberTwoSSPR || 0} />/<input type="text" className="underline_input" value={data.HouseholdMemberTwoName ? data.memberTwoIncomeFreq : ""} /></td>
  <td>$<input type="number" className="underline_input"  value={data.HouseholdMemberTwoOther || 0} />/<input type="text" className="underline_input" value={data.HouseholdMemberTwoName ? data.memberTwoIncomeFreq : ""} /></td>
</tr>

<tr className="no_border">
  <td colSpan={3}>3. <input type="text" className="underline_input" value={data.HouseholdMemberThreeName || '  '}/></td>
  <td>$<input type="number" className="underline_input" value={data.HouseholdMemberThreeWorkEarnings || 0} />/<input type="text" className="underline_input" value={data.HouseholdMemberThreeName ? data.memberThreeIncomeFreq : ""} /></td>
  <td>$<input type="number" className="underline_input" value={data.HouseholdMemberThreeWelfare_Alimony_CS  || 0}/>/<input type="text" className="underline_input" value={data.HouseholdMemberThreeName ? data.memberThreeIncomeFreq: ""} /></td>
  <td>$<input type="number" className="underline_input" value={data.HouseholdMemberThreeSSPR || 0} />/<input type="text" className="underline_input" value={data.HouseholdMemberThreeName ? data.memberThreeIncomeFreq : ""} /></td>
  <td>$<input type="number" className="underline_input"  value={data.HouseholdMemberThreeOther || 0} />/<input type="text" className="underline_input" value={data.HouseholdMemberThreeName ? data.memberThreeIncomeFreq : ""} /></td>
</tr>

<tr className="no_border">
  <td colSpan={3}>4. <input type="text" className="underline_input" value={data.HouseholdMemberFourName || '  '}/></td>
  <td>$<input type="number" className="underline_input" value={data.HouseholdMemberFourWorkEarnings || 0} />/<input type="text" className="underline_input" value={data.HouseholdMemberFourName ? data.memberFourIncomeFreq : ""} /></td>
  <td>$<input type="number" className="underline_input" value={data.HouseholdMemberFourWelfare_Alimony_CS  || 0}/>/<input type="text" className="underline_input" value={data.HouseholdMemberFourName ? data.memberFourIncomeFreq: ""} /></td>
  <td>$<input type="number" className="underline_input" value={data.HouseholdMemberFourSSPR || 0} />/<input type="text" className="underline_input" value={data.HouseholdMemberFourName ? data.memberFourIncomeFreq : ""} /></td>
  <td>$<input type="number" className="underline_input"  value={data.HouseholdMemberFourOther || 0} />/<input type="text" className="underline_input" value={data.HouseholdMemberFourName ? data.memberFourIncomeFreq : ""} /></td>
</tr>

<tr className="no_border">
  <td colSpan={3}>5. <input type="text" className="underline_input" value={data.HouseholdMemberFiveName || '  '}/></td>
  <td>$<input type="number" className="underline_input" value={data.HouseholdMemberFiveWorkEarnings || 0} />/<input type="text" className="underline_input" value={data.HouseholdMemberFiveName ? data.memberFiveIncomeFreq : ""} /></td>
  <td>$<input type="number" className="underline_input" value={data.HouseholdMemberFiveWelfare_Alimony_CS  || 0}/>/<input type="text" className="underline_input" value={data.HouseholdMemberFiveName ? data.memberFiveIncomeFreq: ""} /></td>
  <td>$<input type="number" className="underline_input" value={data.HouseholdMemberFiveSSPR || 0} />/<input type="text" className="underline_input" value={data.HouseholdMemberFiveName ? data.memberFiveIncomeFreq : ""} /></td>
  <td>$<input type="number" className="underline_input"  value={data.HouseholdMemberFiveOther || 0} />/<input type="text" className="underline_input" value={data.HouseholdMemberFiveName ? data.memberFiveIncomeFreq : ""} /></td>
</tr>

        <tr>
  <td colSpan={7}>
    <strong><span id="highlighted">C. Total Household Members (Adults and Children) listed in Part I and Part I</span><input type="number" className="underline_input" value={data.totalHouseHoldMembers}/></strong>
  </td>
</tr>

<tr>
  <td colSpan={7}>
    <div>
      <strong><span id="highlighted">Social Security Number.</span></strong> If income is listed or completed in Part II, the adult completing the form must also list the last four digits of his or her Social Security Number or check the “I don’t have a Social Security Number” box below. (See Privacy Act Statement on next page). <span id="red">Failure to complete this section, if income is listed, will result in the denial of free or reduced eligibility.</span>
    </div>

    <div>
      Last four Digits of Social Security Number XXX-X <span><input type="number" className="underline_input" value={data.ssn}/></span> <span><input type="checkbox" check={data.noSSN ? true : false} />I do not have a Social Security Number</span>
    </div>
  </td>
</tr>

      </tbody>
    </table>
  </form>
    </div>
  )
  
}

