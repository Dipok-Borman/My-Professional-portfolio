import BackEndSection from "./BackEndSection";
import FrontEndSection from "./FrontEndSection";
import SkillBanner from "./SkillBanner";

const Skill = () => {
    return (
        <div>
            <SkillBanner></SkillBanner>
            <FrontEndSection></FrontEndSection>
            <BackEndSection></BackEndSection>
        </div>
    );
};

export default Skill;