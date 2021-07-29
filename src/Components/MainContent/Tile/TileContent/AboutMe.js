import { IoLogoJavascript, IoLogoReact, IoLogoHtml5, IoLogoCss3, IoLogoSass, IoLogoGithub, IoLogoFirebase, IoLogoWordpress } from "react-icons/io5";
import { SiTypescript, SiBootstrap, SiJquery, SiGit } from "react-icons/si";

import ExitButton from './ExitButton';
import { tileData } from '../TileData';

const AboutMe = ({handleExitButton, langToDisplay}) => {

    const { header, par1, par2, subtitle } = tileData[langToDisplay][0].content;

    return (  
        <div className="tile__content">
            <ExitButton handleExitButton={handleExitButton}/>
            <h3>{header}</h3>
            <p>{par1}</p>
            <p>{par2}</p>
            <h4 className="tile__content__subtitle">{subtitle}</h4>
            <div className="tile__content__icons-box">
                <IoLogoJavascript />
                <IoLogoReact />
                <SiTypescript />
                <IoLogoHtml5 />
                <IoLogoCss3 />
                <IoLogoSass />
                <SiBootstrap />
                <SiJquery />
                <SiGit />
                <IoLogoGithub />
                <IoLogoFirebase />
                <IoLogoWordpress />
            </div>
        </div>
    );
}
 
export default AboutMe;