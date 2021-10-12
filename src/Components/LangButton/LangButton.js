import './LangButton.scss';

const LangButton = ({lang, handleChangeLang}) => {

    const langToDisplay = lang === 'pl' ? 'en' : 'pl';
    
    return (  
        <button className="lang-button" onClick={handleChangeLang}>{langToDisplay}</button>
    );
}
 
export default LangButton;