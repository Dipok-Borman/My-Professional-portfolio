import Aos from "aos";
import { useEffect } from "react";
import eComerce from '../../assets/Project/E-comerce.png';
import education from '../../assets/Project/education.png';
import fashion from '../../assets/Project/Fashion.png';
import food from '../../assets/Project/Food.png';
import gadget from '../../assets/Project/gadgets.png';
import game from '../../assets/Project/game.png';
import helth from '../../assets/Project/Helth.png';
import garden from '../../assets/Project/home and garden.png';
import parenting from '../../assets/Project/parenting.png';
import travel from '../../assets/Project/Travel.png';

const Project = () => {

    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            delay: 20,
        });
    }, [])

    return (
        <div className="pt-40 pb-40">
            <div className="pb-10">
                <div>
                    <h5 className="text-center uppercase russo bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Projects</h5>
                </div>
                <div className='flex place-content-center mb-5' data-aos="flip-down">
                    <h1 className="text-center py-5 border-y-2 w-fit text-4xl ops uppercase">Some Completed Project</h1>
                </div>
            </div>
            {/* cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 place-content-evenly place-items-center">
                <div className="card w-80 glass h-fit lg:mb-40" data-aos="zoom-out-up">
                    <figure><img src={eComerce} alt="car!" /></figure>
                    <div className="card-body bg-opacity-90">
                        <h2 className="card-title russo" data-aos="flip-down">E-commerce</h2>
                        <p className="play" data-aos="fade-up">An online marketplace offering a wide range of products from electronics and fashion to home decor and more.</p>
                        <div className="card-actions justify-end mt-10">
                            <button className="btn gradient-border-button">Learn now!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 glass h-fit lg:mt-40" data-aos="zoom-out-up">
                    <figure><img src={food} alt="car!" /></figure>
                    <div className="card-body bg-opacity-90">
                        <h2 className="card-title russo" data-aos="flip-down">Food</h2>
                        <p className="play" data-aos="fade-up">A culinary haven featuring mouthwatering recipes, cooking tips, and food-related articles for food enthusiasts.</p>
                        <div className="card-actions justify-end mt-10">
                            <button className="btn gradient-border-button">Learn now!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 glass h-fit lg:mb-40" data-aos="zoom-out-up">
                    <figure><img src={fashion} alt="car!" /></figure>
                    <div className="card-body bg-opacity-90">
                        <h2 className="card-title russo" data-aos="flip-down">Fashion</h2>
                        <p className="play" data-aos="fade-up">Your ultimate destination for the latest trends, fashion tips, and style inspiration for men and women.</p>
                        <div className="card-actions justify-end mt-10">
                            <button className="btn gradient-border-button">Learn now!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 glass h-fit lg:mt-40" data-aos="zoom-out-up">
                    <figure><img src={game} alt="car!" /></figure>
                    <div className="card-body bg-opacity-90">
                        <h2 className="card-title russo" data-aos="flip-down">Game</h2>
                        <p className="play" data-aos="fade-up">Dive into a galaxy of gaming with reviews, news, and guides on your favorite video games across all platforms.</p>
                        <div className="card-actions justify-end mt-10">
                            <button className="btn gradient-border-button">Learn now!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 glass h-fit lg:mt-40" data-aos="zoom-out-up">
                    <figure><img src={travel} alt="car!" /></figure>
                    <div className="card-body bg-opacity-90">
                        <h2 className="card-title russo" data-aos="flip-down">Travel</h2>
                        <p className="play" data-aos="fade-up">Embark on unforgettable journeys and discover hidden gems with travel guides, tips, and breathtaking photography.</p>
                        <div className="card-actions justify-end mt-10">
                            <button className="btn gradient-border-button">Learn now!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 glass h-fit" data-aos="zoom-out-up">
                    <figure><img src={helth} alt="car!" /></figure>
                    <div className="card-body bg-opacity-90">
                        <h2 className="card-title russo" data-aos="flip-down">Health & Fitness</h2>
                        <p className="play" data-aos="fade-up">Your go-to resource for fitness routines, healthy recipes, wellness tips, and motivation to lead a balanced lifestyle.</p>
                        <div className="card-actions justify-end mt-10">
                            <button className="btn gradient-border-button">Learn now!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 glass h-fit" data-aos="zoom-out-up">
                    <figure><img src={gadget} alt="car!" /></figure>
                    <div className="card-body bg-opacity-90">
                        <h2 className="card-title russo" data-aos="flip-down">Tech & Gadgets</h2>
                        <p className="play" data-aos="fade-up">Stay ahead of the curve with the latest tech news, gadget reviews, and insights into the world of innovation and technology.</p>
                        <div className="card-actions justify-end mt-10">
                            <button className="btn gradient-border-button">Learn now!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 glass h-fit lg:mt-40 lg:mb-20" data-aos="zoom-out-up">
                    <figure><img src={education} alt="car!" /></figure>
                    <div className="card-body bg-opacity-90">
                        <h2 className="card-title russo" data-aos="flip-down">Education</h2>
                        <p className="play" data-aos="fade-up">Unlock your potential with online courses, tutorials, and resources covering a wide array of subjects and skills.</p>
                        <div className="card-actions justify-end mt-10">
                            <button className="btn gradient-border-button">Learn now!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 glass h-fit" data-aos="zoom-out-up">
                    <figure><img src={parenting} alt="car!" /></figure>
                    <div className="card-body bg-opacity-90">
                        <h2 className="card-title russo" data-aos="flip-down">Parenting</h2>
                        <p className="play" data-aos="fade-up">A trusted source for parents, offering expert advice, parenting tips, and valuable insights into child development.</p>
                        <div className="card-actions justify-end mt-10">
                            <button className="btn gradient-border-button">Learn now!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 glass h-fit lg:mt-40" data-aos="zoom-out-up">
                    <figure><img src={garden} alt="car!" /></figure>
                    <div className="card-body bg-opacity-90">
                        <h2 className="card-title russo" data-aos="flip-down">Home & Garden</h2>
                        <p className="play" data-aos="fade-up">Transform your space into a cozy haven with home decor ideas, gardening tips, and DIY projects for every room.</p>
                        <div className="card-actions justify-end mt-10">
                            <button className="btn gradient-border-button">Learn now!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;