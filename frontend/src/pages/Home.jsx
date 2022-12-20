import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import FirstGuy from '../assets/first guy.png';
import SecondGuy from '../assets/secondguy.png';
import CarIcon from '../assets/car_icon.png';
import House from '../assets/house.png';
import Tech from '../assets/tech.png';
import Pets from '../assets/pets.png';
import Baby from '../assets/baby.png';
import Fashion from '../assets/fashion.png';
import Beauty from '../assets/beauty.png';
import Jobs from '../assets/jobs.png';
import Furniture from '../assets/furniture.png';
import Agriculture from '../assets/agriculture.png';
import Equipment from '../assets/tools.png';
import Services from '../assets/services.png';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';



export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [listings, setListings] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!searchTerm) {
            return;
        }
        
        window.location.assign(`/search/${searchTerm}`);
        setSearchTerm('');
    }

    const getListings = async () => {
        const response = await fetch('/api/listings');
        const json = await response.json();
        setListings(json.splice(0, 8));
    }


    useEffect(() => {
        getListings();
    }, []);

    return(
        <main>
            <div className="search_block">
                <img src={FirstGuy} alt='man' className='first_photo hide_for_mobile'/>
                <form className='search_form'onSubmit={handleSubmit}>
                    <input type='text' placeholder='Find what you’re looking for....' className='search' value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </form>
                <img src={SecondGuy} alt='man' className='second_photo hide_for_mobile'/>
            </div>
            <section className='category'>
                <h1 className='categories'>Categories</h1>
                <div className='category_buttons'>
                    <Link to={'/category/vehicles'}>
                        <div className='category_button'>
                            <img src={CarIcon} alt="Car"/>
                            <p>Vehicles</p>
                        </div>
                    </Link>
                    <Link to={'/category/properties'}>
                        <div className='category_button'>
                            <img src={House} alt="Houses"/>
                            <p>Properties</p>
                        </div>
                    </Link>
                    <Link to={'/category/technology'}>
                        <div className='category_button'>
                            <img src={Tech} alt="Tech"/>
                            <p>Technology</p>
                        </div>
                    </Link>
                    <Link to={'/category/pets'}>
                        <div className='category_button'>
                            <img src={Pets} alt="Pets"/>
                            <p>Animals & Pets</p>
                        </div>
                    </Link>
                    <Link to={'/category/baby'}>
                        <div className='category_button'>
                            <img src={Baby} alt="Baby"/>
                            <p>Baby</p>
                        </div>
                    </Link>
                    <Link to={'/category/fashion'}>
                        <div className='category_button'>
                            <img src={Fashion} alt="Fashion"/>
                            <p>Fashion</p>
                        </div>
                    </Link>
                    <Link to={'/category/beauty'}>
                        <div className='category_button'>
                            <img src={Beauty} alt="Beauty"/>
                            <p>Beauty</p>
                        </div>
                    </Link>
                    <Link to={'/category/jobs'}>
                        <div className='category_button'>
                            <img src={Jobs} alt="Jobs"/>
                            <p>Jobs</p>
                        </div>
                    </Link>
                    <Link to={'/category/furniture'}>
                        <div className='category_button'>
                            <img src={Furniture} alt="Home"/>
                            <p>Furniture, Home & Garden</p>
                        </div>
                    </Link>
                    <Link to={'/category/agriculture'}>
                        <div className='category_button'>
                            <img src={Agriculture} alt="Farm"/>
                            <p>Agriculture</p>
                        </div>
                    </Link>
                    <Link to={'/category/tools'}>
                        <div className='category_button'>
                            <img src={Equipment} alt="Tools"/>
                            <p>Equipment & Tools</p>
                        </div>
                    </Link>
                    <Link to={'/category/services'}>
                        <div className='category_button'>
                            <img src={Services} alt="Services"/>
                            <p>Services</p>
                        </div>
                    </Link>
                </div>
            </section>

            <section>
                <h1 className='categories'>Trending Ads</h1>
                <section className='listings'>
                    { listings &&
                    listings.map((listing) => {
                        return <Link to={`/listing/${listing._id}`} key={listing._id}>
                            <div className="card">
                                <div className='image_box'>
                                    <img src={listing.image} alt={`${listing.title}`} />
                                    <h3>{ listing.title }</h3>
                                    <p>{ listing.description.substring(0, 50) }....</p>
                                    <h4>{ listing.price } Ksh.</h4>
                                    <p className='card_time'>{formatDistanceToNow(new Date(listing.createdAt), { addSuffix: true })}</p>
                                </div>
                            </div>
                        </Link>
                    }) 
                    }
                </section>
                
                    {listings.length < 1  && 
                    <div className='no_listings'>
                        <h3>No ads posted yet.</h3>
                    </div>
                    }
            </section>
        </main>
    )
}