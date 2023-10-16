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
  const [branchName, setBranchName] = useState("")
  
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
        await setData(json[0]);

        const res = await fetch(`https://mbp-server.onrender.com/api/branches/${data.branch}`);
        const branches = await response.json();
        setBranchName(branches.name);
     
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


        <tr>
  <td colSpan={7}>
    <div>
      <h4>
        <span id="highlighted_header">PART III: Enrollment Information:</span>
        <span id="red">Children Only</span>
      </h4>
      <p>
        My child is normally in attendance at the facility between the hours of
        <span>
          <input type="text" value={data.timeFrom} className="underline_input" />
        </span>
        [{data.timeFromHour}] to
        <span>
          <input type="text" value={data.timeTo}className="underline_input" />
        </span>
        [data.timeToHour].
        <span>
          <input type="checkbox" checked={data.beforeAfterCare}/>
        </span>
        ( )Check here if only before/after school care is provided.
      </p>

      <p>
        Circle the days your child will normally attend the center: <span class={data.dayCenterSunday ? "day" : ""}>Sunday</span>
        <span class={data.dayCenterMonday ? "day" : ""}>Monday</span> <span class={data.dayCenterTuesday ? "day" : ""}>Tuesday</span> <span class={data.dayCenterWednesday ? "day" : ""}>Wednesday</span> <span class={data.dayCenterThursday ? "day" : ""}>Thursday</span> <span class={data.dayCenterFriday ? "day" : ""}>Friday</span> <span class={data.dayCenterSaturday ? "day" : ""}>Saturday</span>
      </p>
      Circle the meals your child will normally receive while in care:
      <span class={data.breakFast ? "day" : ""}>Breakfast</span> <span class={data.snackAM ? "day" : ""}>AM Snack</span><span class={data.lunch ? "day" : ""}>Lunch</span><span class={data.snackPM ? "day" : ""}>PM Snack</span> <span class={data.supper ? "day" : ""}>Supper</span> <span class={data.eveningSnack ? "day" : ""}>Evening Snack</span>
      <p></p>
    </div>
  </td>
</tr>

        <tr>
  <td colSpan={7}>
    <div>
      <h4><span id="highlighted_header">PART IV: Signature</span></h4>
      <p>
        I certify that all information on this form is true and that all income is reported. I understand that the center or day care home will get Federal funds based on the information I give. I understand that CACFP officials may verify the information. I understand that if I purposefully give false information, the participant receiving meals may lose the meal benefits, and I may be prosecuted. This signature also acknowledges that the child(ren) or adult listed on the form in Part I are enrolled for care. <span id="red"> If not completed fully and signed, the participant will be placed in the Paid category.</span>
      </p>
      
      <label>Signature:</label>
      <img src ={data.signature} alt="sign" />
      <input type="text" className="underline_input"/>
      <label>Print Name:</label>
      <input type="text" className="underline_input" value={data.printName}/>
      <label>Date:</label>
      <input type="text" className="underline_input" value={data.signDate}/>
      <label>Address</label>
      <input type="text" className="underline_input" value={data.address}/>
      <label>City:</label>
      <input type="text" className="underline_input" value={data.city}/>
      <label>State:</label>
      <input type="text" className="underline_input" value={data.state}/>
      <label>Zip</label>
      <input type="number" className="underline_input" value={data.zipCode}/>
      <label>Phone</label>
      <input type="number" className="underline_input" value={data.phoneNumber}/>
      <p id="red">
        *This application is a revision of USDA’s newly released meal benefit prototype and meets all legal requirements and reflects design best practices identified by USDA through focus testing and other research.
      </p>
    </div>
  </td>
</tr>

        <tr>
  <td colSpan={7} className="part_header">PART V: Participant’s Ethnic and Racial Identities (optional)</td>
</tr>

<tr>
  <td colSpan={2}>
    <p>Check () one ethnic identity:</p>
    <p>
      Hispanic/ Latino <span><input type="checkbox" checked={data.latino}/></span> Not Hispanic/ Latino <span><input type="checkbox"  checked={data.nonLatino}/></span>
    </p>
  </td>

  <td colSpan={5}>
    <p>Check () one or more racial identities:</p>
    <p>
      Asian <span><input type="checkbox" checked={data.asian} /></span> White <span><input type="checkbox" checked={data.white}/></span> Black or African American <span><input type="checkbox" checked={data.black} /></span>
      Indian or Alaska Native <span><input type="checkbox" checked={data.indian}/></span> Hawaiian or other Pacific Islander <span><input type="checkbox" checked={data.hawaiian}/></span>
    </p>
  </td>
</tr>

        <tr>
  <td colSpan={7}>
    <div>
      <p>
        Official Use Only Section for Provider: Annual Income Conversion: Weekly x 52, Every 2 weeks x 26, Twice a month x 24, Monthly x 12
      </p>
      
      <p>
        Total income: <span><input type="number" className="underline_input" value={data.totalHouseHoldIncome}/></span><strong>Per:</strong> 
        <span><input type="checkbox" /></span> Week 
        <span><input type="checkbox" /></span> Every 2 weeks 
        <span><input type="checkbox" /></span> Twice a month 
        <span><input type="checkbox" /></span> Month 
        <span><input type="checkbox" checked={true}/></span> Year 
        <strong>Household Size:</strong> 
        <span><input type="number" className="underline_input" value={data.totalHouseHoldMembers}/></span> 

        <div className="flex">
          <div>
            Categorical Eligibility: check () if applicable  <span><input type="checkbox" /></span>
          </div>
 
          <div>
            Eligibility: check () one Free <span><input type="checkbox" checked={ data.eligibility == "Free" ? true : false }/></span> Reduced <span><input type="checkbox" checked={ data.eligibility == "Reduced" ? true : false }/></span> Paid-<span id="highlighted">Denied</span><span><input type="checkbox" checked={ data.eligibility == "Paid" ? true : false }/></span>
          </div>
        </div>
      </p>
      
      <p>
        <span id="highlighted">When more than one person is performing CACFP duties, there must be at least two signatures on this form: one signature from the Determining Official (the official who determined initial income classification) and one signature from the Confirming Official (the official who verified the form’s accuracy).</span>
      </p>
      
      <div className="sign">
        <div>
          <label>Determining Official’s Signature:</label>
           <img src={data.detOfficialSignature} />
          <input type="text" className="underline_input sign_input" />
          <label>Date:</label>
          <input type="text" className="underline_input" value={data.detOfficialSignDate}/>
        </div>
        
        <div>
          <label>Confirming Official’s Signature: </label>
           <img src={data.conOfficialSignature} />
          <input type="text" className="underline_input sign_input"/>
          <label>Date:</label>
          <input type="text" className="underline_input" value={data.conOfficialSignDate}/>
        </div>
        
        <div>
          <label>Follow Up Official’s Signature:</label>
          <img src={data.folOfficialSignature} />
          <input type="text" className="underline_input sign_input"/>
          <label>Date:</label>
          <input type="text" className="underline_input" value={data.folOfficialSignDate}/>t
          
        </div>
      </div>
    </div>
  </td>
</tr>


      </tbody>
    </table>
  </form>
    </div>
  )
  
}

