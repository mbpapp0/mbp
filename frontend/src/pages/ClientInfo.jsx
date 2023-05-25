import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Back from '../components/Back';

export default function ClientInfo() {
    const user = JSON.parse(localStorage.getItem('user'));
    const { id } = useParams();
    const [data, setData] = useState({})

    if(user.role != 'Branch User'){
        return <Error />
    }

    const getClient = async () => {
        const response = await fetch(`https://mbp-server.onrender.com/api/clients/client/${id}`);
        const json = await response.json();
        setData(json[0]);
    }

    // const getClient = async () => {
    //     const response = await fetch(`http://localhost:3001/api/clients/client/${id}`);
    //     const json = await response.json();
    //     setData(json[0]);

    //     console.log(data);
    // }

    useEffect(() => {
        getClient();
    }, [])

    return(
        <div className="container">
            <Back />
            <div className='client_info'>
                {data && 
                <>
                <div>
                    <h2>Applicant</h2>
                        <h4>Print Name: { data.printName }</h4>
                        <h4>Eligibility: { data.eligibility }</h4>
                        <div>
                            <h4>Signature: </h4>
                            <img src={data.signature} />
                        </div>
                        <h4>Social Security Number(Last Four): { data.ssn || 'None'}</h4>
                        <h4>Parent Phone Number: { data.phoneNumber }</h4>
                        <h4>Address: { data.address }</h4>
                        <h4>City: { data.city }</h4>
                        <h4>State: { data.state }</h4>
                        <h4>Zip Code: { data.zipCode }</h4>
                        <h4>Ethnicity: { data.latino ? "Hispanic" : "Non-Hispanic"} { data.black && "Black" } { data.white && "White" } { data.asian && "Asian" }  { data.indian }  { data.hawaiian && "Hawaiian" }</h4>
                </div>

                    <h2>Children</h2>

                    <h4>Child Income: { data.childIncome }</h4>
                    <h4>Child Income Frequency: { data.childIncomeFreq || 'N/A'}</h4>
                    <h3>First Child</h3>
                    <h4>First Child Name: { data.childOneName || 'N/A' }</h4>
                    <h4>First Child ID or Case Number : { data.childOneID || 'N/A' }</h4>

                    <h3>Second Child</h3>
                    <h4>Second Child Name: { data.childTwoName || 'N/A' }</h4>
                    <h4>Second Child ID or Case Number : { data.childTwoID || 'N/A' }</h4>

                    <h3>Third Child</h3>
                    <h4>Third Child Name: { data.childThreeName || 'N/A' }</h4>
                    <h4>Third Child ID or Case Number : { data.childThreeID || 'N/A' }</h4>

                    <h3>Fourth Child</h3>
                    <h4>Fourth Child Name: { data.childFourName || 'N/A' }</h4>
                    <h4>Fourth Child ID or Case Number : { data.childFourID || 'N/A' }</h4>

                    <h3>Fifth Child</h3>
                    <h4>Fifth Child Name: { data.childFiveName || 'N/A' }</h4>
                    <h4>Fifth Child ID or Case Number : { data.childFiveID || 'N/A' }</h4>

                    <h3>Sixth Child</h3>
                    <h4>Sixth Child Name: { data.childSixName || 'N/A' }</h4>
                    <h4>Sixth Child ID or Case Number : { data.childSixID || 'N/A' }</h4>

                    <h3>Other Child Information</h3>
                    <h4>Child Income: { data.childIncome }</h4>
                    <h4>Facility Hours: {data.timeFrom }{data.timeFromHour } to { data.timeTo }{ data.timeToHour }</h4>
                    <h4>Only Before/After Care Provided: { data.beforeAfterCare ? "Yes" : "No" }</h4>
                    <h4>Child Days at the Center: { data.dayCenterSunday ? "Sunday" : "" } { data.dayCenterMonday ? "Monday " : "" }{ data.dayCenterTuesday ? "Tuesday " : "" }{ data.dayCenterWednesday ? "Wednesday " : "" }{ data.dayCenterThursday ? "Thursday " : "" }{ data.dayCenterFriday ? "Friday " : "" }{ data.dayCenteraturdday ? "Saturday" : "" }</h4>
                    <h4>Meals Received While at Care: {data.breakFast ? "Breakfast" :""} { data.snackLunch ? "Lunch-Snack" : "" } { data.snackPM ? "PM-Snack" : ""} { data.supper ? "Supper" : ""} {data.snack ? "Snack" : ""}</h4>
                    
                    <h2>Household Member Information</h2>

                    <h4>Household Size: { data.houseHoldSize || 7}</h4>
                    <h3>Member One</h3>
                    <h4>Household Member One Name: { data.HouseholdMemberOneName }</h4>
                    <h4>Household Member One Working Earnings: { data.HouseholdMemberOneWorkEarnings }</h4>
                    <h4>Household Member One Welfare, Alimony & Child Support: { data.HouseholdMemberOneWelfare_Alimony_CS ? data.HouseholdMemberOneWelfare_Alimony_CS : 'N/A   ' }</h4>
                    <h4>Household Member One, Social Security, pensions, retirement: { data.HouseholdMemberOneSSPR ? data.HouseholdMemberOneSSPR : 'N/A'}</h4>
                    <h4>Household Member All other income: { data.HouseholdMemberOneOther ? data.HouseholdMemberOneOther : 'N/A'}</h4>
                    <h4>Household Member Income Frequency: { data.memberOneIncomeFreq || 'N/A'}</h4>
                    
                    <h3>Member Two</h3>
                    <h4>Household Member Two Name: { data.HouseholdMemberTwoName || 'N/A' }</h4>
                    <h4>Household Member Two Working Earnings: { data.HouseholdMemberTwoWorkEarnings || 'N/A'}</h4>
                    <h4>Household Member Two Welfare, Alimony & Child Support: { data.HouseholdMemberTwoWelfare_Alimony_CS ? data.HouseholdMemberTwoWelfare_Alimony_CS : 'N/A   ' }</h4>
                    <h4>Household Member Two, Social Security, pensions, retirement: { data.HouseholdMemberTwoSSPR ? data.HouseholdMemberTwoSSPR : 'N/A'}</h4>
                    <h4>Household Member All other income: { data.HouseholdMemberTwoOther ? data.HouseholdMemberTwoOther : 'N/A'}</h4>
                    { data.HouseholdMemberName != '' && <h4>Household Member Income Frequency: { data.memberTwoIncomeFreq  || 'N/A'}</h4>}

                    
                    <h3>Member Three</h3>
                    <h4>Household Member Three Name: { data.HouseholdMemberThreeName || 'N/A' }</h4>
                    <h4>Household Member Three Working Earnings: { data.HouseholdMemberThreeWorkEarnings || 'N/A'}</h4>
                    <h4>Household Member Three Welfare, Alimony & Child Support: { data.HouseholdMemberThreeWelfare_Alimony_CS ? data.HouseholdMemberThreeWelfare_Alimony_CS : 'N/A   ' }</h4>
                    <h4>Household Member Three, Social Security, pensions, retirement: { data.HouseholdMemberThreeSSPR ? data.HouseholdMemberThreeSSPR : 'N/A'}</h4>
                    <h4>Household Member All other income: { data.HouseholdMemberThreeOther ? data.HouseholdMemberThreeOther : 'N/A'}</h4>
                    { data.HouseholdMemberName != '' && <h4>Household Member Income Frequency: { data.memberThreeIncomeFreq || 'N/A'}</h4>}

                    
                    <h3>Member Four</h3>
                    <h4>Household Member Four Name: { data.HouseholdMemberFourName || 'N/A' }</h4>
                    <h4>Household Member Four Working Earnings: { data.HouseholdMemberFourWorkEarnings || 'N/A'}</h4>
                    <h4>Household Member Four Welfare, Alimony & Child Support: { data.HouseholdMemberFourWelfare_Alimony_CS ? data.HouseholdMemberThreeWelfare_Alimony_CS : 'N/A   ' }</h4>
                    <h4>Household Member Three, Social Security, pensions, retirement: { data.HouseholdMemberFourSSPR ? data.HouseholdMemberFourSSPR : 'N/A'}</h4>
                    <h4>Household Member All other income: { data.HouseholdMemberFourOther ? data.HouseholdMemberFourOther : 'N/A'}</h4>
                    { data.HouseholdMemberName != '' && <h4>Household Member Income Frequency: { data.memberFourIncomeFreq || 'N/A'}</h4>}

                    
                    <h3>Member Five</h3>
                    <h4>Household Member Five Name: { data.HouseholdMemberFiveName || 'N/A' }</h4>
                    <h4>Household Member Five Working Earnings: { data.HouseholdMemberFiveWorkEarnings || 'N/A'}</h4>
                    <h4>Household Member Five Welfare, Alimony & Child Support: { data.HouseholdMemberFiveWelfare_Alimony_CS ? data.HouseholdMemberFiveWelfare_Alimony_CS : 'N/A   ' }</h4>
                    <h4>Household Member Five, Social Security, pensions, retirement: { data.HouseholdMemberFiveSSPR ? data.HouseholdMemberFiveSSPR : 'N/A'}</h4>
                    <h4>Household Member All other income: { data.HouseholdMemberFiveOther ? data.HouseholdMemberFiveOther : 'N/A'}</h4>
                    { data.HouseholdMemberName != '' && <h4>Household Member Income Frequency: { data.memberFiveIncomeFreq || 'N/A'}</h4>}

                    
                    <h3>Member Six</h3>
                    <h4>Household Member Six Name: { data.HouseholdMemberSixName || 'N/A' }</h4>
                    <h4>Household Member Six Working Earnings: { data.HouseholdMemberSixWorkEarnings || 'N/A'}</h4>
                    <h4>Household Member Six Welfare, Alimony & Child Support: { data.HouseholdMemberSixWelfare_Alimony_CS ? data.HouseholdMemberSixWelfare_Alimony_CS : 'N/A   ' }</h4>
                    <h4>Household Member Six, Social Security, pensions, retirement: { data.HouseholdMemberSixSSPR ? data.HouseholdMemberSixSSPR : 'N/A'}</h4>
                    <h4>Household Member All other income: { data.HouseholdMemberSixOther ? data.HouseholdMemberSixOther : 'N/A'}</h4>
                    { data.HouseholdMemberName != '' && <h4>Household Member Income Frequency: { data.memberSixIncomeFreq || 'N/A'}</h4>}


                    <h2>Official's information</h2>
                    <div>
                        <h4>Official's Signature: </h4>
                        <img src={data.offSignature} />
                    </div>
                    </>
                }
            </div>
        </div>
    )
}