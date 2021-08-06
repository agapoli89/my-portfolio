import { IoLogoJavascript, IoLogoReact, IoLogoHtml5, IoLogoCss3, IoLogoSass, IoLogoGithub, IoLogoFirebase, IoLogoWordpress, IoArrowBackOutline, IoLogoLinkedin, IoLogoInstagram, IoLogoFacebook, IoMailOutline } from "react-icons/io5";
import { SiTypescript, SiBootstrap, SiJquery, SiGit } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from 'framer-motion';

import ExitButton from './ExitButton';
import Project from './Project';
import { tileData } from '../TileData';
import { useContext } from "react";
import {LangContext} from '../../../App';
import { useLocation } from "react-router-dom";

const TileContent = () => {
    const lang = useContext(LangContext).lang;
    
    const { header, par1, par2, subtitle } = tileData[lang][0].content;
    const { moreCode, projects } = tileData[lang][2].content;
    const location = useLocation();
    const id = location.pathname;

    const tileContentToDisplay = id === '/1'
        ? (
            <>
                <h3>{header}</h3>
                <p>{par1}</p>
                <p>{par2}</p>
                <h4 className="tile__content__about-me__subtitle">{subtitle}</h4>
                <div className="tile__content__about-me__icons-box">
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
        : id === "/3"
            ? (
                <>
                    <p className="tile__content__my-projects__subtitle">
                        <IoLogoGithub />
                        <IoArrowBackOutline />
                        <a 
                            href='https://github.com/agapoli89' 
                            className="tile__link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {moreCode}
                        </a>
                    </p>
                    <div className="tile__content__my-projects__container">
                        {projects.map(project => <Project key={project.title} {...project}/>)}
                    </div>
                </>
            )
            : (
                <div className="tile__content__contact-data">
                    <div>
                        <a href="tel:+48508071833" rel="noopener noreferrer" className="tile__link tile__link--icon-contact">
                            <FaPhoneAlt /> 
                            <span className="tile__link--text-contact">+48 508071833</span>
                        </a>
                        <a href="mailto:agapoli@gmail.com" rel="noopener noreferrer" className="tile__link tile__link--icon-contact">
                            <IoMailOutline />
                            <span className="tile__link--text-contact">agapoli@gmail.com</span>
                        </a>
                    </div>
                    <div>
                        <h5 className="tile__content__contact-data__subtitle">{tileData[lang][3].content}</h5>
                        <a href="https://www.linkedin.com/in/agnieszka-poli%C5%84ska-a76401171/" rel="noopener noreferrer" className="tile__link tile__link--social-media" target="_blank">
                            <IoLogoLinkedin />
                        </a>
                        <a href="https://www.instagram.com/agapoli89/" rel="noopener noreferrer" className="tile__link tile__link--social-media" target="_blank">
                            <IoLogoInstagram />
                        </a>
                        <a href="https://www.facebook.com/agnieszka.polinska.9/" rel="noopener noreferrer" className="tile__link tile__link--social-media" target="_blank">
                            <IoLogoFacebook />
                        </a>
                    </div>
                </div>
            )

    const tileContentVariants = {
            hidden: {
                opacity: 0,
                scale: 0,
            },
            visible: {
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 2,
                }
            }
        }   
        
    return (
        <motion.div 
            className={`tile__content ${id !== "/1" && 'tile__content--center'}`}
            variants={tileContentVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
        >
            <ExitButton />
            {tileContentToDisplay}
        </motion.div>
    );
}
 
export default TileContent;