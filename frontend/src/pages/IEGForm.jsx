import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function IEGForm() {
  const user = JSON.parse(localStorage.getItem('user'));
  const { id } = useParams();
  const [data, setData] = useState({});
  
   const getClient = async () => {
        const response = await fetch(`https://mbp-server.onrender.com/api/clients/client/${id}`);
        const json = await response.json();
        setData(json[0]);
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
    <>
    <div className='container'>

        <h2 className='heading'>CACFP Meal Benefit Income Eligibility Statement</h2>
        
         <div style={{ padding: '10px', background: 'black', marginBlock:' 0.5rem' }}>
           <h5 style={{ color: 'white' }}>PART I: Child(ren) or Adult enrolled to receive day care</h5>
         </div>  
        <div className="labels">
            <div className="blocks block"></div>
            <p className='label first_label'>
                SNAP, TNAF, FDPIR, case number, or 
                Client ID number for children only. All the above, or 
                SSI or Medicaid case number for Adults.
                Note: Do not use EBT numbers. 
                Write case number and proceed to Part III.
            </p>
            <p className='label'>
                Children in Head Start, foster care and
                children who meet the definition of migrant,
                runaway, or homeless are eligible for free
                meals. Check ( ) all that apply.
            </p>
        </div>
        
        <form onSubmit={handleSubmit}>
            
            <div className='flex'>
                <div className="input_field"> 
                    <input type='text' placeholder="  Child Name" className="first_field" value={data.childOneName}/>
                    <input type='text' placeholder='Age' className='age_input' value={data.childOneAge} />
                    <input type='text' className="last_field" value={data.childOneID}/>
                </div>
                
                <div className="checkboxes">

                    <div className="check">
                        <label>Head Start:</label>
                        <input type='checkbox' checked={data.childOneHeadStart}
               
                        />
                    </div>

                    <div className="check">
                        <label>Foster Child:</label>
                        <input type='checkbox' checked={data.childOneForsterChild}
      
                        />
                    </div>

                    <div className="check">
                        <label>Runaway:</label>
                        <input type='checkbox' checked={data.childOneRunaway}
                        

                        />
                    </div>

                    <div className="check">
                        <label>Homeless:</label>
                        <input type='checkbox' checked={data.childOneHomeless}
                        
                        />
                    </div>
                </div>
            </div>

            <div className='flex'>
                <div className="input_field"> 
                    <input type='text' className="first_field" placeholder="  Child Name" value={data.childTwoName} />
                    <input type='text' placeholder='Age' className='age_input'  value={data.childTwoAge} />
                    <input type='text' className="last_field" value={data.childTwoID}/>
                </div>
                
                <div className="checkboxes">

                    <div className="check">
                        <label>Head Start:</label>
                        <input type='checkbox' checked={data.childTwoHeadStart}
                        
                        />
                    </div>

                    <div className="check">
                        <label>Foster Child:</label>
                        <input type='checkbox' checked={data.childTwoForsterChild}
                        
                        />
                    </div>

                    <div className="check">
                        <label>Runaway:</label>
                        <input type='checkbox' checked={data.childTwoRunaway}
                       
                        />
                    </div>

                    <div className="check">
                        <label>Homeless:</label>
                        <input type='checkbox' checked={data.childTwoHomeless}
                        
                        />
                    </div>
                </div>
            </div>

            <div className='flex'>
                <div className="input_field"> 
                    <input type='text' className="first_field" placeholder="  Child Name" value={data.childThreeName} />
                    <input type='text' placeholder='Age' className='age_input' value={data.childThreeAge} />
                    <input type='text' className="last_field" value={data.childThreeID} />
                </div>
                
                <div className="checkboxes">

                    <div className="check">
                        <label>Head Start:</label>
                        <input type='checkbox' checked={data.childThreeHeadStart}
                        
                        />
                    </div>

                    <div className="check">
                        <label>Foster Child:</label>
                        <input type='checkbox' checked={data.childThreeForsterChild}

                        />
                    </div>

                    <div className="check">
                        <label>Runaway:</label>
                        <input type='checkbox' checked={data.childThreeRunaway}

                        />
                    </div>

                    <div className="check">
                        <label>Homeless:</label>
                        <input type='checkbox' checked={data.childThreeHomeless}

                        />
                    </div>
                </div>
            </div>

            <div className='flex'>
                <div className="input_field"> 
                    <input type='text' className="first_field" value={data.childFourName} placeholder="  Child Name" />
                    <input type='text' placeholder='Age' className='age_input' value={data.childFourAge} />
                    <input type='text' className="last_field" value={data.childFourID} />
                </div>
                
                <div className="checkboxes">

                    <div className="check">
                        <label>Head Start:</label>
                        <input type='checkbox' checked={data.childFourHeadStart}
                        
                        />
                    </div>

                    <div className="check">
                        <label>Foster Child:</label>
                        <input type='checkbox' checked={data.childFourForsterChild}

                        />
                    </div>

                    <div className="check">
                        <label>Runaway:</label>
                        <input type='checkbox' checked={data.childFourRunaway}

                        />
                    </div>

                    <div className="check">
                        <label>Homeless:</label>
                        <input type='checkbox' checked={data.childFourHomeless}

                        />
                    </div>
                </div>
            </div>

            <div className='flex'>
                <div className="input_field"> 
                    <input type='text' className="first_field" placeholder="  Child Name" value={data.childFiveName}  />
                    <input type='text' placeholder='Age' className='age_input' value={data.childFiveAge} />
                    <input type='text' className="last_field" value={data.childFiveID} />
                </div>
                
                <div className="checkboxes">

                    <div className="check">
                        <label>Head Start:</label>
                        <input type='checkbox' checked={data.childFiveHeadStart}

                        />
                    </div>

                    <div className="check">
                        <label>Foster Child:</label>
                        <input type='checkbox' checked={data.childFiveForsterChild}

                        />
                    </div>

                    <div className="check">
                        <label>Runaway:</label>
                        <input type='checkbox' checked={data.childFiveRunaway}

                        />
                    </div>

                    <div className="check">
                        <label>Homeless:</label>
                        <input type='checkbox' checked={data.childFiveHomeless}

                        />
                    </div>
                </div>
            </div>

            <div className='flex'>
                <div className="input_field"> 
                    <input type='text' className="first_field" placeholder="  Child Name" value={data.childSixName} />
                    <input type='text' placeholder='Age' className='age_input' value={data.childSixAge} />
                    <input type='text' className="last_field" value={data.childSixID} />
                </div>
                
                <div className="checkboxes">

                    <div className="check">
                        <label>Head Start:</label>
                        <input type='checkbox' checked={data.childSixHeadStart}

                        />
                    </div>

                    <div className="check">
                        <label>Foster Child:</label>
                        <input type='checkbox' checked={data.childSixForsterChild}

                        />
                    </div>

                    <div className="check">
                        <label>Runaway:</label>
                        <input type='checkbox' checked={data.childSixRunaway}

                        />
                    </div>

                    <div className="check">
                        <label>Homeless:</label>
                        <input type='checkbox' checked={data.childSixHomeless}

                        />
                    </div>
                </div>
            </div>



          <div style={{ padding: '10px', background: 'black', marginBlock: '0.5rem' }}>
            <h5 style={{ color: 'white' }}>PART II: Report income for ALL Household Members (Skip this step if participant is categorically eligible as documented in Part I.)</h5>
          </div>
  
            <div className='part_a'>
                <p className="part_a_title">
                    <strong>A.</strong> Child Income - Sometimes children in the household earn and receive income.
                    Please indicate the TOTAL income received by child household members listed in 
                    PART I here.
                </p>
                <label>Child Income</label>
                <input type='number' value={data.childIncome} />
                    <label>How Often?</label>
                    <input type='text' value={data.childIncomeFreq} />
                   
                {/* <label>How often?</label>
                <input type='text' value={childIncomeFreq} onChange={(e) => setChildIncomeFreq(e.target.value)}/> */}
            </div>

            <div className="part_b">
                <p className="part_b_title">
                    <strong>B.</strong> Other Household Members 1. List all household members (including yourself) not 
                    listed in Part I even if they do not receive income. For each Household Member 
                    listed, if they do not receive income, report total gross income (before taxes) for each 
                    source in whole dollars (no cents) only. If they do not receive income from any 
                    source, write '0'. If you enter "0" or leave any field blank you are certifying
                    (promising) there is not income to report.
                </p>

                <div className="form_list">
                    <div className="form_line">
                        {/* <div className='bottom'>
                            <i>Please enter estimated monthly income</i>
                        </div> */}

                        <h4>Member</h4>
                        <label>Name of Other Household Member: </label>
                        <input type='text' className="part_b_main_field" value={data.HouseholdMemberOneName} />
                        <label>Earnings from work before deductions: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={data.HouseholdMemberOneWorkEarnings} />
                        <label>Welfare, child support, alimony: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={data.HouseholdMemberOneWelfare_Alimony_CS} />
                        <label>Social Security, pensions, retirement: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={data.HouseholdMemberOneSSPR} />
                        <label>All other income: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={data.HouseholdMemberOneOther} />
                        <label style={{ marginRight: '0.3rem'}}>Income Frequency:</label>
                        <input type='text' value={data.memberOneIncomeFreq} />
                       
                    </div>

                    
                    <div className="form_line">
                        <h4>Member</h4>

                        <label>Name of Other Household Member: </label>
                        <input type='text' className="part_b_main_field" value={data.HouseholdMemberTwoName} />
                        <label>Earnings from work before deductions: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={data.HouseholdMemberTwoWorkEarnings} />
                        <label>Welfare, child support, alimony: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={data.HouseholdMemberTwoWelfare_Alimony_CS} />
                        <label>Social Security, pensions, retirement: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={data.HouseholdMemberTwoSSPR} />
                        <label>All other income: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={data.HouseholdMemberTwoOther} />
                        <label style={{ marginRight: '0.3rem'}}>Income Frequency:</label>
                        <input type='text' value={data.memberTwoIncomeFreq} />
                    </div>

                    <div className="form_line">
                        <h4>Member</h4>

                        <label>Name of Other Household Member: </label>
                        <input type='text' className="part_b_main_field" value={data.HouseholdMemberThreeName}  />
                        <label>Earnings from work before deductions: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={data.HouseholdMemberThreeWorkEarnings} />
                        <label>Welfare, child support, alimony: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={data.HouseholdMemberThreeWelfare_Alimony_CS} />
                        <label>Social Security, pensions, retirement: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={data.HouseholdMemberThreeSSPR} />
                        <label>All other income: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={data.HouseholdMemberThreeOther} />
                        <label style={{ marginRight: '0.3rem'}}>Income Frequency:</label>
                        <input type='text' value={data.memberTwoIncomeFreq} />
                    
                    </div>

                    <div className="form_line">
                        <h4>Member</h4>

                        <label>Name of Other Household Member: </label>
                        <input type='text' className="part_b_main_field" value={data.HouseholdMemberFourName} />
                        <label>Earnings from work before deductions: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={data.HouseholdMemberFourWorkEarnings} />
                        <label>Welfare, child support, alimony: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={data.HouseholdMemberFourWelfare_Alimony_CS} />
                        <label>Social Security, pensions, retirement: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={data.HouseholdMemberFourSSPR} />
                        <label>All other income: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={data.HouseholdMemberFourOther} />
                        <label style={{ marginRight: '0.3rem'}}>Income Frequency:</label>
                        <input type='text' value={data.memberFourIncomeFreq} />
                       
                    </div>

                    <div className="form_line">
                        <h4>Member</h4>

                        <label>Name of Other Household Member: </label>
                        <input type='text' className="part_b_main_field" value={data.HouseholdMemberFiveName} />
                        <label>Earnings from work before deductions: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={data.HouseholdMemberFiveWorkEarnings} />
                        <label>Welfare, child support, alimony: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={data.HouseholdMemberFiveWelfare_Alimony_CS} />
                        <label>Social Security, pensions, retirement: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={data.HouseholdMemberFiveSSPR}/>
                        <label>All other income: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={data.HouseholdMemberFiveOther}/>
                        <label style={{ marginRight: '0.3rem'}}>Income Frequency:</label>
                        <input type='text' value={data.memberFiveIncomeFreq} />
                    </div>
                    
                    <div className="form_line">
                        <h4>Member</h4>

                        <label>Name of Other Household Member: </label>
                        <input type='text' className="part_b_main_field" value={data.HouseholdMemberSixName} />
                        <label>Earnings from work before deductions: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={data.HouseholdMemberSixWorkEarnings} />
                        <label>Welfare, child support, alimony: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={data.HouseholdMemberSixWelfare_Alimony_CS}/>
                        <label>Social Security, pensions, retirement: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={data.HouseholdMemberSixSSPR} />
                         <label>All other income: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={data.HouseholdMemberSixOther}/>
                        <label style={{ marginRight: '0.3rem'}}>Income Frequency:</label>
                        <input type='text' value={data.memberSixIncomeFreq} />
                      
                    </div>

                </div>

                
                
            </div>

            <div className="part_c">
                <p><strong>C.</strong> Total Household Members (Adults & Children) listed in Part I and Part II:  <span><strong>{data.totalHouseHoldMembers}</strong></span></p>
                { /*<input type='number' value={totalHouseHoldMembers} required onChange={(e) => setTotalHouseHoldMembers(e.target.value)}/> */}
            </div>
            {/* <div className="part_c">
                <p>Total Household Income (Adults & Children) listed in Part I and Part II</p>
                <input type='number' value={totalHouseHoldIncome} onChange={(e) => setTotalHouseHoldIncome(e.target.value)}/>
            </div> */}

            <div>
                <p className="social block">
                    <strong>Social Security Number.</strong> If income is listed or completed in Part II, the adult
                    completing the form must also the list the last four digits of his or her Social Security 
                    Number or check the "I don't have a Social Security Number" box below. (See 
                    Privacy Act Statement on the Next Page). <span className="red">Failure to complete this section, if income
                    is listed below, will result in denial of free or reduced eligibility.  </span>
                </p>

                <div className={ data.noSSN ? 'hide' : "flex align block"}>
                    <p className="right">Last four Digits of Social Security Number XXX-XX</p>
                    <input type='number' className="input_width" value={data.ssn} />
                    
                </div>

             <div style={{marginBlock: '0.5rem'}}>
      <label htmlFor="noSsnCheckbox" className='flex align' style={{fontSize: '0.6rem'}}>
        <input
          type="checkbox"
          id="noSsnCheckbox"
          checked={data.noSSN}
          
        />
        I dont have an SSN
      </label>
    </div>

            </div>
              <div style={{ padding: '10px', background: 'black' }}>
                <h5 style={{ color: 'white' }}>PART III: Enrollment Information</h5>
              </div>
  
            <div className="block">
                <p>
                    My child is normally in attendance at the facility between the hours of 
                    <select className='form_time' value={data.timeFrom}>
                        
                    </select>
                    
                    <select className='form_time' value={data.timeFromHour}>
                           
                    </select >to
                    <select className='form_time' value={data.timeTo}>
                        
                    </select>
                    
                    <select className='form_time' value={data.timeToHour} >
                  
                        
                    </select>
                </p>
                <p> <input type='checkbox' checked={data.beforeAfterCare} /> Check here if only before/after school
                    care is provided.</p>
            </div>
            <div className="flex">
                <p>Check ( ) the days your child will normally attend the center:</p>
                <div className="flex align days">
                    <p>Sunday <input type='checkbox' checked={data.dayCenterSunday} /></p>
                    <p>Monday <input type='checkbox' checked={data.dayCenterMonday} /></p>
                    <p>Tuesday <input type='checkbox' checked={data.dayCenterTuesday} /></p>
                    <p>Wednesday <input type='checkbox' checked={data.dayCenterWednesday} /></p>
                    <p>Thursday <input type='checkbox' checked={data.dayCenterThursday} /></p>
                    <p>Friday <input type='checkbox' checked={data.dayCenterFriday} /></p>
                    <p>Saturday <input type='checkbox' checked={data.dayCenterSaturday} /></p>
                    
                </div>
            </div>

            <div className="flex days">
                <p>Check ( ) the meals your child will normally receive while in care:</p>
                <div className="flex align">
                    <p>Breakfast AM <input type='checkbox' checked={data.breakFast} /></p>
                    <p>Snack Lunch <input type='checkbox' checked={data.snackLunch} /></p>
                    <p>PM Snack <input type='checkbox' checked={data.snackPM} /></p>
                    <p>Supper Evening <input type='checkbox' checked={data.supper} /></p>
                    <p>Snack<input type='checkbox' checked={data.snack} /></p>
                </div>
            </div>

            <div className="certify">
                <p>
                    I certify that all information on this form is true and that all income is reported. I
                    understand that the center or day care home will get Federal funds based on the 
                    information I give. I understand that CACFP officials may verify the information. I 
                    understand that if I purposefully give false information, the participant receiving
                    meals may lose the meal benefits, and I may be procecuted. <span className="red italic">This signature also
                    acknowledges that he child(ren) or adult listed on the form in Part I are enrolled
                    for care. If not completed fully and signed, the participant will be placed on Paid category.</span>
                </p>
            </div>

            <div className="info">

              {/* <div style={{ maxWidth: '6rem'}}>
                <label>Print Name</label>
                <input type='text'  className="right bottom" value={printName} onChange={(e) => setPrintName(e.target.value)} required/>
                
                

                <label>Address</label>
                <input type='text' className="right bottom" value={address} onChange={(e) => setAddress(e.target.value)}/>
                
                <label>City</label>
                <input type='text' className="right bottom" value={city} onChange={(e) => setCity(e.target.value)}/>

                <label>State</label>
                <input type='text' className="right bottom" value={state} onChange={(e) => setState(e.target.value)}/>
                
                <label>Zip Code</label>
                <input type='number' className="right bottom" value={zipCode} onChange={(e) => setZipCode(e.target.value)}/>

                <label>Phone Number</label>
                <input type='number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
            </div> */}
                  <div style={{ padding: '10px', background: 'black', marginBlock: '0.75rem' }}>
                    <h5 style={{ color: 'white' }}>PART IV: Signature</h5>
                  </div>
                <div>
                
                    <label>Signature</label>
                    <div style={{border: '2px solid black', width: '12rem', height: '96px'}} className='sign_pad'>                            
                      <img src={data.sign} alt='signature' />                    
                    </div>
                    
                </div>
                         
              
                 <br />
                 <div className='flex align' style={{margin: '0'}}>
                   <label>
                     Date:
                   <input type="date" value={data.signDate}   />
                   </label>
                 </div>

    
                            
                {/*   <div className='flex align>            
                            
                  <label>
                    Date:
                    <input type="date" value={signDate} onChange={(e) => setSignDate(e.target.value)} />
                  </label>
        
                </div>
               */}

                <p className="disclaimer red bottom">
                    *This application is a revision of USDA's newly released meal benefit prototype and meets all 
                    legal requirements and reflect design best practices identified by USDA through focus testing and 
                    other research.
                </p>
            </div>
              <div style={{ padding: '10px', background: 'black' }}>
                <h5 style={{ color: 'white' }}>PART V: Participant’s Ethnic and Racial Identities (optional)</h5>
             </div>
            <div className="ethnicity block flex space_between">
                <div className="ethnicity_title">
                    <p>Check ( ) one ethnic identity:</p>
                    <div>
                        <label className="half_right">Hispanic/Latino</label>
                        <input type='checkbox' className="right" checked={data.latino}  
                        
                        />  
                        <label className="half_right">Hispanic/Non-Latino</label>
                        <input type='checkbox' checked={data.nonLatino} 
                        
                        />
                    </div>
                </div>
                <div className="ethnicity_title">
                    <p>Check ( ) one ethnic identity:</p>
                    <div>
                        <label className="half_right">Asian</label>
                        <input type='checkbox' className="right" checked={data.asian}  
                        />
                        <label className="half_right">White</label>
                        <input type='checkbox' className="right" checked={data.white} 
                        />
                        <label className="half_right">Black-African</label>
                        <input type='checkbox' className="right" checked={data.black} 
                        />
                        <label className="half_right">Indian or Alaskan Native</label>
                        <input type='checkbox' className="right" checked={data.indian} 
                        />
                        <label className="half_right">Hawaiian or Other Pacific Islander</label>
                        <input type='checkbox' checked={data.hawaiian} />
                    </div>
                </div>

            </div>
                <div>
                    
                    <label>Official Signature</label>
                    <div style={{border: '2px solid black', width: '12rem', height: '96px'}} className='sign_pad'>    
                        

                        
                            <img src={data.offSign} alt='signature' />
                        
                    </div>
                    
                </div>  
                     <br />
           <div className='flex align block1x'>
              <label>
                Date:
                <input type="date" value={data.offSignDate} style={{ width: '10.5rem'}}/>
              </label>
           </div>

     
           
        </form>
      </div>
    </>
  )
}
