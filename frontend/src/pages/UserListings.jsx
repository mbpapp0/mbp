import { useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom'  

export default function UserListings() {
    const user = JSON.parse(localStorage.getItem('user'));
    const { id } = useParams();
    const [listings, setListings] = useState([]);

    const getUserListings = async() => {
        const response = await fetch(`/api/listings/byuser/${id}`);
        const json = await response.json();

        setListings(json);
    }

    const deleteListing = async (id) => {
        const response = await fetch(`/api/listings/${id}`,
            {method: 'DELETE'}
        );
        
        if(response.ok){
            const newList = listings.filter((listing) => listing._id != id);
            setListings(newList);
        }

    }

    useEffect(() => {
        getUserListings();
    }, [])

    return(
        <main>
            <section className='category_block'>
                <h1>Hi { user.first_name }</h1>
            </section>
                <section className='listings'>
                    {listings && listings.map((listing) => {
                        return(
                            <div key={listing._id} className='card listing_card '>
                                <Link to={`/listing/${listing._id}`}>
                                    <div className='image_box'>
                                        <img src={listing.image} alt={`${listing.title}`} />
                                        <h3>{ listing.title }</h3>
                                        <p>{ listing.description.substring(0, 50) }....</p>
                                    </div>
                                </Link>
                                <button className='button delete_button' onClick={() => deleteListing(listing._id)}>Delete</button>
                            </div>
                        )
                    })}
                </section>

                {listings.length < 1 && 
                    <section className='no_listings'>
                         
                         <Link to='/createlisting'><h2>No ads created yet.  Click to create a new one.</h2></Link>
                    </section>
                }
        </main>
    )
}