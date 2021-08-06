import { Link } from 'react-router-dom';
import '../Tile.scss';
import cross from '../../../images/cross.png';

const ExitButton = () => (  
        <Link to="/"> 
            <img src={cross} alt="exit-button" className="tile__link tile__content__exit-button"/>
        </Link>
    );
 
export default ExitButton;