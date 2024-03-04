import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";


const News = () => {
    const {id} = useParams();

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>            

            <div className="grid md:grid-cols-4 gap-6">
                
                <div className="md:col-span-3 border-solid">
                   
                   <h2 className="text-5xl">News Details</h2>
                   {id}

                </div>

                <div className="border-solid">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;