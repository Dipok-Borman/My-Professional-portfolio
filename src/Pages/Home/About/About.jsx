import { Link } from 'react-router-dom';
import aboutImg from '../../../assets/Home/About/about1.png';

const About = () => {
    return (
        <div className="h-fit flex flex-col-reverse lg:flex-row px-3">
            <div className='shrink-0'>
                <div>
                    <img src={aboutImg} alt="" className='w-[600px]' />
                </div>
            </div>
            <div className='shrink'>
                <div className="space-y-5 px-5">
                    <div>
                        <h5 className="uppercase russo"><span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">About me</span></h5>
                    </div>
                    <div data-aos="fade-up">
                        <h1 className="text-4xl ops">Front-end & Back-end web</h1>
                        <h1 className="text-4xl ops">Application Design</h1>
                        <h1 className="text-4xl ops">& Developer...!</h1>
                    </div>
                    <div>
                        <p>Hello there! I am Dipok, a passionate MERN stack React JavaScript web developer with 5 years of experience in crafting dynamic and user-friendly web applications. With a strong foundation in front-end development using React.js, along with expertise in back-end technologies like Node.js, Express, and MongoDB, I thrive in creating seamless and scalable solutions for various industries.</p>
                    </div>
                    <div className='flex justify-end russo'>
                        <button className='btn btn-outline w-1/3 float-end bg-gradient-to-r from-pink-500 to-violet-500'><Link to='/about'>See More</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;