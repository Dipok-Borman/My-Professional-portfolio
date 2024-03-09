import { useEffect } from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Aos from "aos";
import Service from "../Service/Service";
import Review from "../Review/Review";
import FrontEndSection from "../../Skill/FrontEndSection";
import BackEndSection from "../../Skill/BackEndSection";

const Home = () => {

    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            delay: 20,
        });
    }, [])

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <FrontEndSection></FrontEndSection>
            <BackEndSection></BackEndSection>
            <Review></Review>
        </div>
    );
};

export default Home;