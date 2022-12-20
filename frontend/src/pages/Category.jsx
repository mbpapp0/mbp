import { Link, useParams } from "react-router-dom";
import { useState, useEffect} from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default function Category() {
    const { category } = useParams();
    const [listings, setListings] = useState([]);

    const name = category.replace(/\w+/g,
    function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();});

    const getListingbyCategory = async () => {
        const response = await fetch(`/api/listings/bycategory/${name}`);
        const json = await response.json();
        setListings(json);
    }

    useEffect(() => {
        getListingbyCategory();
    }, []);

    return(
        <>
        <section className="category_block">
            <h1>{ name }</h1>
        </section>
        <section>
            <div className="listings">
            { listings &&
                    listings.map((listing) => {
                        return <Link to={`/listing/${listing._id}`} key={listing._id}>
                            <div className="card">
                                <div className='image_box'>
                                    <img src={listing.image} alt={`${listing.title}`} />
                                    <h3>{ listing.title }</h3>
                                    <p>{ listing.description.substring(0, 50) }....</p>
                                    <h4>${ listing.price }</h4>
                                    <p className='card_time'>{formatDistanceToNow(new Date(listing.createdAt), { addSuffix: true })}</p>
                                </div>
                            </div>
                        </Link>
                    }) 
                    }
            </div>
        </section>

        <section>
        {listings.length < 1  && 
                    <div className='no_listings'>
                        <h1>No ads posted yet</h1>
                    </div>
                    }
        </section>
        </>
    )
}