import { useEffect } from 'react';
import aboutImg from '../../assets/Home/About/about1.png';
import Aos from 'aos';

const AboutPage = () => {

    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            delay: 20,
        });
    }, [])

    return (
        <div className='pt-32'>
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
                            <p className=''>Hello there! I am Dipok, a passionate MERN stack React JavaScript web developer with 5 years of experience in crafting dynamic and user-friendly web applications. With a strong foundation in front-end development using React.js, along with expertise in back-end technologies like Node.js, Express, and MongoDB, I thrive in creating seamless and scalable solutions for various industries.</p>
                        </div>
                        <div data-aos="fade-up" className='pt-32 text-end'>
                            <h1 className="text-4xl ops">Read More about total</h1>
                            <h1 className="text-4xl ops">of <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>My Journey</span></h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* peragraph section */}
            <div className='-mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 px-5'>
                <div data-aos="fade-up">
                    <p>My journey in web development began with a fascination for crafting interactive user interfaces and has evolved into a comprehensive understanding of full-stack development using the MERN (MongoDB, Express, React, Node.js) stack. Whether it is building responsive layouts, implementing state management, or optimizing database queries, I enjoy diving deep into every aspect of the development process to deliver exceptional user experiences.</p>
                </div>
                <div data-aos="fade-up">
                    <p>I have had the privilege of working on diverse projects, ranging from e-commerce platforms and content management systems to social media applications and beyond. Throughout my career, I have honed my skills in leveraging modern technologies, libraries, and best practices to meet project requirements efficiently while ensuring code quality and maintainability.</p>
                </div>
                <div data-aos="fade-up">
                    <p>Beyond technical expertise, I am committed to staying updated with the latest trends and advancements in web development, continuously learning and exploring new tools and frameworks to enhance productivity and drive innovation in my work.</p>
                </div>
                <div data-aos="fade-up">
                    <p>In addition to technical skills, full stack developers often have knowledge of various tools, libraries, and frameworks used in web development, as well as an understanding of web architecture, security principles, and best practices. They may also have experience with version control systems like Git, and deployment processes using platforms like AWS, Heroku, or Docker.</p>
                </div>
                <div data-aos="fade-up">
                    <p>Overall, full stack web developers play a crucial role in building dynamic and functional web applications, from conceptualization to deployment, and they are in high demand in the tech industry.</p>
                </div>
                <div data-aos="fade-up">
                    <p>I am excited about the opportunity to collaborate on impactful projects, contribute my skills to your team, and help bring your ideas to life in the digital world. Let us build something awesome together!</p>
                </div>
            </div>
            {/* my work category */}
            <div className='mt-20 px-5'>
                <div>
                    <div>
                        <h5 className="text-center uppercase russo bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Category</h5>
                    </div>
                    <div className='flex place-content-center mb-5' data-aos="flip-down">
                        <h1 className="text-center py-5 border-y-2 w-fit text-4xl ops uppercase">Skill Category</h1>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20'>
                    <div>
                        <div>
                            <h5 className="text-1xl uppercase ops bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Website Design and Development</h5>
                        </div>
                        <div data-aos="fade-up">
                            <p>This involves creating websites from scratch or redesigning existing ones to meet the specific needs and objectives of businesses or individuals. Web developers use various programming languages, frameworks, and content management systems (CMS) to build custom websites tailored to client requirements.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5 className="text-1xl uppercase ops bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Front-end Development</h5>
                        </div>
                        <div data-aos="fade-up">
                            <p>Front-end development focuses on the visual and interactive aspects of a website that users interact with directly. It involves using languages like HTML, CSS, and JavaScript to create user interfaces, responsive layouts, and dynamic content that enhance the user experience.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5 className="text-1xl uppercase ops bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Back-end Development</h5>
                        </div>
                        <div data-aos="fade-up">
                            <p>Back-end development involves building the server-side logic, database management systems, and application architecture that support the functionality of websites and web applications. Back-end developers use languages like Python, Ruby, Java, PHP, and frameworks like Django, Ruby on Rails, Spring, and Laravel to create robust and scalable solutions.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5 className="text-1xl uppercase ops bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">E-commerce Development</h5>
                        </div>
                        <div data-aos="fade-up">
                            <p>E-commerce development services specialize in creating online stores and digital commerce platforms that enable businesses to sell products and services online. These services often involve integrating payment gateways, managing product catalogs, implementing shopping carts, and ensuring secure transactions.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5 className="text-1xl uppercase ops bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Custom Web Application Development</h5>
                        </div>
                        <div data-aos="fade-up">
                            <p>Custom web application development involves building tailored solutions to address specific business needs and challenges. This may include developing customer relationship management (CRM) systems, enterprise resource planning (ERP) software, project management tools, and other specialized applications to streamline operations and enhance productivity.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5 className="text-1xl uppercase ops bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Content Management Systems (CMS)</h5>
                        </div>
                        <div data-aos="fade-up">
                            <p>Web development services may also include implementing and customizing content management systems like WordPress, Drupal, Joomla, and others. CMS platforms enable clients to manage and update website content easily without requiring advanced technical skills.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5 className="text-1xl uppercase ops bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Responsive Web Design</h5>
                        </div>
                        <div data-aos="fade-up">
                            <p>With the increasing prevalence of mobile devices, responsive web design has become essential. Web development services often include optimizing websites for various screen sizes and devices to ensure consistent and seamless user experiences across desktops, laptops, tablets, and smartphones.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5 className="text-1xl uppercase ops bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Website Maintenance and Support</h5>
                        </div>
                        <div data-aos="fade-up">
                            <p>Beyond initial development, web development services may also include ongoing maintenance, updates, and technical support to ensure websites and web applications remain secure, functional, and up-to-date with evolving technology and security standards.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Thank you */}
            <div className='mt-20 mb-20'>
                <div>
                    <div>
                        <h5 className="text-center uppercase russo bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Overall</h5>
                    </div>
                    <div className='flex place-content-center mb-5' data-aos="flip-down">
                        <h1 className="text-center py-5 border-y-2 w-fit text-4xl ops uppercase">Thank You</h1>
                    </div>
                </div>
                <div className='text-center russo'>
                    <p>Thank you for taking the time to visit my portfolio. It was a pleasure to have you explore my work and learn more about the projects I have been involved in. Your interest and engagement mean a lot to me.</p>
                    <p>If you have any questions or if there is anything specific you would like to discuss further, please do not hesitate to reach out. I am here to assist you in any way I can.</p>
                    <p>Once again, thank you for your visit. I look forward to the opportunity to collaborate and create something great together in the future.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;