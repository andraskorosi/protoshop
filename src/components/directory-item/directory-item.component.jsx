import { Link } from 'react-router-dom';
import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, path } = category
  
  return (
    <Link to={path ? path : `/shop/${title}`} className="directory-item-container">
      <div className="background-image" style={{ backgroundImage : `url(${imageUrl})` }} />
      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  )
}

export default DirectoryItem