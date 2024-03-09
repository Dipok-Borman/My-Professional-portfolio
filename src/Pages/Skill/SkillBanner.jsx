import skillBanner from '../../assets/Skill/skillBanner.png';
import { useEffect } from "react";
import Aos from "aos";

const SkillBanner = () => {

    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            delay: 20,
        });
    }, [])

    return (
        <div className="h-fit flex flex-col-reverse lg:flex-row-reverse px-3 pt-32">
            <div className='shrink-0'>
                <div data-aos="zoom-in-up">
                    <img src={skillBanner} alt="" className='w-[600px]' />
                </div>
            </div>
            <div className='shrink lg:pt-20'>
                <div className="space-y-5 px-5">
                    <div>
                        <h5 className="uppercase russo"><span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">My Skills</span></h5>
                    </div>
                    <div data-aos="fade-up">
                        <h1 className="text-4xl ops">Exploring the Full Stack:</h1>
                        <h1 className="text-4xl ops">Showcasing My Expertise in</h1>
                        <h1 className="text-4xl ops">Web Development...!</h1>
                    </div>
                    <div>
                        <p className="play">I am excited to showcase my proficiency in full-stack web development, where I combine my expertise in both front-end and back-end technologies to create dynamic and user-centric web applications. From crafting intuitive user interfaces using HTML, CSS, and JavaScript to designing robust server-side logic with frameworks like Node.js and Express, I am dedicated to delivering seamless and scalable solutions. With a deep understanding of databases, RESTful APIs, and deployment strategies, I am confident in my ability to bring projects from concept to completion. I look forward to demonstrating my skills and contributing to impactful web development projects.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillBanner;