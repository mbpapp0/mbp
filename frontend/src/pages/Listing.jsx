import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

export default function Listing () {
    const { id } = useParams();
    const [listing, setListing] = useState({});

    const getSingleListing = async () => {
        const response = await fetch(`/api/listings/${id}`);
        const json = await response.json();
        setListing(json);
    }

    useEffect(() => {
        getSingleListing();
    }, [])

    return(
        <main>
            <section className="listing_page">
                {listing && 
                <>
                    <img src={listing.image} alt={listing.title} />
                    <h1>{ listing.title }</h1>
                    <h3>{ listing.price } Ksh.</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </>
                }   
            </section>
        </main>
    )
}