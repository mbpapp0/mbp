import { Link } from "react-router-dom";

export default function Error() {
    return(
        <main>
            <secton className="error_page">
                <h1>Unexpected Error</h1>
                <Link to='/'>Click Here to Go Back Home</Link>
            </secton>
        </main>
    )
}