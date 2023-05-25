import Back from "../components/Back";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

export default function BranchUserIEGReduced() {
    return (
        <>
            <div className='container'>
            
            <h3 className="ieg_free">Income Eligibility Guidelines Form</h3>
            <h4 className="ieg_free">Reduced Price Meals</h4>

            <table className="submitted_forms">
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
                        <td>16,237</td>
                        <td>1,354</td>
                        <td>677</td>
                        <td>625</td>
                        <td>313</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>21,983</td>
                        <td>1,832</td>
                        <td>916</td>
                        <td>846</td>
                        <td>423</td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>27,729</td>
                        <td>2,311</td>
                        <td>1,156</td>
                        <td>1,067</td>
                        <td>534</td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>33,475</td>
                        <td>2,790</td>
                        <td>1,395</td>
                        <td>1,288</td>
                        <td>644</td>
                    </tr>
                    
                    <tr>
                        <td>5</td>
                        <td>39,221</td>
                        <td>3,269</td>
                        <td>1,635</td>
                        <td>1,509</td>
                        <td>755</td>
                    </tr>

                    <tr>
                        <td>6</td>
                        <td>44,967</td>
                        <td>3,748</td>
                        <td>1,874</td>
                        <td>1,730</td>
                        <td>865</td>
                    </tr>

                    <tr>
                        <td>7</td>
                        <td>50,713</td>
                        <td>4,227</td>
                        <td>2,114</td>
                        <td>1,951</td>
                        <td>976</td>
                    </tr>

                    <tr>
                        <td>8</td>
                        <td>56,459</td>
                        <td>4,705</td>
                        <td>2,353</td>
                        <td>2,172</td>
                        <td>1,086</td>
                    </tr>

                    <tr>
                        <td>For Each Additional Family Member </td>
                        <td>+5,746</td>
                        <td>+479</td>
                        <td>+240</td>
                        <td>+221</td>
                        <td>+111</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </>
    )
}