import Tile from './Tile/Tile';
import { tileData } from './Tile/TileData';

import './MainContent.scss';
import './Tile/Tile.scss';
import { useState, useContext } from 'react';
import TileContent from './Tile/TileContent/TileContent';
import { LangContext } from '../../App';

const MainContent = () => {
    const lang = useContext(LangContext).lang;
    const [visibledContent, setVisibledContent] = useState(null);

    const handleVisibledContent = (e) => {
        const element = e.target.tagName === "BUTTON"
                        ? e.target
                        : e.target.parentElement;
        showTileContent(element.id);
    };

    const showTileContent = id => {
        setVisibledContent(
            id !== "2" && <TileContent id={id} handleExitButton={closeTileContent}/>
        )
    }

    const closeTileContent = () => {
        setVisibledContent(null)
    }
    
    const tiles = tileData[lang].map(tile => (
        <Tile 
            key={tile.id} 
            {...tile} 
            handleVisibledContent={handleVisibledContent} 
        />
    ))

    return (  
        <main className="main-content">
            {!visibledContent ? tiles : visibledContent}
        </main>
    );
}
 
export default MainContent;