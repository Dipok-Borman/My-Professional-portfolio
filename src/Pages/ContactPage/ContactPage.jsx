// ContactPage.jsx
import Aos from 'aos';
import { useEffect, useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Swal from 'sweetalert2';

function ContactPage() {
    const [message, setMessage] = useState('');

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can implement your logic for submitting the message
        // console.log('Submitted message:', message);
        setMessage('');
        Swal.fire({
            title: "Thank You",
            text: "Feel Free to Contact on Social Network For easy comunication.",
            icon: "success"
        });
    };

    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            delay: 20,
        });
    }, [])

    return (
        <div className="hero min-h-screen pt-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className="pb-10 lg:mr-20
                ">
                    <div>
                        <h5 className="text-center uppercase russo bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Active Alwase</h5>
                    </div>
                    <div className='flex place-content-center mb-5'>
                        <h1 className="text-center py-5 border-y-2 w-fit text-4xl ops uppercase">Feel Free to Contact With Me</h1>
                    </div>
                    <div className='lg:px-20 space-y-5 mb-10 play'>
                        <p>Dear Client,</p>
                        <p>I hope this message finds you well! I wanted to take a moment to express my gratitude for considering my services. Your interest means a lot to me.</p>
                        <p>Please feel free to reach out to me at any time with questions, ideas, or project inquiries. I am here to assist you every step of the way and am more than happy to discuss any aspect of our potential collaboration.</p>
                        <p>Your satisfaction and success are my top priorities, and I am committed to providing you with the highest level of service and expertise.</p>
                        <p>Looking forward to hearing from you soon!</p>
                        <p>Warm regards,<br />Dipok Borman</p>
                    </div>
                    <div className='lg:pb-40'>
                        <nav>
                            <div className="grid grid-flow-col gap-4" data-aos="zoom-in-up">
                                <a href='https://twitter.com/Dipok_Borman' target='blank' className='text-2xl hover:text-fuchsia-500'><FaTwitter></FaTwitter> </a>
                                <a href='https://www.facebook.com/dipokborman1000' target='blank' className='text-2xl hover:text-fuchsia-500'><FaFacebook></FaFacebook> </a>
                                <a href='https://www.instagram.com/dipok1000/' target='blank' className='text-2xl hover:text-fuchsia-500'><FaInstagram></FaInstagram> </a>
                                <a href='https://www.linkedin.com/in/dipok-borman-4a254b1b8/' target='blank' className='text-2xl hover:text-fuchsia-500'><FaLinkedinIn></FaLinkedinIn> </a>
                                <a href='https://github.com/Dipok-Borman' target='blank' className='text-2xl hover:text-fuchsia-500'><FaGithub></FaGithub> </a>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="flex flex-col">
                        <div className="container mx-auto flex-grow p-4">
                            <h1 className="text-3xl font-semibold mb-4 russo">Contact Us</h1>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="message" className="block text-gray-700">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                        rows="5"
                                        value={message}
                                        onChange={handleMessageChange}
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn gradient-border-button"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className='flex flex-row justify-end p-5'><span className='text-2xl pr-2 text-fuchsia-500'><FaGoogle></FaGoogle></span> dipokborman1ooo@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
