import { 
  DirectoryItemContainer,
  BackgroundImage,
  Body
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, path } = category
  
  return (
    <DirectoryItemContainer to={path ? path : `/shop/${title}`}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem