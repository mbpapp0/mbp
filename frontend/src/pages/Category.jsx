import { Link, useParams } from "react-router-dom";
import { useState, useEffect} from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default function Category() {
    const { category } = useParams();
    const [listings, setListings] = useState([]);
    const [subCategoryOptions, setSubCategoryOptions] = useState([
        {
            name: 'Vehicles',
            sub: ['Cars', 'Motorbikes & Scooters', 'Trucks, Vans & Buses', 'Auto Parts & Accessories', 'Bicycles and Three Wheelers']
        }, 
        {
            name: 'Properties',
            sub: ['Houses', 'Apartment & Flats', 'Commerical Property', 'Garages', 'Plots & Land']
        }, 
        {
            name: 'Technology',
            sub: ['Computers', 'Phone', 'Cameras', 'TV', 'Other']
        },
        {
            name: 'Pets',
            sub: ['Pets', 'Farm Animals', 'Other']
        }, 
        {
            name: 'Baby',
            sub: ['Toys', 'Baby Care', 'Baby Clothes', 'Parms & Strollers', 'Accessories']
        }, 
        {
            name: 'Fashion',
            sub: ['Men\'s Clothes', 'Women\'s Clothes', 'Men\'s Shoes', 'Women\'s Shoes', 'Watches', 'Jewellery']
        },
        {
            name: 'Jobs',
            sub: ['Accounting', 'Advertisting', 'Child Care', 'Construction', 'Computer & IT', 'Driver', 'Engineering', 'Farming', 'Gardening', 'Hotel', 'Legal', 'Restaurant', 'Retail', 'Security']
        },
        {
            name: 'Furniture',
            sub: ['Furniture', 'Hone Accessories', 'Kitchen Ware']
        }, 
        {
            name: 'Agriculture',
            sub: ['Farm Equipment', 'Livestock', 'Livestock Feed', 'Farm Produce']
        }, 
        {
            name: 'Tools',
            sub: ['Garage Tools', 'Manufacturing Equipment', 'Garden Tools', 'Printing Equipment', 'Other']
        },
        {
            name: 'Services',
            sub: ['Tickets', 'Travel & Visa', 'Business & Technical Service', 'Domestic & Personal', 'Events & Hospitality']
        }
    ]);
    const [categoryList, setCategoryList] = useState([]);
    const [tag, setTag] = useState(categoryList[0])
    const [filteredList, setFilterdList] = useState([]);

    const getCategory = (cat) => {

        const list = subCategoryOptions.filter((subCategory) => subCategory.name == cat);

        setCategoryList(list[0].sub)

    }


    const name = category.replace(/\w+/g,
    function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();});

    const getListingbyCategory = async () => {
        const response = await fetch(`https://sawwan.onrender.com/api/listings/bycategory/${name}`);
        const json = await response.json();
        setListings(json);
    }

    const newList = listings.filter((listing) => {
        return listing.tag === tag
    });

    useEffect(() => {
        getListingbyCategory();
        getCategory(name);
        console.log(listings)
    }, [tag]);

    return(
        <>
        <section className="category_block">
            <h1>{ name }</h1>
        </section>
        <section>
            <div className="filter">
                <select className="filter_select" onChange={(e) => setTag(e.target.value)}>
                    {categoryList.map((categorySub, index) => (
                        <option key={index}>{ categorySub }</option>
                    ))}
                </select>
            </div>
            <div className="listings">
            { listings &&
                    listings.filter((listing) => {
                        return listing.tag === tag
                    }).map((listing) => {
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
            </div>
        </section>

        <section>
        {newList.length < 1  && 
                    <div className='no_listings'>
                        <h1>No ads posted yet</h1>
                    </div>
                    }
        </section>
        </>
    )
}