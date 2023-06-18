import Featured from "./Featured/Featured";
import Founders from "./Founders/Founders";
import Investors from "./Investors/Investors";
import AboutBanner from "./banner/AboutBanner";
import Gallery from "./gallery/Gallery";
import Growth from "./growth/Growth";

const AboutUs = () => {
    return (
        <div>
        <AboutBanner></AboutBanner>
        <Growth></Growth>
        <Featured></Featured>
        <Investors></Investors>
        <Founders></Founders>
        <Gallery></Gallery>
        </div>
    );
};

export default AboutUs;