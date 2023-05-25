import { useState, useEffect } from 'react';
import Error from './Error';
import { useParams } from 'react-router-dom';
import Back from '../components/Back';

export default function DataAdminIEGFreeEdit() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [data, setData] = useState({});
    const { id } = useParams();
    const [param, setParam] = useState('')
    const [houseHoldOne, setHouseHoldOne] = useState(null);
    const [houseHoldTwo, setHouseHoldTwo] = useState(null);
    const [houseHoldThree, setHouseHoldThree] = useState(null);
    const [houseHoldFour, setHouseHoldFour] = useState(null);
    const [houseHoldFive, setHouseHoldFive] = useState(null);
    const [houseHoldSix, setHouseHoldSix] = useState(null);
    const [houseHoldSeven, setHouseHoldSeven] = useState(null);
    const [houseHoldEight, setHouseHoldEight] = useState(null);
    const [AdditionalHousehold, setAdditionalHousehold] = useState(null);


    if(user.role != 'Data Admin'){
        return <Error />
    }


    const getData = async () => {
        const response = await fetch(`https://mbp-server.onrender.com/api/reducedmeals/${id}`);
        const json = await response.json();
        setData(json[0]);
        setParam(json[0]._id);
        setHouseHoldOne(json[0].houseHoldOne);
        setHouseHoldTwo(json[0].houseHoldTwo);
        setHouseHoldThree(json[0].houseHoldThree);
        setHouseHoldFour(json[0].houseHoldFour);
        setHouseHoldFive(json[0].houseHoldFive);
        setHouseHoldSix(json[0].houseHoldSix);
        setHouseHoldSeven(json[0].houseHoldSeven);
        setHouseHoldEight(json[0].houseHoldEight);
        setAdditionalHousehold(json[0].AdditionalHousehold);
        
    }

    // const getData = async () => {
    //     const response = await fetch(`http://localhost:3001/api/reducedmeals/${id}`);
    //     const json = await response.json();
    //     setData(json[0]);
    //     setParam(json[0]._id);
    //     setHouseHoldOne(json[0].houseHoldOne);
    //     setHouseHoldTwo(json[0].houseHoldTwo);
    //     setHouseHoldThree(json[0].houseHoldThree);
    //     setHouseHoldFour(json[0].houseHoldFour);
    //     setHouseHoldFive(json[0].houseHoldFive);
    //     setHouseHoldSix(json[0].houseHoldSix);
    //     setHouseHoldSeven(json[0].houseHoldSeven);
    //     setHouseHoldEight(json[0].houseHoldEight);
    //     setAdditionalHousehold(json[0].AdditionalHousehold);
        
    // }

    const editData = async (e) => {
        e.preventDefault();

        const form = {
            houseHoldOne,
            houseHoldTwo,
            houseHoldThree,
            houseHoldFour,
            houseHoldFive,
            houseHoldSix,
            houseHoldSeven,
            houseHoldEight,
            AdditionalHousehold
        };

        
        const response = await fetch(`https://mbp-server.onrender.com/api/reducedmeals/${param}`, {
            method: 'PUT',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // const response = await fetch(`http://localhost:3001/api/reducedmeals/${param}`, {
        //     method: 'PUT',
        //     body: JSON.stringify(form),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });


        const json = await response.json();

        if(response.ok){
            window.location.assign(`/datared/${id}`)
        }
        
        if(!response.ok){
            console.log(json.error);
        }

    }
    
    useEffect(() => {
        getData();    
    

    }, []);

    return (
        <>
            <div className='container guideline_container '>
                <Back />
            <h3 className="ieg_free">Income Eligibility Guidelines Form</h3>
            <h4 className="ieg_free">Reduced Price Meals</h4>
            <form onSubmit={editData}>
                <button className="button radius">Apply Changes</button>

                <table className="edited_forms">
                    <thead>
                        <tr>                        
                            <th>Household</th>
                            <th>Annual</th>
                            <th>Monthly</th>
                            <th>Twice A Week</th>
                            <th>Every Two Weeks</th>
                            <th>Weekly</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    <tr>
                            <td>1</td>
                            <td><input type='number' value={ houseHoldOne } onChange={(e) => setHouseHoldOne(e.target.value)}/></td>
                            <td>{ Math.ceil(houseHoldOne / 12) }</td>
                            <td>{ Math.ceil(houseHoldOne / 24) }</td>
                            <td>{ Math.ceil(houseHoldOne / 26) }</td>
                            <td>{ Math.ceil(houseHoldOne / 52) }</td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td><input type='number' value={ houseHoldTwo } onChange={(e) => setHouseHoldTwo(e.target.value)}/></td>
                            <td>{ Math.ceil(houseHoldTwo / 12) }</td>
                            <td>{ Math.ceil(houseHoldTwo / 24) }</td>
                            <td>{ Math.ceil(houseHoldTwo / 26) }</td>
                            <td>{ Math.ceil(houseHoldTwo / 52) }</td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td><input type='number' value={ houseHoldThree } onChange={(e) => setHouseHoldThree(e.target.value)}/></td>
                            <td>{ Math.ceil(houseHoldThree / 12) }</td>
                            <td>{ Math.ceil(houseHoldThree / 24) }</td>
                            <td>{ Math.ceil(houseHoldThree / 26) }</td>
                            <td>{ Math.ceil(houseHoldThree / 52) }</td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td><input type='number' value={ houseHoldFour } onChange={(e) => setHouseHoldFour(e.target.value)}/></td>
                            <td>{ Math.ceil(houseHoldFour / 12) }</td>
                            <td>{ Math.ceil(houseHoldFour / 24) }</td>
                            <td>{ Math.ceil(houseHoldFour / 26) }</td>
                            <td>{ Math.ceil(houseHoldFour / 52) }</td>
                        </tr>
                        
                        <tr>
                            <td>5</td>
                            <td><input type='number' value={ houseHoldFive } onChange={(e) => setHouseHoldFive(e.target.value)}/></td>
                            <td>{ Math.ceil(houseHoldFive / 12) }</td>
                            <td>{ Math.ceil(houseHoldFive / 24) }</td>
                            <td>{ Math.ceil(houseHoldFive / 26) }</td>
                            <td>{ Math.ceil(houseHoldFive / 52) }</td>
                        </tr>

                        <tr>
                            <td>6</td>
                            <td><input type='number' value={ houseHoldSix  } onChange={(e) => setHouseHoldSix(e.target.value)}/></td>
                            <td>{ Math.ceil(houseHoldSix / 12) }</td>
                            <td>{ Math.ceil(houseHoldSix / 24) }</td>
                            <td>{ Math.ceil(houseHoldSix / 26) }</td>
                            <td>{ Math.ceil(houseHoldSix / 52) }</td>
                        </tr>

                        <tr>
                            <td>7</td>
                            <td><input type='number' value={ houseHoldSeven } onChange={(e) => setHouseHoldSeven(e.target.value)}/></td>
                            <td>{ Math.ceil(houseHoldSeven / 12) }</td>
                            <td>{ Math.ceil(houseHoldSeven / 24) }</td>
                            <td>{ Math.ceil(houseHoldSeven / 26) }</td>
                            <td>{ Math.ceil(houseHoldSeven / 52) }</td>
                        </tr>

                        <tr>
                            <td>8</td>
                            <td><input type='number' value={ houseHoldEight } onChange={(e) => setHouseHoldEight(e.target.value)}/></td>
                            <td>{ Math.ceil(houseHoldEight / 12) }</td>
                            <td>{ Math.ceil(houseHoldEight / 24) }</td>
                            <td>{ Math.ceil(houseHoldEight / 26) }</td>
                            <td>{ Math.ceil(houseHoldEight / 52) }</td>
                        </tr>

                        <tr>
                            <td>For Each Additional Family Member </td>
                            <td><input type='number' value={ AdditionalHousehold } onChange={(e) => setAdditionalHousehold(e.target.value)}/></td>
                            <td>{ Math.ceil(AdditionalHousehold / 12) }</td>
                            <td>{ Math.ceil(AdditionalHousehold / 24) }</td>
                            <td>{ Math.ceil(AdditionalHousehold/ 26) }</td>
                            <td>{ Math.ceil(AdditionalHousehold / 52) }</td>
                        </tr>
                    </tbody>
                </table>
            </form>
            </div>
        </>
    )
}