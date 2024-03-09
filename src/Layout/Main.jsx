import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import './Main.css';
import "aos/dist/aos.css";

const Main = () => {

    return (
        <div className="bg-contain min-h-screen bg-[#FFFFFF] russo-one-regular">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;