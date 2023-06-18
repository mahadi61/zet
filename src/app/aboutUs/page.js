import Featured from "./Featured/Featured";
import Investors from "./Investors/Investors";
import AboutBanner from "./banner/AboutBanner";
import Growth from "./growth/Growth";

const AboutUs = () => {
    return (
        <div>
        <AboutBanner></AboutBanner>
        <Growth></Growth>
        <Featured></Featured>
        <Investors></Investors>
        </div>
    );
};

export default AboutUs;