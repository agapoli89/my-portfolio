import { motion } from "framer-motion"

import aboutme from '../../../images/aboutme.png';
import phone from '../../../images/phone.png';
import works from '../../../images/works.png';

import './Tile.scss';

const Tile = ({
    id, 
    title, 
    img, 
    additionalClass, 
    additionalTextClass, 
    handleVisibledContent,
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
    
    return (  
        <motion.button 
            id={id} 
            className={`tile ${additionalClass}`} 
            onClick={handleVisibledContent}
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', delay: id / 2.5 }}
        >
            {image}
            <h2 className={`tile__text ${additionalTextClass}`}>{title}</h2>
        </motion.button>
    );
}
 
export default Tile;