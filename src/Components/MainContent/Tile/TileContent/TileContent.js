import { IoLogoJavascript, IoLogoReact, IoLogoHtml5, IoLogoCss3, IoLogoSass, IoLogoGithub, IoLogoFirebase, IoLogoWordpress, IoArrowBackOutline } from "react-icons/io5";
import { SiTypescript, SiBootstrap, SiJquery, SiGit } from "react-icons/si";

import ExitButton from './ExitButton';
import Project from './Project';
import { tileData } from '../TileData';

const TileContent = ({id, handleExitButton, langToDisplay}) => {

    const { header, par1, par2, subtitle } = tileData[langToDisplay][0].content;
    const { moreCode, projects } = tileData[langToDisplay][2].content;

    const tileContentToDisplay = id === '1'
        ? (
            <>
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
            </>
        )
        : id === "3"
            ? (
                <>
                    <p className="tile__content__more-code">
                        <IoLogoGithub />
                        <IoArrowBackOutline />
                        <a 
                            href='https://github.com/agapoli89' 
                            className="tile__content__link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {moreCode}
                        </a>
                    </p>
                    <div className="tile__content__my-projects-container">
                        {projects.map(project => <Project key={project.title} {...project}/>)}
                    </div>
                </>
            )
            : <div>4</div>

    return (
        <div className={`tile__content ${id === "3" && 'tile__content--my-works'}`}>
            <ExitButton handleExitButton={handleExitButton}/>
            {tileContentToDisplay}
        </div>
    );
}
 
export default TileContent;