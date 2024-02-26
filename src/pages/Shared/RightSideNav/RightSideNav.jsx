import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'


const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-2 mb-6">
                <h2 className="text-2xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle className="text-xl" />
                    Google Login
                </button>
                <button className="btn btn-outline w-full">
                <FaGithub className="text-xl"/>
                    Github Login
                </button>
            </div>

            <div className="p-4 space-y-2 mb-6">
                <h2 className="text-2xl">Find Us On</h2>
                <a className="p-4 flex gap-3 items-center rounded-t-lg bg-blue-100 no-underline text-blue-700	" href="">
                    <FaFacebookF className="text-xl text-blue-500" />
                    Facebook
                </a>

                <a className="p-4 flex gap-3 items-center rounded-m-lg no-underline bg-gray-200 text-black" href="">
                    <FaTwitter className="text-xl text-black" />
                    Twitter
                </a>

                <a className="p-4 flex gap-3 items-center rounded-b-lg no-underline bg-pink-100 text-pink-500" href="">
                    <FaInstagramSquare className="text-xl text-pink-500" />
                    Instagram
                </a>

            </div>

            {/* Q-Zone */}

            <div className="space-y-2 mb-6 bg-gray-200">
                <h2 className="text-2xl">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>

            <div className="space-y-2 mb-6 bg-gray-200">
                <h2 className="text-2xl"></h2>
               
            </div>



            
        </div>
    );
};

export default RightSideNav;