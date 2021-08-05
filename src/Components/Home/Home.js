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
        return tile.id !== 2
        ? <Tile key={tile.id} {...tile} />
        : (
            <motion.div 
                key={tile.id}
                id={tile.id} 
                className={`tile-to-hover tile ${tile.additionalClass}`} 
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', delay: tile.id / 2.5 }}
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