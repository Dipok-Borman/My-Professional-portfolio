import webDev from '../../../assets/Home/Service/web-development.jpg';
import ui_ux from '../../../assets/Home/Service/ui-ux.png';
import mobileApp from '../../../assets/Home/Service/mobile app.jpg';

const Service = () => {
    return (
        <div className="-mt-20 mb-10 h-fit">
            <div>
                <h5 className="text-center uppercase russo bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Services</h5>
            </div>
            <div className='flex place-content-center mb-5' data-aos="flip-down">
                <h1 className="text-center py-5 border-y-2 w-fit text-4xl ops uppercase">Some of our services</h1>
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={webDev} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title ops">
                            Web Development
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <div data-aos="zoom-in-down">Web development services encompass designing, building, and maintaining websites and web applications. They include front-end and back-end development, e-commerce solutions, custom web applications, CMS implementation, responsive design, and ongoing maintenance and support. These services help businesses establish their online presence, engage with customers, and achieve their goals in the digital realm.</div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={ui_ux} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title ops">
                            UX/UI Design
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <div data-aos="zoom-in-down">UI/UX design services focus on creating user-friendly and visually appealing interfaces for websites and applications. They involve designing intuitive layouts, optimizing user experiences, ensuring responsiveness across devices, and conducting usability testing to enhance overall satisfaction and engagement.</div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={mobileApp} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title ops">
                            Mobile app development
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <div data-aos="zoom-in-down">Mobile app development services involve creating applications for smartphones and tablets, catering to various platforms like iOS and Android. Services include designing user interfaces, developing functionality, ensuring compatibility across devices, and optimizing performance. These services help businesses reach and engage with their target audience on mobile devices, enhancing user experience and driving business growth.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;