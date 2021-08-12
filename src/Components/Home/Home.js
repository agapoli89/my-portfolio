import Tile from '../Tile/Tile';
import { tileData } from '../Tile/TileData';

import './Home.scss';
import '../Tile/Tile.scss';
import {  useContext } from 'react';
import { LangContext } from '../../App';
import { motion } from "framer-motion"

const Home = () => {
    const lang = useContext(LangContext).lang;
    
    const tiles = tileData[lang].map(tile => {
        const tileVariants = {
            hidden: {
                opacity: 0,
            },
            visible: {
                opacity: 1,
                transition: {
                    ease: 'easeInOut',
                    delay: tile.delay,
                    duration: .5,
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
        return tile.id !== 2
        ? <Tile key={tile.id} {...tile} />
        : (
            <motion.div 
                key={tile.id}
                id={tile.id} 
                className={`tile-to-hover tile ${tile.additionalClass}`} 
                variants={tileVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <h2 className={`tile__text ${tile.additionalTextClass}`}>{tile.title}</h2>
            </motion.div>
        )
    })

    return (  
        <main className="home">
            {tiles}
        </main>
    );
}
 
export default Home;