import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

import aboutme from '../../images/aboutme.png';
import phone from '../../images/phone.png';
import works from '../../images/works.png';

const Tile = ({
    id, 
    title, 
    img, 
    additionalClass, 
    additionalTextClass, 
    }) => {
    
    const image = img && (
        <img 
            src={img === 'aboutme'
                    ? aboutme
                    : img === 'phone'
                        ? phone 
                        : works}
            className="tile__image" 
            alt={title} 
        />
    )

    const tileVariants = {
        hidden: {
            x: '-100vw',
        },
        visible: {
            x: 0,
            transition: {
                type: 'spring', 
                delay: id / 2.5,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut',
                duration: .5,
            }
        },
    }   

    return (  
        <Link to={`${id}`} className={`tile-to-hover tile__link ${id === 3 && 'tile--outstanding-parent'}`}>
            <motion.button 
                id={id} 
                className={`tile ${additionalClass}`}
                variants={tileVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {image}
                <h2 className={`tile__text ${additionalTextClass}`}>{title}</h2>
            </motion.button>
        </Link>
    );
}
 
export default Tile;