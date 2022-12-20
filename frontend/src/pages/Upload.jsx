import { useState } from 'react';

export default function Upload() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [fileInput, setFileInput] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [error, setError] = useState('');
    const [id, setId] = useState(user.id);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [categoryOptions, setCategoryOptions] = useState(['Vehicles', 'Properties', 'Technology', 'Pets', 'Baby', 'Fashion', 'Jobs', 'Furniture', 'Agriculture', 'Tools', 'Services']);
    const [category, setCategory] = useState(categoryOptions[0]);

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
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
            fileStr
        }

        try {
            const response = await fetch('/api/listings', 
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            
            if(response.ok){
                window.location.assign(`/account/${user.id}`);
            }

        } catch (error) {
            setError(error.message);
        }

    }

    const handleSubmitFile = (e) => {
        e.preventDefault();
        

        if(!title || !description || !price || !category || !previewSource){
            setError('Please fill in all fields');

            setTimeout(() => {
                setError('');
            }, 2000)
            return;

        }

        
        uploadImage(previewSource);

}

    return(
        <main>
            <h1 className='upload_title'>CREATE NEW LISTING</h1>
            <form onSubmit={handleSubmitFile} className='upload'>
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
                <label>Description:</label>
                <textarea rows="4" cols="50" value={description} onChange={(e) => setDescription(e.target.value)}>

                </textarea>
                <input type='file' name='image' value={fileInput} onChange={handleFileInputChange}/>
                <input type='submit' className='button' value='Submit'/>
            </form>
        </main>
    )
} 