import Tile from './Tile/Tile';
import { tileData } from './Tile/TileData';

import './MainContent.scss';
import { useState } from 'react';
import AboutMe from './Tile/TileContent/AboutMe';

const MainContent = ({lang}) => {
    const [visibledContent, setVisibledContent] = useState(null);
    const langToDisplay = lang === 'PL' ? 'en' : 'pl';

    const handleVisibledContent = (e) => {
        const element = e.target.tagName === "BUTTON"
                        ? e.target
                        : e.target.parentElement;
        showTileContent(element.id);
    };

    const showTileContent = id => {
        setVisibledContent(
            id === "1"
                ? <AboutMe handleExitButton={closeTileContent} langToDisplay={langToDisplay}/>
                : null
        )
    }

    const closeTileContent = () => {
        setVisibledContent(null)
    }
    
    const tiles = tileData[langToDisplay].map(tile => (
        <Tile key={tile.id} {...tile} handleVisibledContent={handleVisibledContent} />
    ))

    return (  
        <main className="main-content">
            {!visibledContent ? tiles : visibledContent}
        </main>
    );
}
 
export default MainContent;