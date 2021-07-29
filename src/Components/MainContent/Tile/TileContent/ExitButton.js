import '../Tile.scss'

const ExitButton = ({handleExitButton}) => {
    return (  
        <button className="tile__content__exit-button" onClick={handleExitButton}>x</button>
    );
}
 
export default ExitButton;