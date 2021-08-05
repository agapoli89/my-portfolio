import { Link } from 'react-router-dom';
import '../Tile.scss';

const ExitButton = () => (  
        <Link to="/" className="tile__content__exit-button"> 
            x
        </Link>
    );
 
export default ExitButton;