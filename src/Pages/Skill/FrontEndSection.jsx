import htmlImg from '../../assets/Skill/front-end/html-5-logo-svgrepo-com.svg';
import css3Img from '../../assets/Skill/front-end/css3-svgrepo-com.svg';
import bootstrapImg from '../../assets/Skill/front-end/bootstrap-4-logo-svgrepo-com.svg';
import tailwindcssImg from '../../assets/Skill/front-end/tailwindcss-icon-svgrepo-com.svg';
import javascriptImg from '../../assets/Skill/front-end/javascript-svgrepo-com.svg';
import jqueryImg from '../../assets/Skill/front-end/jquery-svgrepo-com.svg';
import nextjsImg from '../../assets/Skill/front-end/nextjs-svgrepo-com.svg';
import reactImg from '../../assets/Skill/front-end/react-javascript-js-framework-facebook-svgrepo-com.svg';
import routerImg from '../../assets/Skill/front-end/react-router-svgrepo-com.svg';
import viteImg from '../../assets/Skill/front-end/vite-svgrepo-com.svg';
import firebaseImg from '../../assets/Skill/front-end/firebase-svgrepo-com.svg';
import stripeImg from '../../assets/Skill/front-end/stripe-svgrepo-com.svg';

const FrontEndSection = () => {
    return (
        <div>
            <div className="pb-10 flex-col justify-center">
                <div>
                    <h5 className="text-center uppercase russo bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Design</h5>
                </div>
                <div className='flex place-content-center mb-5' data-aos="flip-down">
                    <h1 className="text-center py-5 border-y-2 w-fit text-4xl ops uppercase">Front-end Development tools</h1>
                </div>
            </div>
            {/* cards */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center place-content-center">
                <div className="w-fit" data-aos="zoom-in-right">
                    <div className="avatar flex flex-col justify-center">
                        <div className="w-24 rounded-xl">
                            <img src={htmlImg} />
                        </div>
                        <p className="russo text-center">html 5</p>
                    </div>
                </div>
                <div className="w-fit" data-aos="zoom-in-left">
                    <div className="avatar flex flex-col justify-center">
                        <div className="w-24 rounded-xl">
                            <img src={css3Img} />
                        </div>
                        <p className="russo text-center">css 3</p>
                    </div>
                </div>
                <div className="w-fit" data-aos="zoom-in-right">
                    <div className="avatar flex flex-col justify-center">
                        <div className="w-24 rounded-xl">
                            <img src={bootstrapImg} />
                        </div>
                        <p className="russo text-center">Bootstrap 5</p>
                    </div>
                </div>
                <div className="w-fit" data-aos="zoom-in-left">
                    <div className="avatar flex flex-col justify-center">
                        <div className="w-24 rounded-xl">
                            <img src={tailwindcssImg} />
                        </div>
                        <p className="russo text-center">Tailwind</p>
                    </div>
                </div>
                <div className="w-fit" data-aos="zoom-in-right">
                    <div className="avatar flex flex-col justify-center">
                        <div className="w-24 rounded-xl">
                            <img src={javascriptImg} />
                        </div>
                        <p className="russo text-center">JavaScript</p>
                    </div>
                </div>
                <div className="w-fit" data-aos="zoom-in-left">
                    <div className="avatar flex flex-col justify-center">
                        <div className="w-24 rounded-xl">
                            <img src={jqueryImg} />
                        </div>
                        <p className="russo text-center">Jquery</p>
                    </div>
                </div>
                <div className="w-fit" data-aos="zoom-in-right">
                    <div className="avatar flex flex-col justify-center">
                        <div className="w-24 rounded-xl">
                            <img src={nextjsImg} />
                        </div>
                        <p className="russo text-center">NextJs</p>
                    </div>
                </div>
                <div className="w-fit" data-aos="zoom-in-left">
                    <div className="avatar flex flex-col justify-center">
                        <div className="w-24 rounded-xl">
                            <img src={reactImg} />
                        </div>
                        <p className="russo text-center">React</p>
                    </div>
                </div>
                <div className="w-fit" data-aos="zoom-in-right">
                    <div className="avatar flex flex-col justify-center">
                        <div className="w-24 rounded-xl">
                            <img src={routerImg} />
                        </div>
                        <p className="russo text-center">Router</p>
                    </div>
                </div>
                <div className="w-fit" data-aos="zoom-in-left">
                    <div className="avatar flex flex-col justify-center">
                        <div className="w-24 rounded-xl">
                            <img src={viteImg} />
                        </div>
                        <p className="russo text-center">Vite</p>
                    </div>
                </div>
                <div className="w-fit" data-aos="zoom-in-right">
                    <div className="avatar flex flex-col justify-center">
                        <div className="w-24 rounded-xl">
                            <img src={firebaseImg} />
                        </div>
                        <p className="russo text-center">Firebase</p>
                    </div>
                </div>
                <div className="w-fit" data-aos="zoom-in-left">
                    <div className="avatar flex flex-col justify-center">
                        <div className="w-24 rounded-xl">
                            <img src={stripeImg} />
                        </div>
                        <p className="russo text-center">Stripe</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrontEndSection;