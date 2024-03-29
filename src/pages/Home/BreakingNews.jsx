
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn">Breaking news</button>
            <Marquee className="ml-5" pauseOnHover={true} speed={100}>
                <Link to="/">I can be a React component. </Link>
                <Link to="/"> multiple React components, or just some text. </Link>
                <Link to="/"> multiple React components,  </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;