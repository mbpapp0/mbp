import { useState } from 'react';


export default function Contact() {
    const FORM_ENDPOINT = "https://public.herotofu.com/v1/965cd2e0-8053-11ed-b38f-a1ed22f366b1";

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sumbitted, setSubmitted] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!name || !email || !message){
            return;
        }

        const response = await fetch(FORM_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify({ name, email, message}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        window.location.assign('/');

    }



    return(
        <main className="info_page">
            <section className="info_section">
                <h1 className="info_title">Contact Us</h1>
                {sumbitted && 
                    <div className='error' style={{'backgroundColor': 'green'}}>
                        <p>{ sumbitted }</p>
                    </div>
                }
                <form className="signup_form" onSubmit={handleSubmit}>
                    <label>Name: </label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                    <label>Email: </label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label>Message: </label>
                    <textarea rows="4" cols="11" className="contact_text" 
                    value={message} onChange={(e) => setMessage(e.target.value)}>

                    </textarea>
                    <input type='submit' className='button' value='Send Message'/>
                </form>
            </section>
        </main>
    )
}