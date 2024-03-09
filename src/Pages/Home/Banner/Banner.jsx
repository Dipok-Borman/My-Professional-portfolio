import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/Home/Banner/banner1.png';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Banner = () => {
    const name = "I'm";

    return (
        <div className="h-fit flex flex-col lg:flex-row pt-20 px-2 py-10">
            <div className='shrink-1'>
                <div className="mt-10 space-y-5">
                    <div>
                        <p className="uppercase play">Hey there</p>
                        <h5 className="uppercase russo">{name} <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Dipok Borman</span></h5>
                    </div>
                    <div data-aos="fade-up">
                        <h1 className="text-4xl ops">Full-Stack Web</h1>
                        <h1 className="text-4xl ops">Application Design</h1>
                        <h1 className="text-4xl ops">& Developer...!</h1>
                    </div>
                    <div>
                        <p>Full stack developers are proficient in both front-end and back-end technologies, allowing them to work on all aspects of web development. They have a comprehensive understanding of how the different components of a web application work together to create a seamless user experience.</p>
                    </div>
                    <div className='flex justify-end russo'>
                        <button className='btn btn-outline w-1/3 float-end bg-gradient-to-r from-pink-500 to-violet-500'><Link to='/project'>See My Work</Link></button>
                    </div>
                    <nav>
                        <div className="grid grid-flow-col gap-4" data-aos="zoom-in-down">
                            <a href='https://twitter.com/Dipok_Borman' target='blank' className='text-2xl hover:text-fuchsia-500'><FaTwitter></FaTwitter> </a>
                            <a href='https://www.facebook.com/dipokborman1000' target='blank' className='text-2xl hover:text-fuchsia-500'><FaFacebook></FaFacebook> </a>
                            <a href='https://www.instagram.com/dipok1000/' target='blank' className='text-2xl hover:text-fuchsia-500'><FaInstagram></FaInstagram> </a>
                            <a href='https://www.linkedin.com/in/dipok-borman-4a254b1b8/' target='blank' className='text-2xl hover:text-fuchsia-500'><FaLinkedinIn></FaLinkedinIn> </a>
                            <a href='https://github.com/Dipok-Borman' target='blank' className='text-2xl hover:text-fuchsia-500'><FaGithub></FaGithub> </a>
                        </div>
                    </nav>
                </div>
            </div>
            <div className='w-full' data-aos="fade-left">
                <img src={bannerImg} alt="" className='w-full' />
            </div>
        </div>
    );
};

export default Banner;