import { Link } from 'react-router-dom';

export default function Footer() {
    return(
        <footer className="footer">
            <div>
                <Link to='/about'>About Us</Link>
                <Link to='/privacy'>Privacy Policy</Link>
                <Link to='/terms'>Terms of Service</Link>
                <Link to='/billing'>Billing Policy</Link>
            </div>

            <div>
                <Link to='/contact'>Contact Us</Link>
                <Link to='/faqs'>FAQs</Link>
                <Link to='/safety'>Safety Tips</Link>
            </div>

            <div>
                <a href='https://web.facebook.com/' target='_blank'>Our Facebook</a>
                <a href='https://www.instagram.com/' target='_blank'>Our Instagram</a>
                <a href='https://twitter.com/' target='_blank'>Our Twitter</a>
                <a href='https://www.youtube.com/' target='_blank'>Our YouTube</a>
            </div>

            <p>© 2022 Copyright | Sawwam</p>
        </footer>
    )
}