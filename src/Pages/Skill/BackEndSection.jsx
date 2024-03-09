import nodeImg from '../../assets/Skill/back-end/node-js-svgrepo-com.svg';
import expressImg from '../../assets/Skill/back-end/express-svgrepo-com.svg';
import mongodbImg from '../../assets/Skill/back-end/mongodb-logo-svgrepo-com.svg';
import jwtImg from '../../assets/Skill/back-end/icons8-jwt.svg';
import vercelImg from '../../assets/Skill/back-end/vercel-svgrepo-com.svg';

const BackEndSection = () => {
    return (
        <div className='py-32'>
            <div className="pb-10">
                <div>
                    <h5 className="text-center uppercase russo bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Development</h5>
                </div>
                <div className='flex place-content-center mb-5' data-aos="flip-down">
                    <h1 className="text-center py-5 border-y-2 w-fit text-4xl ops uppercase">Back-end Development tools</h1>
                </div>
            </div>
            {/* cards */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
                <div className="w-fit" data-aos="zoom-in-right">
                    <div className="avatar flex flex-col justify-center">
                        <div className="w-24 rounded-xl">
                            <img src={nodeImg} />
                        </div>
                        <p className="russo text-center"></p>
                    </div>
                </div>
                <div className="w-fit" data-aos="zoom-in-left">
                    <div className="avatar flex flex-col justify-center">
                        <div className="w-24 rounded-xl">
                            <img src={expressImg} />
                        </div>
                        <p className="russo text-center">Express js</p>
                    </div>
                </div>
                <div className="w-fit" data-aos="zoom-in-right">
                    <div className="avatar flex flex-col justify-center">
                        <div className="w-24 rounded-xl">
                            <img src={mongodbImg} />
                        </div>
                        <p className="russo text-center"></p>
                    </div>
                </div>
                <div className="w-fit" data-aos="zoom-in-left">
                    <div className="avatar flex flex-col justify-center">
                        <div className="w-24 rounded-xl">
                            <img src={jwtImg} />
                        </div>
                        <p className="russo text-center">JWT Token</p>
                    </div>
                </div>
                <div className="w-fit" data-aos="zoom-in-right">
                    <div className="avatar flex flex-col justify-center">
                        <div className="w-24 rounded-xl">
                            <img src={vercelImg} />
                        </div>
                        <p className="russo text-center"></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BackEndSection;