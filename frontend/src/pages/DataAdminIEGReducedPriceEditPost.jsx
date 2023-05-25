import { useState } from 'react';
import { useParams } from 'react-router-dom';
import RedirectHome from '../components/RedirectHome';

export default function DataAdminIEGReducedPriceEditPost() {
    const user = JSON.parse(localStorage.getItem('user'));
    const { id } = useParams();
    const [houseHoldOne, setHouseHoldOne] = useState('');
    const [houseHoldTwo, setHouseHoldTwo] = useState('');
    const [houseHoldThree, setHouseHoldThree] = useState('');
    const [houseHoldFour, setHouseHoldFour] = useState('');
    const [houseHoldFive, setHouseHoldFive] = useState('');
    const [houseHoldSix, setHouseHoldSix] = useState('');
    const [houseHoldSeven, setHouseHoldSeven] = useState('');
    const [houseHoldEight, setHouseHoldEight] = useState('');
    const [AdditionalHousehold, setAdditionalHousehold] = useState('');
    const [error, setError] = useState('');
    
    const createPost = async (e) => {
        const branch = id;
        e.preventDefault();
        const form = {
            branch,
            houseHoldOne,
            houseHoldTwo,
            houseHoldThree,
            houseHoldFour,
            houseHoldFive,
            houseHoldSix,
            houseHoldSeven,
            houseHoldEight,
            AdditionalHousehold
        }

        const response = await fetch('https://mbp-server.onrender.com/api/reducedmeals/', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // const response = await fetch('http://localhost:3001/api/reducedmeals/', {
        //     method: 'POST',
        //     body: JSON.stringify(form),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });

        const json = await response.json();
        
        if(response.ok){
            window.location.assign(`/datared/${id}`);
        }

        if(!response.ok){
            setError('Please fill in all fields');
            setTimeout(() => {
                setError('');
            }, 3000)
        }
    }


    return(
        <>
            <div className='container guideline_container'>
                <RedirectHome />
            <h3 className="ieg_free">Income Eligibility Guidelines Form</h3>
            <h4 className="ieg_free">Free Meals</h4>
            { error && <div className='error_indicator'>
                <p>{ error }</p>
            </div>}
            <form onSubmit={createPost}>
                <button className="button radius">Create Guidlines</button>

                <table className="edited_forms created_forms">
                    <thead>
                        <tr>                        
                            <th>Household</th>
                            <th>Annual</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    <tr>
                            <td>1</td>
                            <td><input type='number' value={houseHoldOne} onChange={(e) => setHouseHoldOne(e.target.value)}/></td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td><input type='number' value={houseHoldTwo} onChange={(e) => setHouseHoldTwo(e.target.value)}/></td>


                        </tr>

                        <tr>
                            <td>3</td>
                            <td><input type='number' value={houseHoldThree} onChange={(e) => setHouseHoldThree(e.target.value)}/></td>
              
                        </tr>

                        <tr>
                            <td>4</td>
                            <td><input type='number' value={houseHoldFour} onChange={(e) => setHouseHoldFour(e.target.value)}/></td>

                        </tr>
                        
                        <tr>
                            <td>5</td>
                            <td><input type='number' value={houseHoldFive} onChange={(e) => setHouseHoldFive(e.target.value)}/></td>
                            
                        </tr>

                        <tr>
                            <td>6</td>
                            <td><input type='number' value={houseHoldSix} onChange={(e) => setHouseHoldSix(e.target.value)}/></td>
                            
                        </tr>

                        <tr>
                            <td>7</td>
                            <td><input type='number' value={houseHoldSeven} onChange={(e) => setHouseHoldSeven(e.target.value)}/></td>
                            
                        </tr>

                        <tr>
                            <td>8</td>
                            <td><input type='number' value={houseHoldEight} onChange={(e) => setHouseHoldEight(e.target.value)}/></td>
                           
                        </tr>

                        <tr>
                            <td>For Each Additional Family Member </td>
                            <td><input type='number' value={AdditionalHousehold} onChange={(e) => setAdditionalHousehold(e.target.value)}/></td>

                        </tr>
                    </tbody>
                </table>
            </form>
            </div>
        </>
    )
}