import './LangButton.scss';

const LangButton = ({lang, handleChangeLang}) => {
    
    return (  
        <button className="lang-button" onClick={handleChangeLang}>{lang}</button>
    );
}
 
export default LangButton;