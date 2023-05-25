import { Link, useParams } from 'react-router-dom';
import Back from '../components/Back';

export default function Roster() {
    const {id} = useParams();

    console.log(id);

    return(
        <div className="container">
            <Back />
            <h2 className='block'>Roster</h2>
            <div className='months'>

                <div className='roster_month'>
                    <h4>January</h4>
                    <Link to={`/rosterbymonth/${id}-1`} className='button radius'>View Roster</Link>
                </div>
                <div className='roster_month'>
                    <h4>Februray</h4>
                    <Link to={`/rosterbymonth/${id}-2`} className='button radius'>View Roster</Link>
                </div>
                <div className='roster_month'>
                    <h4>March</h4>
                    <Link to={`/rosterbymonth/${id}-3`} className='button radius'>View Roster</Link>
                </div>
                <div className='roster_month'>
                    <h4>April</h4>
                    <Link to={`/rosterbymonth/${id}-4`} className='button radius'>View Roster</Link>
                </div>

                <div className='roster_month'>
                    <h4>May</h4>
                    <Link to={`/rosterbymonth/${id}-5`} className='button radius'>View Roster</Link>
                </div>
                <div className='roster_month'>
                    <h4>June</h4>
                    <Link to={`/rosterbymonth/${id}-6`} className='button radius'>View Roster</Link>
                </div>
                <div className='roster_month'>
                    <h4>July</h4>
                    <Link to={`/rosterbymonth/${id}-7`} className='button radius'>View Roster</Link>
                </div>
                <div className='roster_month'>
                    <h4>August</h4>
                    <Link to={`/rosterbymonth/${id}-8`} className='button radius'>View Roster</Link>
                </div>


                <div className='roster_month'>
                    <h4>September</h4>
                    <Link to={`/rosterbymonth/${id}-9`} className='button radius'>View Roster</Link>
                </div>
                <div className='roster_month'>
                    <h4>October</h4>
                    <Link to={`/rosterbymonth/${id}-10`} className='button radius'>View Roster</Link>
                </div>
                <div className='roster_month'>
                    <h4>November</h4>
                    <Link to={`/rosterbymonth/${id}-11`} className='button radius'>View Roster</Link>
                </div>
                <div className='roster_month'>
                    <h4>December</h4>
                    <Link to={`/rosterbymonth/${id}-12`} className='button radius'>View Roster</Link>
                </div>
            </div>


        </div>
    )
}