import { Link } from "react-router-dom";

const Notfoundpage = () => {

    return ( 
        <div className="page">
            <h1>Page Not Found</h1>
            <Link to="/">Go back to home page</Link>
        </div>
     );
}
 
export default Notfoundpage;