import { useState, useEffect } from 'react';

export default function Upload() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [fileInput, setFileInput] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [error, setError] = useState('');
    const [id, setId] = useState(user.id);
    const [success, setSuccess] = useState('');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [categoryOptions, setCategoryOptions] = useState(['Vehicles', 'Properties', 'Technology', 'Pets', 'Baby', 'Fashion', 'Jobs', 'Furniture', 'Agriculture', 'Tools', 'Services']);
    const [category, setCategory] = useState(categoryOptions[0]);
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

const [subCategory, setSubCategory] = useState(subCategoryOptions[0].sub);
const [tag, setTag] = useState(subCategory[0]);


    const getSubs = (name) => {

        const list = subCategoryOptions.filter((sub) => sub.name == name);

        const subs = list[0].sub;

        setSubCategory(subs);

    }


    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }

        setSuccess('Image upload successful');

        setTimeout(() => {
            setSuccess('');
            setTitle('');
            setDescription('');
            setPrice('');
        }, 2000)
    }

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
    }

    const uploadImage = async (base64EncodedImage) => {
        const fileStr = base64EncodedImage;

        const data = {
            id,
            title,
            description,
            price,
            category,
            tag,
            fileStr
        }

        try {
            const response = await fetch('https://sawwan.onrender.com/api/listings', 
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            
            if(response.ok){
                setSuccess('Post created successfully');
            }

        } catch (error) {
            setError(error.message);
        }

    }

    const handleSubmitFile = (e) => {
        e.preventDefault();
        

        if(!title || !description || !price || !category || !tag || !previewSource){
            setError('Please fill in all fields');

            setTimeout(() => {
                setError('');
            }, 2000)
            return;

        }

        
        uploadImage(previewSource);

}




useEffect(() => {
    getSubs(category);
}, [category])

    return(
        <main>
            <h1 className='upload_title'>CREATE NEW LISTING</h1>
            <form onSubmit={handleSubmitFile} className='upload'>
                {success && 
                    <div className='success'>
                         <p>{ success }</p>
                     </div>
                }
                {error && 
                    <div className='error'>
                         <p>{ error }</p>
                     </div>
                }
               
                <label>Title:</label>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>Price:</label>
                <input type='number' value={price} onChange={(e) => setPrice(e.target.value)}/>
                <label>Category:</label>
                <select onChange={(e) => setCategory(e.target.value)}>
                    {categoryOptions.map((category, index) => (
                        <option key={index}>{ category }</option>
                    ))}
                </select>
                <label>Sub Category: </label>
                <select onChange={(e) => setTag(e.target.value)}>
                    {subCategory.map((subs, index) => (
                        <option key={index}>{ subs }</option>
                    ))}
                </select>
                <label>Description:</label>
                <textarea rows="4" cols="50" value={description} onChange={(e) => setDescription(e.target.value)}>

                </textarea>
                <input type='file' name='image' value={fileInput} onChange={handleFileInputChange}/>
                <button className='button'>Create New Listing</button>
            </form>
        </main>
    )
} 