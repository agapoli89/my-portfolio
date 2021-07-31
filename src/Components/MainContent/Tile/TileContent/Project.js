import { useState } from "react";
import { IoPlayCircle, IoInformationCircleSharp } from "react-icons/io5";

const Project = ({title, linkToLive, linkToCode, image}) => {
    const [isMouseEnter, setIsMouseEnter] = useState(false);
    const handleMouseEnter = () => setIsMouseEnter(true);
    const handleMouseLeave = () => setIsMouseEnter(false);
    return (  
        <div 
            className={`tile__content__my-project tile__content__my-project--${image}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isMouseEnter && 
                (<div className={'tile__content__my-project__text'}>
                    {title}
                    <div className={'tile__content__my-project__text--icons'}>
                        <a className="tile__content__link--icon" href={linkToLive} rel="noopener noreferrer" target="_blank"><IoPlayCircle /></a>
                        <a className="tile__content__link--icon" href={linkToCode} rel="noopener noreferrer" target="_blank"><IoInformationCircleSharp /></a>
                    </div>
                </div>)}
        </div>
    );
}
 
export default Project;